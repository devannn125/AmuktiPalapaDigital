import * as React from "react"
import { cn } from "@/lib/utils"

function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-slate-800",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

