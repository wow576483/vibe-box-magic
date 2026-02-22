import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "وين توصلو؟", a: "حالياً نوصلو في أغلب أحياء قسنطينة وضواحيها. راسلينا على واتساب باش نأكدولك." },
  { q: "كيفاش ندفع؟", a: "الدفع عند الاستلام نقداً. ما تدفعيش حتى تستلمي سلتك وتشوفيها." },
  { q: "وقتاش يوصل الطلب؟", a: "نوصلو في اليوم الموالي أو نفس اليوم حسب وقت الطلب. نأكدولك الوقت بالضبط." },
  { q: "واش الخضار ديما طازج؟", a: "نعم! نشريو الخضار والفواكه كل يوم الصباح من أحسن الموردين باش نضمنولك الطزاجة." },
  { q: "نقدر نختار شنو يكون في السلة؟", a: "حالياً السلات جاهزة، لكن تقدري تعلّقي على حاجات ما تحبيهاش ونبدلوها قدر المستطاع." },
  { q: "لازمني حساب باش نطلب؟", a: "لا! أرسلي رسالة على واتساب وخلاص. بسيطة وسهلة." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10">
          أسئلة شائعة ❓
        </h2>
        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-5 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
