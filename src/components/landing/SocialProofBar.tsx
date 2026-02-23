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
              <s.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl md:text-3xl font-extrabold text-foreground">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
