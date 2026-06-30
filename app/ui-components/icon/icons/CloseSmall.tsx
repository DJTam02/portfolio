import { IconSizeProps } from "../types";

export const CloseSmall = ({ width = 8, height = 8 }: IconSizeProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 8 8"
    fill="none"
  >
    <path
      d="M7.33317 0.666016L0.666504 7.33268M0.666504 0.666016L7.33317 7.33268"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
