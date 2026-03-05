import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Info, ChevronDown, Truck } from "lucide-react";
import boxSmallImg from "@/assets/box-small.jpg";
import boxMediumImg from "@/assets/box-medium.jpg";
import boxLargeImg from "@/assets/box-large.jpg";

const boxes = [
  {
    name: "سلة الزوجين / الطلبة",
    audience: "شخصين",
    duration: "3-4 أيام",
    image: boxSmallImg,
    benefit: "تكفي شخصين لمدة 4 أيام • تغنيك عن 3 زيارات للسوق",
    socialProof: "⭐ 127 عائلة طلبتها هذا الشهر",
    price: "1,200 دج",
    priceNote: "شامل خدمة التوصيل الخاصة",
    popular: false,
    deliveryPrice: "200 دج",
    details: [
      { item: "طماطم", weight: "1 كغ", price: "180 دج" },
      { item: "بطاطا", weight: "1.5 كغ", price: "150 دج" },
      { item: "بصل", weight: "1 كغ", price: "100 دج" },
      { item: "جزر", weight: "0.5 كغ", price: "80 دج" },
      { item: "فلفل", weight: "0.5 كغ", price: "120 دج" },
      { item: "فواكه موسمية", weight: "1 كغ", price: "250 دج" },
    ],
  },
  {
    name: "السلة الأساسية",
    audience: "عائلة 3-4 أفراد",
    duration: "5-6 أيام",
    image: boxMediumImg,
    benefit: "تكفي عائلة من 4 أفراد لأسبوع تقريباً • وداعاً للسوق",
    socialProof: "⭐ 243 عائلة طلبتها هذا الشهر",
    price: "2,200 دج",
    priceNote: "شامل خدمة التوصيل الخاصة",
    popular: true,
    deliveryPrice: "200 دج",
    details: [
      { item: "طماطم", weight: "2 كغ", price: "360 دج" },
      { item: "بطاطا", weight: "2 كغ", price: "200 دج" },
      { item: "بصل", weight: "1.5 كغ", price: "150 دج" },
      { item: "جزر", weight: "1 كغ", price: "160 دج" },
      { item: "فلفل", weight: "1 كغ", price: "240 دج" },
      { item: "كوسة", weight: "1 كغ", price: "140 دج" },
      { item: "فواكه موسمية", weight: "2 كغ", price: "500 دج" },
    ],
  },
  {
    name: "سلة العائلة الأسبوعية",
    audience: "عائلة +5 أفراد",
    duration: "أسبوع كامل",
    image: boxLargeImg,
    benefit: "تكفي عائلة كبيرة أسبوع كامل • توصيل مجاني",
    socialProof: "⭐ 89 عائلة طلبتها هذا الشهر",
    price: "3,500 دج",
    priceNote: "شامل التوصيل المجاني",
    popular: false,
    deliveryPrice: "مجاني",
    details: [
      { item: "طماطم", weight: "3 كغ", price: "540 دج" },
      { item: "بطاطا", weight: "3 كغ", price: "300 دج" },
      { item: "بصل", weight: "2 كغ", price: "200 دج" },
      { item: "جزر", weight: "1.5 كغ", price: "240 دج" },
      { item: "فلفل", weight: "1.5 كغ", price: "360 دج" },
      { item: "كوسة", weight: "1.5 كغ", price: "210 دج" },
      { item: "باذنجان", weight: "1 كغ", price: "150 دج" },
      { item: "فواكه موسمية", weight: "3 كغ", price: "750 دج" },
    ],
  },
];

const trustPoints = [
  "✔ مختارة صباحًا من السوق",
  "✔ فحص جودة يدوي",
  "✔ مغلفة بطريقة نظيفة وآمنة",
];

const BoxesSection = ({ onOrder }: { onOrder: (boxName: string) => void }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="boxes" className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-3">
          اختاري السلة اللي تناسب عائلتك 🧺
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
          عندنا سلات تناسب كل عائلة — من الزوجين للعائلات الكبيرة
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {boxes.map((box, i) => (
            <div
              key={box.name}
              className={`relative bg-card rounded-2xl p-6 border-2 flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${
                box.popular ? "border-primary shadow-lg" : "border-border"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {box.popular && (
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1">
                  الأكثر طلباً ⭐
                </Badge>
              )}

              {/* Box image */}
              <img src={box.image} alt={box.name} className="w-full h-40 rounded-xl object-cover mb-4" loading="lazy" />

              {/* Name */}
              <h3 className="text-xl font-bold text-foreground mb-1">{box.name}</h3>

              {/* Benefit */}
              <p className="text-sm text-muted-foreground mb-2">{box.benefit}</p>

              {/* Social proof */}
              <p className="text-xs font-medium text-primary mb-4">{box.socialProof}</p>

              {/* Price */}
              <div className="text-3xl font-extrabold text-primary mt-1">{box.price}</div>
              <p className="text-xs text-muted-foreground mb-6">{box.priceNote}</p>

              {/* Trust bar */}
              <div className="bg-muted/40 rounded-xl p-3 mb-6 space-y-1.5">
                {trustPoints.map((point) => (
                  <p key={point} className="text-xs text-foreground/80">{point}</p>
                ))}
              </div>

              {/* Details - Expandable */}
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mb-4 gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 border border-border rounded-xl group"
                  >
                    <Info className="h-4 w-4" />
                    ماذا تحتوي السلة؟
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mb-4 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="rounded-xl border border-border overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-3 bg-muted/60 px-4 py-2.5 text-xs font-semibold text-foreground/70">
                      <span className="text-right">المنتج</span>
                      <span className="text-center">الوزن</span>
                      <span className="text-left">السعر</span>
                    </div>
                    {/* Items */}
                    {box.details.map((d, idx) => (
                      <div
                        key={d.item}
                        className={`grid grid-cols-3 px-4 py-3 text-sm ${
                          idx % 2 === 0 ? "bg-card" : "bg-muted/20"
                        } ${idx < box.details.length - 1 ? "border-b border-border/50" : ""}`}
                        style={{ animationDelay: `${idx * 0.04}s` }}
                      >
                        <span className="text-right font-medium text-foreground">{d.item}</span>
                        <span className="text-center text-muted-foreground">{d.weight}</span>
                        <span className="text-left text-foreground/80">{d.price}</span>
                      </div>
                    ))}
                    {/* Summary */}
                    <div className="border-t-2 border-border bg-muted/30 px-4 py-3 space-y-2">
                      <div className="flex justify-between text-sm text-foreground/70">
                        <span>قيمة المنتجات</span>
                        <span>{box.details.reduce((sum, d) => sum + parseInt(d.price), 0).toLocaleString("ar-DZ")} دج</span>
                      </div>
                      <div className="flex justify-between text-sm text-foreground/70 items-center">
                        <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5" /> التوصيل</span>
                        <span>{box.deliveryPrice}</span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-primary bg-primary/10 rounded-lg px-3 py-2 mt-1">
                        <span>المجموع</span>
                        <span>{box.price}</span>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* CTA */}
              <Button
                className={`w-full rounded-xl py-5 text-base mt-auto transition-all duration-250 ${
                  box.popular
                    ? "bg-primary hover:bg-khodari-green-dark text-primary-foreground"
                    : "bg-secondary hover:bg-accent text-secondary-foreground"
                }`}
                onClick={() => onOrder(box.name)}
              >
                اطلبي سلتك الآن
              </Button>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default BoxesSection;
