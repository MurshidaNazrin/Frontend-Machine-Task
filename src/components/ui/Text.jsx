import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

const textVariants = cva(
    "",
    {
        variants: {
            size: {
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl"
            },
            weight: {
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold"
            },
            muted: {
                true: "text-gray-500",
                false: ""
            },
            color: {
                default: "text-gray-900",
                primary: "text-blue-600",
                success: "text-green-500",
                danger: "text-red-600"
            }
        },
        defaultVariants: {
            size: "base",
            weight: "normal",
            muted: false,
            color: "default"
        }
    }
)

function Text({ as = "p",
    size, weight, muted, color, className, children
}) {
    const Component = as
    return (
        <Component
            className={cn(textVariants({ size, weight, muted, color }),
                className
            )}
        >
            {children}
        </Component>
    )
}

export default Text
