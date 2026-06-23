// Taken from @nkzw/liquid-glass with some removals to fit my needs and allow liquid glass components to take space

import {
  type CSSProperties,
  forwardRef,
  PropsWithChildren,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ShaderDisplacementGenerator, fragmentShaders } from "./shader-utils";
import {
  displacementMap,
  polarDisplacementMap,
  prominentDisplacementMap,
} from "./utils";

// Generate shader-based displacement map using shaderUtils
const generateShaderDisplacementMap = (
  width: number,
  height: number,
): string => {
  const generator = new ShaderDisplacementGenerator({
    fragment: fragmentShaders.liquidGlass,
    height,
    width,
  });

  const dataUrl = generator.updateShader();
  generator.destroy();

  return dataUrl;
};

function getShapeStyle(
  borderRadius: number,
  clipPathId?: string,
): CSSProperties {
  if (clipPathId) {
    const clip = `url(#${clipPathId})`;
    return { clipPath: clip, WebkitClipPath: clip };
  }
  return { borderRadius };
}

const ShapeClipPathDef = ({
  id,
  path,
  scale = 1,
}: {
  id: string;
  path: string;
  scale?: number;
}) => (
  <svg aria-hidden="true" height="0" style={{ position: "absolute" }} width="0">
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id={id}>
        <path
          d={path}
          transform={scale === 1 ? undefined : `scale(${scale})`}
        />
      </clipPath>
    </defs>
  </svg>
);

const getMap = (
  mode: "standard" | "polar" | "prominent" | "shader",
  shaderMapUrl?: string,
) => {
  switch (mode) {
    case "standard":
      return displacementMap;
    case "polar":
      return polarDisplacementMap;
    case "prominent":
      return prominentDisplacementMap;
    case "shader":
      return shaderMapUrl || displacementMap;
    default:
      throw new Error(`Invalid mode: ${mode}`);
  }
};

