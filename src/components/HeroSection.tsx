import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        {/* Hero headline matching the second image exactly */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight font-display">
          Hi{" "}
          <span className="inline-block animate-pulse">👋🏾</span>
          {" "}I am Dorcas
        </h1>
        
        {/* Subtitle matching the second image */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          From LinkedIn strategy to full-funnel content and sales, I help founders,{" "}
          <br className="hidden md:block" />
          service providers, and brands grow without chaos, burnout, or guesswork.
        </p>
        
        {/* CTA Buttons matching the second image layout */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            className="w-full sm:w-auto min-w-[220px]"
          >
            View LinkedIn Services
          </Button>
          
          <Button 
            variant="hero" 
            size="xl"
            className="w-full sm:w-auto min-w-[220px]"
          >
            View Marketing Services
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;