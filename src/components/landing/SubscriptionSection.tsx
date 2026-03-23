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
} from "lucide-react";

const features = [
  { icon: CalendarCheck, text: "4 توصيلات (مرة كل أسبوع)" },
  { icon: Apple, text: "خضرة + فواكه طازجة" },
  { icon: Leaf, text: "اختيار ذكي حسب الموسم" },
  { icon: Truck, text: "كميات تكفي أسبوع كامل" },
  { icon: Home, text: "توصيل لباب المنزل" },
];

const premiumBenefits = [
  { icon: Star, text: "أولوية في التوصيل" },
  { icon: HeartHandshake, text: "أفضل جودة مختارة" },
  { icon: Settings2, text: "إمكانية تعديل السلة" },
  { icon: MessageCircle, text: "تواصل مباشر عبر واتساب" },
];

const bonuses = [
  "أفكار وجبات أسبوعية",
  "نصائح للحفاظ على الخضرة",
];

const SubscriptionSection = ({ onOrder }: { onOrder: () => void }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="subscription"
      className="py-16 md:py-24 bg-khodari-warm"
      ref={ref}
    >
      <div className="container mx-auto max-w-2xl px-4">
        {/* Header */}
        <div
          className={`text-center mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            راحة شهر كامل بدون تعب السوق 🌿
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            خلي خضاري تهتم بخضرتك كل أسبوع… وارتاحي من التفكير والتعب
          </p>
        </div>

        {/* Emotional intro */}
        <p
          className={`text-center text-foreground/70 text-sm md:text-base mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.08s" }}
        >
          مرة واحدة في الأسبوع توصلك سلتك… وباقي الأيام ترتاحي
        </p>

        {/* Subscription Card */}
        <div
          className={`relative bg-card rounded-3xl border-2 border-primary/30 shadow-lg overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.14s" }}
        >
          {/* Badge */}
          <Badge className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 text-sm rounded-b-xl rounded-t-none shadow-md">
            الأكثر راحة ⭐
          </Badge>

          <div className="pt-12 pb-8 px-5 md:px-10">
            {/* Plan name & price */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                اشتراك الراحة الشهرية
              </h3>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                12,000 دج
                <span className="text-base font-medium text-muted-foreground">
                  {" "}
                  / الشهر
                </span>
              </div>
              <p className="text-sm text-muted-foreground/80 mt-1">
                أقل من 400 دج في اليوم
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <div
                  key={f.text}
                  className={`flex items-center gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${0.2 + i * 0.06}s` }}
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-[18px] h-[18px] text-primary" />
                  </span>
                  <span className="text-sm md:text-base text-foreground/85">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="h-px bg-border/60 my-6" />

            {/* Premium benefits */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-foreground/70 mb-4 text-center">
                مزايا خاصة بالمشتركين
              </p>
              <div className="grid grid-cols-2 gap-3">
                {premiumBenefits.map((b, i) => (
                  <div
                    key={b.text}
                    className={`flex items-center gap-2 bg-muted/40 rounded-xl px-3 py-2.5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: `${0.5 + i * 0.06}s` }}
                  >
                    <b.icon className="w-4 h-4 text-primary/80 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-foreground/80">
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bonuses */}
            <div
              className={`bg-primary/5 rounded-2xl p-4 mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0.7s" }}
            >
              <p className="text-sm font-semibold text-foreground/70 mb-2.5 flex items-center justify-center gap-1.5">
                <Gift className="w-4 h-4 text-primary" />
                هدية من خضاري 🎁
              </p>
              <div className="flex flex-col items-center gap-1.5">
                {bonuses.map((b) => (
                  <span
                    key={b}
                    className="text-sm text-foreground/70"
                  >
                    • {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div
              className={`flex items-start gap-2.5 bg-accent/40 rounded-xl px-4 py-3 mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0.78s" }}
            >
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                إذا أول أسبوع ما عجبكش، نوقف الاشتراك ونرجعولك المبلغ
                المتبقي
              </p>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="w-full rounded-2xl py-6 text-base md:text-lg bg-primary hover:bg-khodari-green-dark text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              onClick={onOrder}
            >
              ابدئي اشتراكك وارتاحي هذا الشهر
            </Button>

            {/* Microcopy */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-4 text-xs text-muted-foreground/70">
              <span>✔ الدفع عند الاستلام</span>
              <span>✔ بدون التزام طويل</span>
              <span>✔ تأكيد عبر واتساب</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
