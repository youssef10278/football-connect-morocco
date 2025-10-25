import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'premium' | 'verified' | 'position'
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-morocco-red-500 text-white hover:bg-morocco-red-600":
            variant === "default",
          "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200":
            variant === "secondary",
          "border-transparent bg-red-500 text-white hover:bg-red-600":
            variant === "destructive",
          "border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50": 
            variant === "outline",
          "badge-premium": 
            variant === "premium",
          "badge-verified": 
            variant === "verified",
          "badge-position": 
            variant === "position",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }