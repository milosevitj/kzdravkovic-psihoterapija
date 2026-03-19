import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Koliko traje jedna sesija?',
    answer:
      'Standardna sesija traje 60 minuta.'
       },
  {
    question: 'Kako izgledaju online sesije?',
    answer:
      'Online sesije se održavaju putem video platforme. Potrebni su privatnost, miran prostor i stabilna internet veza.',
  },
  {
    question: 'Da li je ono o čemu razgovaramo poverljivo?',
    answer:
      'Sadržaj koje klijent donosi (uključujući svaki oblik komunikacije, email adrese i sl) su poverljivi osim u slučaju namere, pokušaja ili izvršenja ubistva, samoubistva, zlostavljanja, ugrožavanja drugih ili bilo kojih drugih radnji sankcionisanih krivičnim zakonodavstvom. U ovim situacijama terapeut ima obavezu da o mogućim namerama klijenta obavesti bolnicu, njegovu porodicu, policiju, potencijalnu žrtvu i sl. Ukoliko sud to zahteva (i samo tada), terapeut je dužan da iznese detalje iz klijentove psihoterapije. Ovi vidovi odstupanja od pravila poverljivosti se dešavaju samo u ekstremnim okolnostima i psihoterapeut/savetnik je dužan da pokuša da razgovara sa klijentom pre nego što preuzme bilo kakvu akciju i o tome klijenta obavesti.'
    },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground text-center mb-12">
          Često postavljana pitanja
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