/* ---------- SVG filter (edge-only displacement) ---------- */
const GlassFilter = ({
  aberrationIntensity,
  displacementScale,
  id,
  mode,
  shaderMapUrl,
}: {
  aberrationIntensity: number;
  displacementScale: number;
  id: string;
  mode: "standard" | "polar" | "prominent" | "shader";
  shaderMapUrl?: string;
}) => (
  <svg
    aria-hidden="true"
    height="100%"
    style={{ position: "absolute" }}
    width="100%"
  >
    <defs>
      <radialGradient cx="50%" cy="50%" id={`${id}-edge-mask`} r="50%">
        <stop offset="0%" stopColor="black" stopOpacity="0" />
        <stop
          offset={`${Math.max(30, 80 - aberrationIntensity * 2)}%`}
          stopColor="black"
          stopOpacity="0"
        />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </radialGradient>
      <filter
        colorInterpolationFilters="sRGB"
        height="170%"
        id={id}
        width="170%"
        x="-35%"
        y="-35%"
      >
        <feImage
          height="100%"
          href={getMap(mode, shaderMapUrl)}
          id="feimage"
          preserveAspectRatio="xMidYMid slice"
          result="DISPLACEMENT_MAP"
          width="100%"
          x="0"
          y="0"
        />

        {/* Create edge mask using the displacement map itself */}
        <feColorMatrix
          in="DISPLACEMENT_MAP"
          result="EDGE_INTENSITY"
          type="matrix"
          values="0.3 0.3 0.3 0 0
                 0.3 0.3 0.3 0 0
                 0.3 0.3 0.3 0 0
                 0 0 0 1 0"
        />
        <feComponentTransfer in="EDGE_INTENSITY" result="EDGE_MASK">
          <feFuncA
            tableValues={`0 ${aberrationIntensity * 0.05} 1`}
            type="discrete"
          />
        </feComponentTransfer>

        {/* Original undisplaced image for center */}
        <feOffset dx="0" dy="0" in="SourceGraphic" result="CENTER_ORIGINAL" />

        {/* Red channel displacement with slight offset */}
        <feDisplacementMap
          in="SourceGraphic"
          in2="DISPLACEMENT_MAP"
          result="RED_DISPLACED"
          scale={displacementScale * (mode === "shader" ? 1 : -1)}
          xChannelSelector="R"
          yChannelSelector="B"
        />
        <feColorMatrix
          in="RED_DISPLACED"
          result="RED_CHANNEL"
          type="matrix"
          values="1 0 0 0 0
                 0 0 0 0 0
                 0 0 0 0 0
                 0 0 0 1 0"
        />

        {/* Green channel displacement */}
        <feDisplacementMap
          in="SourceGraphic"
          in2="DISPLACEMENT_MAP"
          result="GREEN_DISPLACED"
          scale={
            displacementScale *
            ((mode === "shader" ? 1 : -1) - aberrationIntensity * 0.05)
          }
          xChannelSelector="R"
          yChannelSelector="B"
        />
        <feColorMatrix
          in="GREEN_DISPLACED"
          result="GREEN_CHANNEL"
          type="matrix"
          values="0 0 0 0 0
                 0 1 0 0 0
                 0 0 0 0 0
                 0 0 0 1 0"
        />

        {/* Blue channel displacement with slight offset */}
        <feDisplacementMap
          in="SourceGraphic"
          in2="DISPLACEMENT_MAP"
          result="BLUE_DISPLACED"
          scale={
            displacementScale *
            ((mode === "shader" ? 1 : -1) - aberrationIntensity * 0.1)
          }
          xChannelSelector="R"
          yChannelSelector="B"
        />
        <feColorMatrix
          in="BLUE_DISPLACED"
          result="BLUE_CHANNEL"
          type="matrix"
          values="0 0 0 0 0
                 0 0 0 0 0
                 0 0 1 0 0
                 0 0 0 1 0"
        />

        {/* Combine all channels with screen blend mode for chromatic aberration */}
        <feBlend
          in="GREEN_CHANNEL"
          in2="BLUE_CHANNEL"
          mode="screen"
          result="GB_COMBINED"
        />
        <feBlend
          in="RED_CHANNEL"
          in2="GB_COMBINED"
          mode="screen"
          result="RGB_COMBINED"
        />

        {/* Add slight blur to soften the aberration effect */}
        <feGaussianBlur
          in="RGB_COMBINED"
          result="ABERRATED_BLURRED"
          stdDeviation={Math.max(0.1, 0.5 - aberrationIntensity * 0.1)}
        />

        {/* Apply edge mask to aberration effect */}
        <feComposite
          in="ABERRATED_BLURRED"
          in2="EDGE_MASK"
          operator="in"
          result="EDGE_ABERRATION"
        />

        {/* Create inverted mask for center */}
        <feComponentTransfer in="EDGE_MASK" result="INVERTED_MASK">
          <feFuncA tableValues="1 0" type="table" />
        </feComponentTransfer>
        <feComposite
          in="CENTER_ORIGINAL"
          in2="INVERTED_MASK"
          operator="in"
          result="CENTER_CLEAN"
        />

        {/* Combine edge aberration with clean center */}
        <feComposite in="EDGE_ABERRATION" in2="CENTER_CLEAN" operator="over" />
      </filter>
    </defs>
  </svg>
);

/* ---------- container ---------- */
type GlassContainerProps = PropsWithChildren<{
  aberrationIntensity?: number;
  blurAmount?: number;
  borderRadius?: number;
  className?: string;
  clipPathId?: string;
  clipPathSize?: { height: number; width: number };
  displacementScale?: number;
  glassSize: { height: number; width: number };
  mode?: "standard" | "polar" | "prominent" | "shader";
  mouseOffset?: { x: number; y: number };
  onClick?: () => void;
  onMouseDown?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseUp?: () => void;
  overLight?: boolean;
  padding?: string;
  saturation?: number;
  style?: CSSProperties;
}>;

