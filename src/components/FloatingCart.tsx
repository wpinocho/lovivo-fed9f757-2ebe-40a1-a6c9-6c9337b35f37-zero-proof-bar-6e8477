import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useCartUI } from "@/components/CartProvider"

export const FloatingCart = () => {
  const { getTotalItems } = useCart()
  const { openCart } = useCartUI()
  const totalItems = getTotalItems()

  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={openCart}
        className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/50 border-4 border-primary/30 y2k-glow"
        size="icon"
      >
        <div className="relative">
          <ShoppingCart className="h-7 w-7 text-primary-foreground" />
          {totalItems > 0 && (
            <span className="absolute -top-3 -right-3 bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground text-xs font-black rounded-full h-6 w-6 flex items-center justify-center shadow-lg border-2 border-white/20">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </div>
      </Button>
    </div>
  )
}