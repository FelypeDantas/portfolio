"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const TooltipProvider = ({
  delayDuration = 300,
  skipDelayDuration = 100,
  ...props
}) => (
  <TooltipPrimitive.Provider
    delayDuration={delayDuration}
    skipDelayDuration={skipDelayDuration}
    {...props}
  />
)

const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const tooltipVariants = cva(
  "z-50 rounded-md border px-3 py-2 text-sm shadow-md animate-in fade-in-0 zoom-in-95",
  {
    variants: {
      variant: {
        default:
          "border-slate-200 bg-white text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        success:
          "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-50",
        danger:
          "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-50",
        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-50",
        info:
          "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-50",
      },
      size: {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-3 py-2",
        lg: "text-base px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const TooltipContent = React.forwardRef(
  (
    {
      className,
      sideOffset = 6,
      variant,
      size,
      showArrow = true,
      maxWidth = 220,
      style,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          style={{ maxWidth, ...style }}
          className={cn(
            tooltipVariants({ variant, size }),
            "leading-relaxed break-words",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            className
          )}
          {...props}
        >
          {children}

          {showArrow && (
            <TooltipPrimitive.Arrow className="fill-current text-inherit" />
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    )
  }
)

TooltipContent.displayName = "TooltipContent"

const TooltipRichContent = ({ title, description, icon }) => {
  return (
    <div className="flex items-start gap-2">
      {icon && <div className="mt-0.5">{icon}</div>}

      <div className="space-y-0.5">
        {title && <p className="font-medium">{title}</p>}
        {description && (
          <p className="text-xs opacity-80">{description}</p>
        )}
      </div>
    </div>
  )
}

const TooltipWrapper = ({
  content,
  title,
  description,
  icon,
  children,
  delay,
  ...props
}) => {
  const finalContent =
    content || (
      <TooltipRichContent
        title={title}
        description={description}
        icon={icon}
      />
    )

  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent {...props}>{finalContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipWrapper,
  TooltipRichContent,
}
