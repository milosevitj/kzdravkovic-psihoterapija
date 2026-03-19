import { Separator } from '@/components/ui/separator';

const relationalNeeds = [
  'Potreba za sigurnošću',
  'Potreba za prihvatanjem',
  'Potreba za potvrdom ličnog iskustva',
  'Potreba da budemo emocionalno viđeni i shvaćeni',
  'Potreba za samodefinisanjem',
  'Potreba za uticajem i uzajamnošću u odnosu',
  'Potreba za inicijativom od strane drugog',
  'Potreba za izražavanjem ljubavi i zahvalnosti',
];

const TherapyApproachesSection = () => {
  return (
    <section id="terapijski-pristupi" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground text-center mb-16">
          Kombinujem različite terapijske pravce kako bih pronašla najbolji način da vam pomognem
        </h2> */}

        <div className="space-y-12">
          {/* Transakciona analiza */}
          <article className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">Transakciona analiza</h3>
            <p className="text-foreground/80 leading-relaxed">
              Transakciona analiza omogućava sagledavanje obrazaca koji se formiraju u ranijim razvojnim fazama i utiču na kasnije odnose i funkcionisanje.
            </p>
          </article>

          <Separator className="bg-border/50" />

          {/* Emocionalno fokusirana terapija */}
          <article className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">Emocionalno fokusirana terapija</h3>
            <p className="text-foreground/80 leading-relaxed">
              Emocionalno fokusirana terapija (EFT) je terapijski modalitet koji se oslanja na teoriju afektivne vezanosti i relacione potrebe pojedinaca. Rad se odvija postepeno, uz pažljivo praćenje procesa, sa ciljem (re)kreiranja osećaja sigurnosti u odnosu.

            </p>
          </article>

          <Separator className="bg-border/50" />

          {/* EMDR terapija */}
          <article className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">EMDR terapija</h3>
            <p className="text-foreground/80 leading-relaxed">
              EMDR terapija (Eye Movement Desensitization and Reprocessing) je strukturisan psihoterapijski pristup koji se koristi u radu sa traumatskim i stresnim iskustvima, sa ciljem njihove obrade i integracije.



            </p>
          </article>

          <Separator className="bg-border/50" />

          {/* Integrativna psihoterapija */}
          <article className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">Integrativna psihoterapija</h3>
            <p className="text-foreground/80 leading-relaxed">
            Integrativna psihoterapija povezuje različite terapijske pristupe, uz poseban naglasak na relacione potrebe i kvalitet terapeutske usklađenosti. 
            Richard Erskine opisuje osam relacijskih potreba koje su važne za osećaj povezanosti, sigurnosti i kvalitet kontakta u odnosima: 

            </p>
          </article>
            
            <ul className="space-y-3">
              {relationalNeeds.map((need, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{need}</span>
                </li>
              ))}
            </ul>
         
        </div>
      </div>
    </section>
  );
};

export default TherapyApproachesSection;
