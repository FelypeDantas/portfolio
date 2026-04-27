"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

/**
 * ScrollArea Root
 */
const ScrollArea = React.forwardRef(function ScrollArea(
  { className, children, ...props },
  ref
) {
  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});

/**
 * ScrollBar Component
 */
const ScrollBar = React.forwardRef(function ScrollBar(
  { className, orientation = "vertical", ...props },
  ref
) {
  const isVertical = orientation === "vertical";

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-colors",
        isVertical
          ? "h-full w-2.5 border-l border-transparent p-[1px]"
          : "h-2.5 flex-col border-t border-transparent p-[1px]",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(
          "relative flex-1 rounded-full",
          "bg-accent hover:bg-accent/80",
          "dark:bg-slate-800 dark:hover:bg-slate-700"
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});

ScrollArea.displayName = "ScrollArea";
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
