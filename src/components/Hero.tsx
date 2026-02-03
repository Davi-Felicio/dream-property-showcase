import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/*
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Corretora de Imóveis • CRECI 123456
          </p>
          */}
          
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground mb-6 leading-tight">
            Encontre o imóvel dos seus{" "}
            <span className="text-gradient-gold">sonhos</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Com mais de 10 anos de experiência no mercado imobiliário, 
            ajudo você a encontrar a casa perfeita para sua família.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#imoveis">Ver Imóveis</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/5543998737544">Agendar Visita</a>
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
