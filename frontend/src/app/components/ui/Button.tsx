import { cn } from "@/app/lib/util";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonVariants = cva("px-8 py-3 rounded-lg font-semibold tracking-wide transition-colors", {
  variants: {
    intent: {
      primary: "bg-rose-600 text-neutral-50 hover:bg-rose-700",
      secondary: "bg-neutral-200 text-neutral-700 hover:bg-neutral-300",
    },
    size: {
      large: "min-w-64",
      full: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "large",
  },
});

export interface ButtonProps extends VariantProps<typeof buttonVariants>, ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({ className, onClick = () => {}, children, intent, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ intent, size }), className, props.disabled ? "opacity-60" : "")} {...props}>
      {children}
    </button>
  );
}

export default Button;
