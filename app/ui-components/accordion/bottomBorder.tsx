export const BottomBorder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="1"
    viewBox="0 0 10000 1"
    fill="none"
  >
    <g filter="url(#filter0_n_1_2782)">
      <line y1="0.5" x2="10000" y2="0.5" stroke="#181818" />
    </g>
    <defs>
      <filter
        id="filter0_n_1_2782"
        x="0"
        y="0"
        width="10000"
        height="1"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1 1"
          stitchTiles="stitch"
          numOctaves="3"
          result="noise"
          seed="3638"
        />
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            type="discrete"
            tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="shape"
          in="coloredNoise1"
          result="noise1Clipped"
        />
        <feComponentTransfer in="alphaNoise" result="coloredNoise2">
          <feFuncA
            type="discrete"
            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 "
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="shape"
          in="coloredNoise2"
          result="noise2Clipped"
        />
        <feFlood floodColor="#060409" result="color1Flood" />
        <feComposite
          operator="in"
          in2="noise1Clipped"
          in="color1Flood"
          result="color1"
        />
        <feFlood floodColor="rgba(255, 255, 255, 0.6)" result="color2Flood" />
        <feComposite
          operator="in"
          in2="noise2Clipped"
          in="color2Flood"
          result="color2"
        />
        <feMerge result="effect1_noise_1_2782">
          <feMergeNode in="shape" />
          <feMergeNode in="color1" />
          <feMergeNode in="color2" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);
