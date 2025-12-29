import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

const boxVariants = cva(
    "w-full",
    {
        variants: {
            padding: {
                none: "",
                sm: "p-2",
                md: "p-4",
                lg: "p-6"
            },
            border: {
                none: "",
                default: "border border-gray-200"
            },
            rounded: {
                none: "",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg"
            },
            background: {
                none : "",
                white: "bg-white",
                muted: "bg-gray-50"
            }
        },
        defaultVariants: {
            padding: "md",
            rounded: "md"
        }
    }
)

function Box({padding, border, rounded, background, className, children}) {
  return (
    <div
       className={cn(
         boxVariants({ padding, border, rounded, background }), className
       )}
    >
      {children}
    </div>
  )
}

export default Box
