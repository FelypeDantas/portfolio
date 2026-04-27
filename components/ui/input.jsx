import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef((props, ref) => {
  const {
    className,
    type = "text",
    ...rest
  } = props

  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-md border border-white/10 bg-primary px-4 py-3 text-base font-light outline-none transition-colors",
        "placeholder:text-white/60",
        "focus:border-accent focus:ring-1 focus:ring-accent/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...rest}
    />
  )
})

Input.displayName = "Input"

export { Input }
