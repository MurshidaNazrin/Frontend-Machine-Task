import Box from "../layout/Box";
import { cn } from "../../lib/cn";

function Card({ className, children }) {
  return (
    <Box
      padding="lg"
      border="default"
      background="white"
      className={cn("rounded=lg", className)}
    >
      {children}
    </Box>
  )
}

export default Card
