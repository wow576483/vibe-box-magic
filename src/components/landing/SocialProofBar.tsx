import { Users, Star, Truck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Truck, value: "+500", label: "طلب تم توصيله" },
  { icon: Star, value: "4.8/5", label: "تقييم العملاء" },
  { icon: Users, value: "+200", label: "عائلة تثق فينا" },
];

const SocialProofBar = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-10 bg-primary/5 border-y border-primary/10" ref={ref}>
      <div className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-5 w-5 mx-auto mb-1.5 text-primary" />
              <div className="text-xl md:text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
