import { ShieldCheck, Leaf, RefreshCw, HandCoins } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const guarantees = [
  {
    icon: Leaf,
    title: "طزاجة مضمونة",
    desc: "نشريو الخضار كل صباح من أحسن الموردين. إذا ما عجبكش، نبدلوه.",
  },
  {
    icon: HandCoins,
    title: "الدفع عند الاستلام",
    desc: "ما تدفعي حتى تشوفي سلتك وتكوني راضية. بلا أي مخاطرة.",
  },
  {
    icon: RefreshCw,
    title: "استبدال مجاني",
    desc: "إذا لقيتِ أي منتج مش طازج، نبدلوه مجاناً بلا أي سؤال.",
  },
  {
    icon: ShieldCheck,
    title: "سعر شفاف",
    desc: "السعر واضح من البداية. لا رسوم مخفية ولا مفاجآت.",
  },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-accent/50 to-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            ضمانات خضاري 🛡️
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ثقتك أولويتنا — وهذي الضمانات اللي نقدموها لك
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((g, i) => (
            <div
              key={g.title}
              className={`bg-card rounded-2xl p-6 text-center border border-primary/15 hover-lift ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <g.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{g.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