const GlassContainer = forwardRef<HTMLDivElement, GlassContainerProps>(
  (
    {
      aberrationIntensity = 2,
      blurAmount = 12,
      borderRadius = 999,
      children,
      className = "",
      clipPathId,
      clipPathSize,
      displacementScale = 25,
      glassSize,
      mode = "standard",
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      overLight = false,
      padding = "24px 32px",
      saturation = 180,
      style,
    },
    ref,
  ) => {
    const filterId = useId();
    const isShaped = Boolean(clipPathId);
    const shapeStyle = getShapeStyle(borderRadius, clipPathId);
    const shaderMapUrl = useMemo(() => {
      if (mode === "shader") {
        return generateShaderDisplacementMap(glassSize.width, glassSize.height);
      }
      return "";
    }, [mode, glassSize.width, glassSize.height]);

    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

    const backdropBlur = `blur(${
      (overLight ? 12 : 4) + blurAmount * 32
    }px) saturate(${saturation}%)`;

    const backdropStyle = {
      WebkitBackdropFilter: backdropBlur,
      backdropFilter: backdropBlur,
      filter:
        isFirefox || displacementScale === 0
          ? null
          : `url(#${filterId})`,
    };

    return (
      <div
        className={className}
        onClick={onClick}
        ref={ref}
        style={{
          position: isShaped ? "relative" : "absolute",
          ...(onClick ? { cursor: "pointer" } : null),
          ...style,
        }}
      >
        {displacementScale !== 0 ? (
          <GlassFilter
            aberrationIntensity={aberrationIntensity}
            displacementScale={displacementScale}
            id={filterId}
            mode={mode}
            shaderMapUrl={shaderMapUrl}
          />
        ) : null}

        <div
          onMouseDown={onMouseDown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          style={{
            alignItems: "center",
            ...shapeStyle,
            boxShadow: clipPathId
              ? undefined
              : overLight
                ? "0px 16px 70px rgba(0, 0, 0, 0.75)"
                : "0px 12px 40px rgba(0, 0, 0, 0.25)",
            display: isShaped ? "flex" : "inline-flex",
            gap: "24px",
            height: clipPathSize?.height ?? "100%",
            justifyContent: "center",
            overflow: "hidden",
            padding,
            position: "relative",
            transition: "all 0.2s ease-in-out",
            width: clipPathSize?.width ?? "100%",
          }}
        >
          {/* backdrop layer — extend beyond clip bounds so blur has content to sample */}
          <span
            style={
              {
                ...backdropStyle,
                height: isShaped ? "calc(100% + 40px)" : "100%",
                left: isShaped ? "-20px" : undefined,
                position: "absolute",
                top: isShaped ? "-20px" : undefined,
                width: isShaped ? "calc(100% + 40px)" : "100%",
                ...(isShaped ? null : { inset: "0" }),
              } as CSSProperties
            }
          />

          {isShaped ? (
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                inset: "0",
                pointerEvents: "none",
                position: "absolute",
              }}
            />
          ) : null}

          {/* user content stays sharp */}
          <div
            style={{
              color: overLight ? "#000" : "#fff",
              font: "500 20px/1 system-ui",
              position: "relative",
              textShadow: overLight
                ? "0px 2px 12px rgba(0, 0, 0, 0)"
                : "0px 2px 12px rgba(0, 0, 0, 0.4)",
              transition: "all 150ms ease-in-out",
              zIndex: 1,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);

GlassContainer.displayName = "GlassContainer";

export type LiquidGlassProps = {
  aberrationIntensity?: number;
  blurAmount?: number;
  borderRadius?: number;
  children: ReactNode;
  className?: string;
  clipPath?: string;
  clipPathScale?: number;
  clipPathSize?: { height: number; width: number };
  displacementScale?: number;
  elasticity?: number;
  globalMousePos?: { x: number; y: number };
  mode?: "standard" | "polar" | "prominent" | "shader";
  mouseContainer?: RefObject<HTMLElement | null> | null;
  mouseOffset?: { x: number; y: number };
  onClick?: () => void;
  overLight?: boolean;
  padding?: string;
  saturation?: number;
  style?: CSSProperties;
  ref?: React.RefObject<HTMLDivElement | null>;
};

export default function LiquidGlass({
  aberrationIntensity = 2,
  blurAmount = 0.0625,
  borderRadius = 999,
  children,
  className = "",
  clipPath,
  clipPathScale = 1,
  clipPathSize,
  displacementScale = 70,
  globalMousePos: externalGlobalMousePos,
  mode = "standard",
  mouseOffset: externalMouseOffset,
  onClick,
  overLight = false,
  padding = "24px 32px",
  saturation = 140,
  style,
  ref,
}: LiquidGlassProps) {
  const clipPathId = `shape-clip-${useId().replace(/:/g, "")}`;
  const glassRef = useRef<HTMLDivElement>(null);
  const isShaped = Boolean(clipPath);
  const shapeStyle = getShapeStyle(borderRadius, isShaped ? clipPathId : undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [glassSize, setGlassSize] = useState({ height: 0, width: 0 });
  const effectiveGlassSize =
    glassSize.width > 0 && glassSize.height > 0
      ? glassSize
      : (clipPathSize ?? glassSize);
  const [internalMouseOffset, setInternalMouseOffset] = useState({
    x: 0,
    y: 0,
  });

  // Use external mouse position if provided, otherwise use internal
  const mouseOffset = externalMouseOffset || internalMouseOffset;

  // Internal mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = glassRef.current;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setInternalMouseOffset({
      x: ((e.clientX - centerX) / rect.width) * 100,
      y: ((e.clientY - centerY) / rect.height) * 100,
    });
  }, []);

  // Set up mouse tracking if no external mouse position is provided
  useEffect(() => {
    if (externalGlobalMousePos && externalMouseOffset) {
      // External mouse tracking is provided, don't set up internal tracking
      return;
    }

    const container = glassRef.current;
    if (!container) {
      return;
    }

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, externalGlobalMousePos, externalMouseOffset]);

  // Update glass size whenever component mounts or window resizes
  useLayoutEffect(() => {
    if (!glassRef.current) return;

    // Use ResizeObserver to watch for dimension changes
    const resizeObserver = new ResizeObserver(async (entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          const { width, height } = entry.target.getBoundingClientRect();
          setGlassSize({ height, width });
        }
      }
    });

    resizeObserver.observe(glassRef.current);

    // Clean up the observer on unmount
    return () => resizeObserver.disconnect();
  }, []);

  const isStickyOrFixed =
    style?.position === "fixed" || style?.position === "sticky";
  const transformStyle = {
    ...(isStickyOrFixed ? style : null),
    transition: "all ease-out 0.2s",
  };

  return (
    <div
      ref={ref}
      style={isStickyOrFixed ? undefined : { position: "relative", ...style }}
    >
      {clipPath ? (
        <ShapeClipPathDef id={clipPathId} path={clipPath} scale={clipPathScale} />
      ) : null}

      {/* Over light effect */}
      <div
        style={{
          position: "absolute",
          ...transformStyle,
          backgroundColor: "#111",
          ...shapeStyle,
          height: effectiveGlassSize.height,
          opacity: overLight ? 0.2 : 0,
          pointerEvents: "none",
          width: effectiveGlassSize.width,
        }}
      />
      <div
        style={{
          position: "absolute",
          ...transformStyle,
          backgroundColor: "#111",
          ...shapeStyle,
          height: effectiveGlassSize.height,
          opacity: overLight ? 0.2 : 0,
          pointerEvents: "none",
          width: effectiveGlassSize.width,
        }}
      />

      <GlassContainer
        aberrationIntensity={aberrationIntensity}
        blurAmount={blurAmount}
        borderRadius={borderRadius}
        className={className}
        clipPathId={isShaped ? clipPathId : undefined}
        clipPathSize={clipPathSize}
        displacementScale={
          overLight ? displacementScale * 0.5 : displacementScale
        }
        glassSize={glassSize}
        mode={mode}
        mouseOffset={mouseOffset}
        onClick={onClick}
        onMouseDown={() => setIsActive(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseUp={() => setIsActive(false)}
        overLight={overLight}
        padding={padding}
        ref={glassRef}
        saturation={saturation}
        style={{
          ...transformStyle,
          left: isShaped ? 0 : undefined,
          top: isShaped ? 0 : undefined,
          ...(clipPathSize
            ? {
                height: clipPathSize.height,
                width: clipPathSize.width,
              }
            : null),
        }}
      >
        {children}
      </GlassContainer>

      {/* Border layer 1 - extracted from glass container */}
      {effectiveGlassSize.height > 0 && effectiveGlassSize.width > 0 && (
        <>
          <span
            style={{
              position: "absolute",
              ...transformStyle,
              ...(isShaped ? { left: 0, top: 0 } : null),
              background: `linear-gradient(
          ${135 + mouseOffset.x * 1.2}deg,
          rgba(255, 255, 255, 0.0) 0%,
          rgba(255, 255, 255, ${
            0.12 + Math.abs(mouseOffset.x) * 0.008
          }) ${Math.max(10, 33 + mouseOffset.y * 0.3)}%,
          rgba(255, 255, 255, ${
            0.4 + Math.abs(mouseOffset.x) * 0.012
          }) ${Math.min(90, 66 + mouseOffset.y * 0.4)}%,
          rgba(255, 255, 255, 0.0) 100%
        )`,
              ...shapeStyle,
              boxShadow:
                "0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)",
              height: effectiveGlassSize.height,
              maskComposite: "exclude",
              mixBlendMode: "screen",
              opacity: 0.2,
              padding: "1.5px",
              pointerEvents: "none",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              width: effectiveGlassSize.width,
            }}
          />

          {/* Border layer 2 - duplicate with mix-blend-overlay */}
          <span
            style={{
              position: "absolute",
              ...transformStyle,
              ...(isShaped ? { left: 0, top: 0 } : null),
              background: `linear-gradient(
          ${135 + mouseOffset.x * 1.2}deg,
          rgba(255, 255, 255, 0.0) 0%,
          rgba(255, 255, 255, ${
            0.32 + Math.abs(mouseOffset.x) * 0.008
          }) ${Math.max(10, 33 + mouseOffset.y * 0.3)}%,
          rgba(255, 255, 255, ${
            0.6 + Math.abs(mouseOffset.x) * 0.012
          }) ${Math.min(90, 66 + mouseOffset.y * 0.4)}%,
          rgba(255, 255, 255, 0.0) 100%
        )`,
              ...shapeStyle,
              boxShadow:
                "0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)",
              height: effectiveGlassSize.height,
              maskComposite: "exclude",
              mixBlendMode: "overlay",
              padding: "1.5px",
              pointerEvents: "none",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              width: effectiveGlassSize.width,
            }}
          />
        </>
      )}

      {/* Hover effects */}
      {Boolean(onClick) && (
        <>
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 50%)",
              ...shapeStyle,
              height: glassSize.height,
              mixBlendMode: "overlay",
              opacity: isHovered || isActive ? 0.5 : 0,
              pointerEvents: "none",
              position: transformStyle.position || "absolute",
              transform: transformStyle.transform,
              transition: "all 0.2s ease-out",
              width: glassSize.width + 1,
            }}
          />
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 80%)",
              ...shapeStyle,
              height: glassSize.height,
              mixBlendMode: "overlay",
              opacity: isActive ? 0.5 : 0,
              pointerEvents: "none",
              position: transformStyle.position || "absolute",
              transform: transformStyle.transform,
              transition: "all 0.2s ease-out",
              width: glassSize.width + 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              ...transformStyle,
              backgroundImage:
                "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              ...shapeStyle,
              height: glassSize.height,
              mixBlendMode: "overlay",
              opacity: isHovered ? 0.4 : isActive ? 0.8 : 0,
              pointerEvents: "none",
              transition: "all 0.2s ease-out",
              width: glassSize.width + 1,
            }}
          />
        </>
      )}
    </div>
  );
}
