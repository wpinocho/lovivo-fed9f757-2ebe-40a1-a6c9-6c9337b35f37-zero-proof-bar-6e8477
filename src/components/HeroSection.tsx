import { Button } from '@/components/ui/button'
import heroImage from '@/assets/hero-mocktails.jpg'

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] py-20 lg:py-32">
      {/* Y2K Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
      
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/30 blur-3xl y2k-bubble" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/40 blur-3xl y2k-bubble" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-primary/25 blur-2xl y2k-bubble" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-32 right-1/3 w-28 h-28 rounded-full bg-secondary/35 blur-3xl y2k-bubble" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Y2K Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                Zero Proof. Full Flavor.
              </span>
            </div>

            {/* Main Heading with Y2K Text Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-white">Taste The</span>
              <br />
              <span className="y2k-text-gradient">Future</span>
              <br />
              <span className="text-white">Of Drinking</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Premium non-alcoholic spirits crafted for the modern lifestyle. 
              Zero hangover, infinite possibilities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="bg-primary hover:bg-primary/90 text-background font-bold text-lg px-8 py-6 rounded-full y2k-glow shadow-2xl shadow-primary/50 border-2 border-primary/50"
              >
                Discover Flavors
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/5 hover:bg-white/10 text-white font-bold text-lg px-8 py-6 rounded-full border-2 border-white/30 backdrop-blur-sm"
              >
                View Collections
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-black text-primary">0.0%</div>
                <div className="text-sm text-white/60 uppercase tracking-wide">Alcohol</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-black text-primary">100%</div>
                <div className="text-sm text-white/60 uppercase tracking-wide">Flavor</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-black text-primary">8+</div>
                <div className="text-sm text-white/60 uppercase tracking-wide">Products</div>
              </div>
            </div>
          </div>

          {/* Right Image with Y2K Effects */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src={heroImage}
                alt="Premium Non-Alcoholic Mocktails"
                className="w-full h-auto object-cover"
              />
              
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-secondary blur-3xl opacity-60 y2k-bubble" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-primary blur-3xl opacity-50 y2k-bubble" style={{ animationDelay: '3s' }} />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}