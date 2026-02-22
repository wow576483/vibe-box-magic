import { Clock, ShieldCheck, DollarSign, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { icon: Clock, title: "توفير الوقت", desc: "اطلبي في دقيقتين واستمتعي بوقتك مع عائلتك" },
  { icon: ShieldCheck, title: "جودة مضمونة", desc: "نختار لك أحسن خضار وفواكه طازجة كل يوم" },
  { icon: DollarSign, title: "سعر واضح", desc: "لا مفاجآت — السعر واضح قبل ما تطلبي" },
  { icon: MessageCircle, title: "طلب سهل عبر واتساب", desc: "أرسلي رسالة وخلاص، أسهل ما يكون" },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            خضاري يحوّل السوق لتجربة مريحة 🥦
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ما عادش لازم تتعبي. خضاري يجيب لك خضار طازج مختار بعناية لباب دارك.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`bg-card rounded-2xl p-6 text-center hover-lift border border-border ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                <b.icon className="h-7 w-7 text-primary animate-breathe" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
