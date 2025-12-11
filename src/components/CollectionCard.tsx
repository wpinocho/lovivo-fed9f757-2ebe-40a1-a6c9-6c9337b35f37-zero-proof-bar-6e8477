import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group overflow-hidden cursor-pointer">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
          
          {/* Y2K Glossy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured Badge */}
          {collection.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                ⭐ Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-card-foreground font-black text-xl mb-2 group-hover:text-primary transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full border-2 border-primary/50 shadow-lg"
            onClick={() => onViewProducts(collection.id)}
          >
            View Products →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}