import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "سميرة",
    area: "سيدي مبروك",
    quote: "من يوم لي بديت نطلب من خضاري، ما عدتش نتعب في السوق. الخضار ديما طازج والتوصيل سريع. مرسي خضاري!",
    stars: 5,
  },
  {
    name: "نادية",
    area: "زواغي",
    quote: "كنت نضيع كل صبيحة سبت في السوق. دروك نطلب سلتي ونخلي الوقت لعائلتي. الجودة ممتازة!",
    stars: 5,
  },
  {
    name: "فاطمة",
    area: "المنصورة",
    quote: "أحسن حاجة السعر واضح وما كاش مفاجآت. والخضار طازج كيما كي نروح للسوق بروحي.",
    stars: 4,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-khodari-warm" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-3">
          أمهات من قسنطينة جربوا خضاري ❤️
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-12">شوفي شنو قالوا عن تجربتهم</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-2xl p-6 border border-border hover-lift ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-4 w-4 ${si < t.stars ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{t.quote}"</p>
              <p className="text-sm font-bold text-primary">
                {t.name} – {t.area}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
