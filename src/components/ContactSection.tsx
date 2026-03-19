import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
          Kontakt
        </h2>

        <p className="text-foreground/80 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
       
            Tu sam za sva pitanja ili dogovor oko termina
        
        </p>

        <div className="space-y-6">
          <a
            href="mailto:katarinazdravkovicc@gmail.com"
            className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>kz.psihoterapija@gmail.com</span>
          </a>

          <a
            href="tel:+381603355632"
            className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+381 60 3355632</span>
          </a>

          <p className="text-muted-foreground text-sm">
            (SMS, Viber, WhatsApp)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
