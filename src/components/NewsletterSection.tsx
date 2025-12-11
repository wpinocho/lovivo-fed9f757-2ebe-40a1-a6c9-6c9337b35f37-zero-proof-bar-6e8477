import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="relative py-20 lg:py-24 overflow-hidden">
          {/* Y2K Gradient Background */}
          <div className="absolute inset-0 y2k-gradient opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          
          {/* Floating Bubbles */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-primary/30 blur-3xl y2k-bubble" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary/40 blur-3xl y2k-bubble" style={{ animationDelay: '3s' }} />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-6 shadow-2xl shadow-primary/50">
                    <Mail className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-foreground">
                  You're <span className="y2k-text-gradient">In</span>!
                </h3>
                <p className="text-lg text-muted-foreground">
                  Get ready for exclusive drops, limited releases, and zero-proof inspiration.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      Join The Movement
                    </span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-black text-foreground">
                    Get The <span className="y2k-text-gradient">Good Stuff</span>
                  </h3>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Exclusive recipes, new drops, and zero-proof inspiration delivered to your inbox.
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 h-14 px-6 rounded-full border-2 text-base focus:border-primary"
                    required
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 h-14 border-2 border-primary/50 shadow-xl shadow-primary/30"
                  >
                    {logic.isSubmitting ? 'Joining...' : 'Join Now'}
                  </Button>
                </form>
                
                {logic.error && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-4">
                    <p className="text-sm text-destructive font-medium">
                      {logic.error}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};