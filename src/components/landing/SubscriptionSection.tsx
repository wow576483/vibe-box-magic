import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Truck,
  Apple,
  Leaf,
  CalendarCheck,
  Home,
  Star,
  HeartHandshake,
  Settings2,
  MessageCircle,
  Gift,
  ShieldCheck,
  Check,
} from "lucide-react";

const basicFeatures = [
  { icon: CalendarCheck, text: "4 توصيلات (مرة كل أسبوع)" },
  { icon: Apple, text: "خضرة طازجة" },
  { icon: Leaf, text: "اختيار جيد حسب المتوفر" },
  { icon: Home, text: "توصيل لباب المنزل" },
];

const premiumFeatures = [
  { icon: CalendarCheck, text: "4 توصيلات أسبوعية (مرة كل أسبوع)" },
  { icon: Apple, text: "خضرة + فواكه بجودة أعلى" },
  { icon: Leaf, text: "اختيار ذكي حسب الموسم" },
  { icon: Truck, text: "كميات مدروسة تكفي أسبوع كامل" },
  { icon: Home, text: "توصيل لباب المنزل" },
];

const premiumBenefits = [
  { icon: Star, text: "أولوية في التوصيل" },
  { icon: HeartHandshake, text: "أفضل جودة مختارة" },
  { icon: Settings2, text: "إمكانية تعديل السلة" },
  { icon: MessageCircle, text: "تواصل مباشر عبر واتساب" },
];

const bonuses = ["أفكار وجبات أسبوعية", "نصائح للحفاظ على الخضرة"];

const SubscriptionSection = ({ onOrder }: { onOrder: () => void }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="subscription" className="py-16 md:py-24 bg-khodari-warm" ref={ref}>
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className={`text-center mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            راحة شهر كامل بدون تعب السوق 🌿
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            اختاري الاشتراك اللي يناسبك… وخلي خضاري تهتم بالباقي
          </p>
        </div>

        <p
          className={`text-center text-foreground/60 text-sm md:text-base mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.08s" }}
        >
          مرة واحدة في الأسبوع توصلك سلتك… وباقي الأيام ترتاحي
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start">
          {/* ── Basic Card ── */}
          <div
            className={`bg-card rounded-3xl border border-border/60 shadow-sm overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.14s" }}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">الاشتراك العادي</h3>

              <div className="text-center mb-6">
                <div className="text-3xl font-extrabold text-foreground mb-1">
                  7,500 دج
                  <span className="text-sm font-medium text-muted-foreground"> / الشهر</span>
                </div>
                <p className="text-xs text-muted-foreground/80">حوالي 250 دج في اليوم</p>
              </div>

              <div className="space-y-3 mb-8">
                {basicFeatures.map((f, i) => (
                  <div
                    key={f.text}
                    className={`flex items-center gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: `${0.22 + i * 0.05}s` }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <f.icon className="w-4 h-4 text-muted-foreground" />
                    </span>
                    <span className="text-sm text-foreground/80">{f.text}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-2xl py-5 text-sm border-border/80 hover:bg-accent/60 transition-all duration-300"
                onClick={onOrder}
              >
                ابدئي بهذا الاشتراك
              </Button>
            </div>
          </div>

          {/* ── Recommended Card ── */}
          <div
            className={`relative bg-card rounded-3xl border-2 border-primary/30 shadow-lg overflow-hidden md:scale-[1.03] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.18s" }}
          >
            <Badge className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 text-sm rounded-b-xl rounded-t-none shadow-md z-10">
              الأكثر اختياراً ⭐
            </Badge>

            <div className="pt-11 pb-7 px-5 md:px-8">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">اشتراك الراحة</h3>

              <div className="text-center mb-2">
                <div className="text-4xl font-extrabold text-primary mb-1">
                  8,500 دج
                  <span className="text-sm font-medium text-muted-foreground"> / الشهر</span>
                </div>
                <p className="text-xs text-muted-foreground/80">حوالي 280 دج في اليوم</p>
              </div>
              <p className="text-center text-xs text-foreground/50 mb-6">
                تقريباً نفس مصروف السوق… بدون تعب ولا تضييع وقت
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {premiumFeatures.map((f, i) => (
                  <div
                    key={f.text}
                    className={`flex items-center gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: `${0.28 + i * 0.05}s` }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <f.icon className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-sm text-foreground/85">{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-border/50 my-5" />

              {/* Premium benefits */}
              <p className="text-xs font-semibold text-foreground/60 mb-3 text-center">مزايا إضافية</p>
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {premiumBenefits.map((b, i) => (
                  <div
                    key={b.text}
                    className={`flex items-center gap-2 bg-muted/40 rounded-xl px-3 py-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: `${0.55 + i * 0.05}s` }}
                  >
                    <b.icon className="w-3.5 h-3.5 text-primary/70 flex-shrink-0" />
                    <span className="text-xs text-foreground/75">{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Bonuses */}
              <div
                className={`bg-primary/5 rounded-2xl p-3.5 mb-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: "0.72s" }}
              >
                <p className="text-xs font-semibold text-foreground/60 mb-2 flex items-center justify-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-primary" />
                  هدية 🎁
                </p>
                <div className="flex flex-col items-center gap-1">
                  {bonuses.map((b) => (
                    <span key={b} className="text-xs text-foreground/65">• {b}</span>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div
                className={`flex items-start gap-2 bg-accent/40 rounded-xl px-3.5 py-2.5 mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: "0.78s" }}
              >
                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-[11px] md:text-xs text-foreground/65 leading-relaxed">
                  إذا أول أسبوع ما عجبكش، نوقف الاشتراك ونرجعولك المبلغ المتبقي
                </p>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full rounded-2xl py-6 text-sm md:text-base bg-primary hover:bg-khodari-green-dark text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                onClick={onOrder}
              >
                ابدئي اشتراك الراحة وارتاحي هذا الشهر
              </Button>

              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-3.5 text-[11px] text-muted-foreground/65">
                <span>✔ الدفع عند الاستلام</span>
                <span>✔ بدون التزام طويل</span>
                <span>✔ تأكيد عبر واتساب</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
