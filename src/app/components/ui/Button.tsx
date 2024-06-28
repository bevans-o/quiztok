import { cn } from "@/app/lib/util";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva("px-8 py-3 rounded-lg font-semibold tracking-wide transition-colors", {
  variants: {
    intent: {
      primary: "bg-rose-600 text-neutral-50 hover:bg-rose-700",
      secondary: "",
    },
    size: {
      large: "min-w-64",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "large",
  },
});

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({ className, onClick = () => {}, children, intent, size }: ButtonProps) {
  return <button className={cn(buttonVariants({ intent, size }), className)}>{children}</button>;
}

export default Button;
