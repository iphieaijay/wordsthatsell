import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden"> 
  {/* Background image */}
  <div className="absolute inset-0 top-20 ">
        <img 
          src="/lovable-uploads/d91f23f8-878b-41f9-a04c-f155937e4be0.png" 
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

  {/* Background overlay with more transparency 
  <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/70"></div>
 */}
 <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/90"></div>
  {/* Main content */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight font-display">
      Hi <span className="inline-block animate-pulse">👋🏾</span> I am Dorcas
    </h1>

    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
      From LinkedIn strategy to full-funnel content and sales, I help founders,{" "}
      <br className="hidden md:block" />
      service providers, and brands grow without chaos, burnout, or guesswork.
    </p>

    <div className="flex justify-center">
      <Button 
        variant="hero" 
        size="xl"
        onClick={() => window.location.href = "#contact"}
        className="w-full sm:w-auto min-w-[220px] cursor-pointer"
      >
        Get Started
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