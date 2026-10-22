import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default:
        "bg-primary text-primary-foreground shadow hover:bg-cyan-500/90 active:scale-[0.98] transition-all duration-200",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800/60 hover:text-white border-slate-700/80 hover:border-cyan-500/50 transition-all duration-200",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost:
        "hover:bg-slate-800/60 text-slate-300 hover:text-white transition-colors",
      link: "text-cyan-400 underline-offset-4 hover:underline",
      gradient:
        "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all duration-200",
    }

    const sizes = {
      default: "h-11 px-5 py-2.5 text-sm",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-12 rounded-xl px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variants[variant] || variants.default,
          sizes[size] || sizes.default,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

