import { Check, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = ({ onOrder }: { onOrder: () => void }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-khodari-green-light via-background to-background min-h-[90vh] flex items-center">
      <div className="container mx-auto py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
              <Leaf className="h-4 w-4" />
              <span>خضار طازج لباب دارك</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
              وقتك غالي… خلّي السوق يجيك لعندك
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              أنتِ أم مشغولة في قسنطينة؟ ما عادش لازم تتعبي في السوق. خضاري يجهز لك سلة خضار وفواكه طازجة ويوصلها لباب دارك.
            </p>
            <ul className="space-y-2">
              {["خضار طازج من أحسن الموردين", "توصيل سريع في قسنطينة", "الدفع عند الاستلام – بلا مخاطرة"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-xl bg-primary hover:bg-khodari-green-dark transition-all duration-250 hover:scale-105 shadow-lg"
                onClick={() => document.getElementById("boxes")?.scrollIntoView({ behavior: "smooth" })}
              >
                اطلبي سلتك الآن 🛒
              </Button>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-6 bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl px-5 py-3 shadow-sm">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-base">🚚</span>
                <span className="text-xs font-medium text-foreground/80">توصيل سريع</span>
              </div>
              <div className="w-px h-8 bg-border/60" />
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-base">💵</span>
                <span className="text-xs font-medium text-foreground/80">الدفع عند الاستلام</span>
              </div>
              <div className="w-px h-8 bg-border/60" />
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-base">⭐</span>
                <span className="text-xs font-medium text-foreground/80">+127 تقييم</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="animate-fade-up-delay-2 flex justify-center">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
              <img
                src={heroIllustration}
                alt="أم تستلم سلة خضار طازجة عند باب دارها في قسنطينة"
                className="w-full h-full object-cover"
                loading="eager"
                width={420}
                height={420}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
