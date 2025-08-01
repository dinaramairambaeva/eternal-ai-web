
import * as React from "react"
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCarousel } from "./context"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  const handleClick = React.useCallback(() => {
    console.log("Carousel: Previous button clicked.");
    scrollPrev();
  }, [scrollPrev]);

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "h-8 w-8 rounded-full",
        className
      )}
      disabled={!canScrollPrev}
      onClick={handleClick}
      {...props}
    >
      {orientation === "horizontal" ? <ArrowLeft className="h-4 w-4" /> : <ChevronUp className="h-5 w-5" />}
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  const handleClick = React.useCallback(() => {
    console.log("Carousel: Next button clicked.");
    scrollNext();
  }, [scrollNext]);

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "h-8 w-8 rounded-full",
        className
      )}
      disabled={!canScrollNext}
      onClick={handleClick}
      {...props}
    >
      {orientation === "horizontal" ? <ArrowRight className="h-4 w-4" /> : <ChevronDown className="h-5 w-5" />}
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export { CarouselPrevious, CarouselNext }
