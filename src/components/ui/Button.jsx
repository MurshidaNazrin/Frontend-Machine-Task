import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

function Button({ variant, loading = false, disabled = false, className, children, ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  )
}

export default Button
