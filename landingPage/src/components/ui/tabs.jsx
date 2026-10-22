import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext({
  value: "",
  onValueChange: () => {},
})

function Tabs({ value, defaultValue, onValueChange, children, className }) {
  const [currentValue, setCurrentValue] = React.useState(defaultValue || "")
  const actualValue = value !== undefined ? value : currentValue

  const handleValueChange = (val) => {
    if (value === undefined) {
      setCurrentValue(val)
    }
    if (onValueChange) {
      onValueChange(val)
    }
  }

  return (
    <TabsContext.Provider value={{ value: actualValue, onValueChange: handleValueChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

function TabsList({ className, children }) {
  return (
    <div
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-xl bg-slate-900/80 p-1.5 text-slate-400 border border-slate-800/80 backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  )
}

function TabsTrigger({ value, className, children }) {
  const context = React.useContext(TabsContext)
  const isSelected = context.value === value

  return (
    <button
      type="button"
      onClick={() => context.onValueChange(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        isSelected
          ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm font-semibold"
          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40",
        className
      )}
    >
      {children}
    </button>
  )
}

function TabsContent({ value, className, children }) {
  const context = React.useContext(TabsContext)
  if (context.value !== value) return null

  return (
    <div
      className={cn(
        "mt-4 ring-offset-background focus-visible:outline-none animate-in fade-in-50 duration-300",
        className
      )}
    >
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

