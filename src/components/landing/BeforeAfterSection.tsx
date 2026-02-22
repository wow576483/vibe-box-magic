import { X, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BeforeAfterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-destructive/5" />
      <div className="container mx-auto relative z-10">
        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Before */}
          <div className="bg-card/80 backdrop-blur rounded-2xl p-8 border border-destructive/20 hover:brightness-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-destructive mb-5">❌ قبل خضاري</h3>
            <ul className="space-y-3">
              {["تضيّعي 2-3 ساعات في السوق", "تشيلي أكياس ثقيلة", "خضار ساعات يكون مش طازج"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-foreground">
                  <X className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* After */}
          <div className="bg-card/80 backdrop-blur rounded-2xl p-8 border border-primary/30 hover:brightness-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-5">✅ بعد خضاري</h3>
            <ul className="space-y-3">
              {["تطلبي من دارك في دقيقتين", "نوصلوها لباب دارك", "خضار طازج ومختار بعناية"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-foreground">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={`text-center mt-8 text-lg font-semibold text-foreground ${isVisible ? "animate-fade-up-delay-2" : "opacity-0"}`}>
          خضاري هو الجسر بين تعب السوق وراحة التوصيل لدارك 🌿
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
