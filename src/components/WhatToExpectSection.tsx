const steps = [
  {
    number: '01',
    title: 'Kontakt',
    description:
      'Nakon što me kontaktirate putem mejla ili poruke, odgovoriću u najkraćem roku kako bismo se dogovorili oko termina. ',
  },
  {
    number: '02',
    title: 'Prvi razgovor',
    description:
      'Pre prvog susreta, obično se dogovaramo za kratak telefonski razgovor kako biste mogli da postavite eventualna pitanja i kako bismo zajedno proverili da li je ovo pravi prostor za Vas.  ',
  },
  {
    number: '03',
    title: 'Prvi susret',
    description:
      'Prva seansa je prilika da se upoznamo, da razgovaramo o tome šta vas dovodi na terapiju i kakva su Vaša očekivanja. To je i prvi kontakt na kome zajedno donosimo odluku o nastavku rada. '
      },
];

const WhatToExpectSection = () => {
  return (
    <section id="sta-ocekivati" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground text-center mb-16">
          Šta možete očekivati?
        </h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <span className="text-4xl md:text-5xl font-serif text-primary/40 font-medium">
                  {step.number}
                </span>
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="text-xl md:text-2xl font-serif text-foreground">
                  {step.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
