import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 max-w-5xl">
        <p className="font-mono text-primary text-sm md:text-base mb-6 tracking-wider">
          // hello world
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
          Kieren
          <br />
          <span className="text-gradient">Pinto</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Software developer crafting clean, performant, and thoughtful digital experiences.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="bg-primary text-primary-foreground font-mono text-sm px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            explore( )
          </a>
          <a
            href="#contact"
            className="border border-border text-foreground font-mono text-sm px-6 py-3 rounded-sm hover:border-primary hover:text-primary transition-colors"
          >
            contact( )
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
