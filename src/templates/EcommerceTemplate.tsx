import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { Input } from '@/components/ui/input'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const { hasCollections, loading: loadingCollections } = useCollections()

  const header = (
    <div className={`py-4 border-b border-border/50 backdrop-blur-sm bg-background/80 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Y2K Logo */}
          <BrandLogoLeft />

          {/* Y2K Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {!loadingCollections && hasCollections && (
                <ScrollLink 
                  to="/#collections" 
                  className="text-foreground/70 hover:text-primary font-bold transition-colors uppercase text-sm tracking-wide"
                >
                  Collections
                </ScrollLink>
              )}
              <ScrollLink 
                to="/#products" 
                className="text-foreground/70 hover:text-primary font-bold transition-colors uppercase text-sm tracking-wide"
              >
                Products
              </ScrollLink>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-primary font-bold transition-colors uppercase text-sm tracking-wide"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Profile & Cart with Y2K styling */}
          <div className="flex items-center space-x-3">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-primary/10 rounded-full"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-black rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-4xl font-black text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] text-white py-16 relative overflow-hidden ${footerClassName}`}>
      {/* Y2K Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-3xl font-black y2k-text-gradient">ZeroProof</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium non-alcoholic spirits for the modern lifestyle. Zero alcohol, full flavor, infinite possibilities.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-black mb-4 text-white text-lg uppercase tracking-wide">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-white/70 hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="block text-white/70 hover:text-primary transition-colors font-medium"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-black mb-4 text-white text-lg uppercase tracking-wide">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2025 <span className="font-bold text-primary">ZeroProof</span>. All rights reserved. 
            <span className="mx-2">•</span> 
            Crafted with ❤️ for the zero-proof lifestyle
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}