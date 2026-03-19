import heroBackground from '@/assets/hero-background.webp';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <blockquote className="mb-8">

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
               Psihoterapija i savetovanje
          </h1>
          <p className="quote-text text-lg md:text-2xl text-foreground mb-6 italic opacity-90">
            „Životna privilegija je postati ono što zaista jesi."
          </p>
          <footer className="text-base md:text-lg text-muted-foreground font-normal opacity-80">
             — C. G. Jung
          </footer>
        </blockquote>

        <div className="mt-12 space-y-4">
          <Button
            variant="hero"
            size="lg"
            onClick={handleScrollToContact}
            className="animate-fade-in-delay"
          >
            Zakažite termin
          </Button>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
