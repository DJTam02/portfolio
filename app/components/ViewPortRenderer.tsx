import React from "react";

interface ViewPortRendererProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
  smallComponent?: React.ReactNode;
  mediumComponent?: React.ReactNode;
  largeComponent?: React.ReactNode;
  extraLargeComponent?: React.ReactNode;
  smallClassName?: React.HTMLAttributes<HTMLDivElement>["className"];
  mediumClassName?: React.HTMLAttributes<HTMLDivElement>["className"];
  largeClassName?: React.HTMLAttributes<HTMLDivElement>["className"];
  extraLargeClassName?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const ViewPortRenderer = ({
  smallComponent,
  mediumComponent,
  largeComponent,
  extraLargeComponent,
  smallClassName,
  mediumClassName,
  largeClassName,
  extraLargeClassName,
  ...rest
}: ViewPortRendererProps) => (
  <>
    <div
      {...rest}
      className={`tablet:hidden ${rest.className} ${smallClassName}`}
    >
      {smallComponent}
    </div>
    <div
      {...rest}
      className={`hidden tablet:block laptop:hidden ${rest.className} ${mediumClassName}`}
    >
      {mediumComponent}
    </div>
    <div
      {...rest}
      className={`hidden laptop:block desktop:hidden ${rest.className} ${largeClassName}`}
    >
      {largeComponent}
    </div>
    <div
      {...rest}
      className={`hidden desktop:block ${rest.className} ${largeClassName} ${extraLargeClassName}`}
    >
      {extraLargeComponent ?? largeComponent}
    </div>
  </>
);
