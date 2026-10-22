import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default:
      "border-transparent bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20",
    secondary:
      "border-transparent bg-slate-800 text-slate-300 hover:bg-slate-700",
    destructive:
      "border-transparent bg-red-900/40 text-red-300 border border-red-500/30",
    outline: "text-slate-300 border border-slate-700",
    gradient:
      "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm",
    amber:
      "bg-amber-500/10 text-amber-300 border border-amber-500/30",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    />
  )
}

export { Badge }

