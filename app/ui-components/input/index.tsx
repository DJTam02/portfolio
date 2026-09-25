import { variantStyles } from "../text/constants";

export const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`rounded-full bg-[(250,250,250,0.04)] border border-foreground h-[53px] w-full px-6 py-3 focus:outline-none ${variantStyles["bodyLarge"]} ${className}`}
      {...props}
    />
  );
};
