import katarinaPhoto from '@/assets/katarina-photo.jpg';

const AboutSection = () => {
  return (
    <section id="o-meni" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-medium">
              <img
                src={katarinaPhoto}
                alt="Katarina Zdravković - psihoterapeut"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
              O meni
            </h2>
            
            <div className="prose prose-lg text-foreground/80 space-y-5 leading-relaxed">
              <p>
                Odnos između terapeuta i klijenta smatra se jednim od ključnih elemenata terapijskog rada. Važno je da postoji prostor u kome se osoba može osećati prihvaćeno i viđeno, ali i dovoljno sigurno da istražuje različite perspektive i načine razumevanja sebe.

              </p>
              
              <p>
                Terapijski proces se gradi zajednički i oblikuje kroz odnos, u skladu sa jedinstvenošću svake osobe. Ne postoji univerzalan način rada, niti jedan ritam koji odgovara svima.

              </p>
              
              <p>
                Pored povezivanja sa sopstvenim resursima, pažnja se posvećuje i razumevanju unutrašnjih načina zaštite. Oni su nekada imali važnu funkciju, a danas mogu otežavati kontakt sa sobom ili sa drugima. Terapija tada postaje mesto za kontakt sa sobom, u odnosu sa drugim.
              </p>
              
              <p>
                Po osnovnom obrazovanju sam diplomirani andragog. U okviru privatne prakse radim kao psihoterapeut u superviziji, uz povremeno organizovanje radionica i grupa. Paralelno sa tim angažovana sam i u poslovnom okruženju.

              </p>
              
              <p>
                Transakciona analiza predstavlja temelj mog rada i pružila mi je okvir i jasnoću u razumevanju koncepata i obrazaca. Tokom vremena, moj pristup se postepeno pomerao ka integrativnom i relacionom pristupu. U tom procesu, terapijski odnos je postajao sve važniji kao aktivni deo rada – zajednički proces u kome iskustvo dobija značenje i integriše se kroz odnos.
              </p>

              <p>
                Dodatno sam se usmerila na rad sa parovima kroz edukaciju iz Emocionalno fokusirane terapije. Trenutno sam u edukaciji iz EMDR terapije (Eye Movement Desensitization and Reprocessing). Paralelno sa tim, profesionalni razvoj nastavljam kroz kontinuirano stručno usavršavanje i učešće na konferencijama i radionicama.
                Članica sam International Transactional Analysis Association (ITAA).

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
