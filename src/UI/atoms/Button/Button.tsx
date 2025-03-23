// BL
import { cn } from "@/lib/utils/utils";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  text?: string;
  classNameText?: string;
  variant?: "search" | "pagination";
}

const Button = ({
  onClick,
  className,
  variant,
  text,
  classNameText,
}: ButtonProps) => {
  switch (variant) {
    case "search":
      return (
        <button
          onClick={onClick}
          className={cn(
            "bg-linear-to-r  cursor-pointer lg:w-36 max-w-[300px] font-inter border-white border-[1px] from-[#0060FF] to-[#00FFE7]  px-4 py-1 rounded-md",
            className
          )}
        >
          <p className={cn("text-white text-sm lg:text-base ", classNameText)}>
            {text}
          </p>
        </button>
      );
    case "pagination":
      return (
        <button
          className={cn(
            "bg-[#0060FF] cursor-pointer font-montserrat p-1 rounded-md w-[100px]",
            className
          )}
          onClick={onClick}
        >
          <p className={cn("text-white font-bold text-base", classNameText)}>
            {text}
          </p>
        </button>
      );
    default:
      return (
        <button className={cn("bg-white", className)} onClick={onClick}>
          {text}
        </button>
      );
  }
};

export default Button;
