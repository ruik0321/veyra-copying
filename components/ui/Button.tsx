type ButtonVariant = "primary" | "secondary"
type ButtonSize = "small" | "medium" | "large"
import { ArrowRight } from "@/components/ui/Icons"


interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  reversed?: boolean
  icon?: boolean
  onClick?: () => void
  className?: string
}

const sizeStyles = {
  small:  "px-5 h-11.5",
  medium: "px-5 h-12",
  large:  "px-6 h-16",
}

const variantStyles = {
  primary:           "links bg-primary text-white hover:bg-white hover:text-primary",
  primaryReversed:   "links bg-white hover:bg-primary hover:text-white",
  secondary:         "links bg-primary/5 border border-primary/5 hover:bg-primary hover:text-white",
  secondaryReversed: "links bg-white/5 text-white border border-white/5 hover:bg-primary hover:text-primary",
}

export default function Button({
  children,
  variant = "primary",
  size = "small",
  reversed = false,
  icon = false,
  className = "",
}: ButtonProps) {
  const variantKey = variant === "primary"
    ? (reversed ? "primaryReversed" : "primary")
    : (reversed ? "secondaryReversed" : "secondary")

  return (
    <button
      className={`
        inline-flex items-center gap-2 font-medium links
        transition-all duration-200 cursor-pointer"
        ${sizeStyles[size]}
        ${variantStyles[variantKey]}
        ${className}
      `}
    >
      {children}
      {icon && <ArrowRight />}
    </button>
  )
}