import { ShoppingBasket, PackageCheck, Truck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: ShoppingBasket, num: "١", title: "اختاري السلة", desc: "شوفي السلات واختاري اللي تناسب عائلتك" },
  { icon: PackageCheck, num: "٢", title: "نجهز ونؤكد", desc: "نجهزلك سلتك بخضار طازج ونأكدلك الطلب" },
  { icon: Truck, num: "٣", title: "نوصل وتدفعي", desc: "نوصلوها لباب دارك والدفع عند الاستلام" },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how" className="py-16 md:py-24 bg-khodari-warm" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
          كيفاش تطلبي؟ 🤔
        </h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 right-[16%] left-[16%] h-0.5 bg-border" />
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`relative text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="mx-auto mb-4 relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg hover:scale-110 transition-transform duration-300">
                {s.num}
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border hover-lift">
                <s.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-bold text-foreground text-lg mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
