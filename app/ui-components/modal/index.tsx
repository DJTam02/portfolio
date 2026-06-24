import React from "react";
import { Flex, FlexProps } from "../flex";
import { Ellipse } from "./ellipse";
import { LiquidGlass } from "../liquidGlass";

interface ModalWrapperProps extends FlexProps {
  onClose: () => void;
}

interface ModalProps extends React.ComponentProps<typeof LiquidGlass> {
  className?: string;
  children: React.ReactNode;
}

export const Modal = ({ children, className, ...rest }: ModalProps) => (
  <LiquidGlass
    borderRadius={16}
    elasticity={0}
    cursor="default"
    className={`overflow-hidden cursor-default opacity-100 ${className}`}
    {...rest}
  >
    <Flex className="gap-4 px-6 pt-5 pb-4 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0.12)_100%)]">
      <Ellipse fillColour="#E37564" strokeColour="#A36151" />
      <Ellipse fillColour="#ECC062" strokeColour="#B3984F" />
      <Ellipse fillColour="#74C161" strokeColour="#5D8952" />
    </Flex>
    <Flex direction="col" className="p-10 h-full bg-liquid-glass">
      {children}
    </Flex>
  </LiquidGlass>
);

export const ModalWrapper = ({
  children,
  onClose,
  ...rest
}: ModalWrapperProps) => (
  <React.Fragment>
    <Flex
      justifyContent="center"
      alignItems="center"
      className="h-screen w-full absolute top-0 left-0 bg-black opacity-80 cursor-pointer z-30"
      onClick={onClose}
      {...rest}
    />
    <Modal
      cursor="default"
      className="w-150"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 30,
      }}
    >
      {children}
    </Modal>
  </React.Fragment>
);
