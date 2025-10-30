import {type ReactNode} from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  classname?: string
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  classname
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:opacity-50";

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: "bg-primary text-text hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
    accent: "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
    outline:
      "border border-outline text-text hover:border-text focus:ring-outline",
    danger: "bg-error text-white hover:bg-error/90 focus:ring-error",
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], classname)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}