import { Clock, Frown, Baby, ThumbsDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: Clock, title: "وقت ضايع", desc: "ساعات في الزحمة والطوابير كل أسبوع" },
  { icon: Frown, title: "تعب وإرهاق", desc: "شيل الأكياس الثقيلة والتنقل في الحر أو البرد" },
  { icon: Baby, title: "ضغط مع الأطفال", desc: "صعب تاخذي الصغار معاك للسوق" },
  { icon: ThumbsDown, title: "جودة غير مضمونة", desc: "تروحي وترجعي وتلقاي الخضار مش طازج" },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-khodari-warm" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">يومك مع السوق 😩</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            كل أسبوع نفس القصة… تعب، وقت ضايع، وخضار ساعات يخيّب أملك
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`bg-card rounded-2xl p-6 text-center hover-lift border border-border ${
                isVisible ? `animate-fade-up` : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10">
                <p.icon className="h-7 w-7 text-destructive" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
