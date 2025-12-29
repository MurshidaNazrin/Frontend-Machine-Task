import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

const stackVariants = cva(
    "flex",
    {
        variants: {
            direction: {
                vertical: "flex-col",
                horizontal: "flex-row"
            },
            gap: {
                xs: "gap-1",
                sm: "gap-2",
                md: "gap-4",
                lg: "gap-6"
            },
            align: {
                start: "items-start",
                center: "items-center",
                end: "items-end"
            }
        },
        defaultVariants: {
            direction: "vertical",
            gap: "md",
            align: "start"
        }
    }
)

function Stack({ direction, gap, align, className, children }) {
    return (
        <div
            className={cn(stackVariants({ direction, gap, align }),
                className
            )}
        >
            {children}
        </div>
    )
}

export default Stack
