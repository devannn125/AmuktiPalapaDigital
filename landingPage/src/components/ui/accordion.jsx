import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext({
  openItems: [],
  toggleItem: () => {},
})

function Accordion({ type = "single", collapsible = true, children, className }) {
  const [openItems, setOpenItems] = React.useState([])

  const toggleItem = (val) => {
    if (type === "single") {
      setOpenItems((prev) => (prev.includes(val) ? (collapsible ? [] : [val]) : [val]))
    } else {
      setOpenItems((prev) =>
        prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

function AccordionItem({ value, children, className }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-200 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { itemValue: value }) : child
      )}
    </div>
  )
}

function AccordionTrigger({ itemValue, children, className }) {
  const { openItems, toggleItem } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(itemValue)

  return (
    <button
      type="button"
      onClick={() => toggleItem(itemValue)}
      className={cn(
        "flex w-full items-center justify-between p-4 sm:p-5 text-left font-medium text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer",
        isOpen && "text-sky-600 dark:text-sky-400 font-semibold",
        className
      )}
    >
      <span className="text-sm sm:text-base pr-3">{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-200",
          isOpen && "rotate-180 text-sky-600 dark:text-sky-400"
        )}
      />
    </button>
  )
}

function AccordionContent({ itemValue, children, className }) {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(itemValue)

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in-50 duration-200",
        className
      )}
    >
      <div className="pt-3">{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
