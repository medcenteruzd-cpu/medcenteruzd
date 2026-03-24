"use client";

import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center font-medium rounded-md transition duration-300 shadow-sm";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-primary hover:bg-[#126fe6] text-white";
  } else if (variant === "outline") {
    variantStyles =
      "border border-primary text-primary hover:bg-primary hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-white";
  } else if (variant === "ghost") {
    variantStyles =
      "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800";
  }

  let sizeStyles = "";
  if (size === "sm") sizeStyles = "px-3 py-1 text-sm";
  else if (size === "md") sizeStyles = "px-5 py-2 text-base";
  else if (size === "lg") sizeStyles = "px-7 py-3 text-lg";
  else if (size === "full") sizeStyles = "px-2 py-2 text-base w-full";

  const classes = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
