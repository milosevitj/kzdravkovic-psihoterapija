import { Button } from '@/components/ui/button';

const individualFocus = [
  'Poremećaji raspoloženja',
  'Interpersonalne i relacione poteškoće',
  'Stres i sagorevanje',
  'Trauma',
  'Anksioznost',
  'Proces tugovanja',
  'Poteškoće u prilagođavanju i životne tranzicije',
];

const partnershipFocus = [
  'Stvaranje emocionalne sigurnosti u odnosu',
  'Produbljivanje bliskosti i intimnosti',
  'Osvetljavanje obrazaca koji se ponavljaju u odnosu',
  'Pronalaženje drugačijih načina komunikacije i nošenja sa konfliktima',
  'Postepeno vraćanje poverenja',
  'Učvršćivanje partnerske veze',
];

const PsychotherapySection = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="psihoterapija" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground text-center mb-16">
          Psihoterapija i savetovanje
        </h2>

        <div className="space-y-16">
          {/* Individualna psihoterapija */}
          <article className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">
              Individualna psihoterapija
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Individualni pristup u kome se pažnja posvećuje unutrašnjem iskustvu koje se, kroz odnos, istražuje, prepoznaje i dobija svoje značenje.
            </p>
            
            <div className="space-y-3">
              <p className="font-medium text-foreground">Oblast fokusa:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {individualFocus.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Partnerska psihoterapija */}
          <article className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">
              Partnerska psihoterapija
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              U radu sa parovima pažnja se usmerava na razumevanje načina na koji se partneri povezuju, reaguju jedno na drugo i nose sa emocionalnom bliskošću i distancom. Terapijski proces se odvija postepeno, uz stvaranje sigurnog prostora za istraživanje odnosa, njegovih obrazaca i ponovnog zbližavanja.

            </p>
            
            <div className="space-y-3">
              <p className="font-medium text-foreground">Oblast fokusa:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {partnershipFocus.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          {/* <p className="text-muted-foreground mb-6">
            Kontaktirajte me kako bismo razgovarali o tome kako mogu da vam pomognem
          </p> */}
          <Button variant="hero" size="lg" onClick={handleScrollToContact}>
            Zakažite termin
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PsychotherapySection;
