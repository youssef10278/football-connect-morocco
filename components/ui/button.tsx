import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'premium' | 'ghost' | 'outline'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  loading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", loading = false, asChild = false, children, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-morocco-red-100 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden",
      {
        "btn-primary": variant === "default",
        "btn-secondary": variant === "secondary",
        "btn-premium": variant === "premium",
        "btn-ghost": variant === "ghost",
        "border border-slate-300 hover:border-slate-400 bg-transparent hover:bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center": variant === "outline",
      },
      {
        "h-9 px-4 text-sm rounded-xl min-w-[120px]": size === "sm",
        "h-12 px-6 text-base rounded-2xl min-w-[160px]": size === "default",
        "h-14 px-8 text-lg rounded-2xl min-w-[200px]": size === "lg",
        "h-16 px-10 text-xl rounded-3xl min-w-[280px]": size === "xl",
      },
      className
    );

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn(baseClasses, (children as React.ReactElement).props.className),
        ...props
      });
    }

    return (
      <button
        className={baseClasses}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <span className={cn("transition-opacity duration-200", loading && "opacity-0")}>
          {children}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }