import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#95C22B] text-primary-foreground hover:bg-[#95C22B]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        paginationInActive:"bg-[#FFFFFF] text-[#274760] shadow-custom6",
        paginationActive:"bg-[#95C22B] text-[#FFFFFF] shadow-custom6",
        submit:"bg-[#95C22B] text-xl hover:bg-[#9bc833] text-[#FFFFFF] font-bold font-openSans",
        comment:"bg-[#95C22B] text-lg hover:bg-[#9bc833] text-[#FFFFFF] font-medium font-inter",
        log:"bg-[#95C22B] hover:bg-[#9bc833] text-base text-[#FFFFFF] font-bold font-inter",
        moreBlog:"hover:bg-[#FFFFFF] border-[1px] border-[#95C22B] text-sm text-[#1A1A1A] font-normal font-inter",
        category:"border-[1px] border-[#212121] text-sm text-[#1A1A1A] font-light font-inter",
        prev:"text-[#95C22B] border-2 border-[#95C22B] bg-[#FFFFFF] font-semibold font-inter"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "rounded-md py-3 px-6",
        lg: " rounded-lg py-2 px-3",
        icon: "h-10 w-10",
        log:"rounded-md h-10 px-5"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
