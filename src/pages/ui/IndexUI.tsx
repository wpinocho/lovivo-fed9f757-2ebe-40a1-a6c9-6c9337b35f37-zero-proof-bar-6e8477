import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { HeroSection } from '@/components/HeroSection';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Y2K Hero Section */}
      <HeroSection />

      {/* Collections Section with Y2K Styling */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
                Shop By <span className="y2k-text-gradient">Collection</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Curated selections for every occasion
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section with Y2K Styling */}
      <section id="products" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground">
                {selectedCollectionId 
                  ? <><span className="y2k-text-gradient">{collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}</span> Products</>
                  : <>All <span className="y2k-text-gradient">Products</span></>
                }
              </h2>
              <p className="text-muted-foreground mt-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Explore our complete range of zero-proof spirits and mocktail kits'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="rounded-full px-6 border-2 hover:bg-primary/10 hover:border-primary"
              >
                See All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <span className="text-4xl">🍹</span>
              </div>
              <p className="text-xl text-muted-foreground">
                No products available in this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};