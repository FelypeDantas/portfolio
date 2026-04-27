"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// Root
const Tabs = TabsPrimitive.Root

// List
const TabsList = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          "inline-flex h-auto items-center rounded-md p-1 text-primary",
          className
        )}
        {...props}
      />
    )
  }
)
TabsList.displayName = "TabsList"

// Trigger
const TabsTrigger = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
          "inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg p-3 text-base font-medium text-white transition-all",
          "bg-[#2727cc]", // corrigido (provável intenção)
          "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-sm",
          className
        )}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

// Content
const TabsContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <TabsPrimitive.Content
        ref={ref}
        className={cn(
          "min-h-[480px] outline-none",
          "ring-offset-white focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",
          "dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          className
        )}
        {...props}
      />
    )
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
