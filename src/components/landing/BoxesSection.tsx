import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Info, Truck, ShoppingBasket, CheckCircle2 } from "lucide-react";
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
  const [selectedBox, setSelectedBox] = useState<(typeof boxes)[0] | null>(null);

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
              <div className="text-3xl font-extrabold text-primary">{box.price}</div>
              <p className="text-xs text-muted-foreground">{box.priceNote}</p>
              <p className="text-[11px] text-muted-foreground/70">💳 الدفع عند الاستلام</p>
              <p className="text-[11px] text-primary/70 mb-1">🚚 توصيل في نفس اليوم داخل قسنطينة</p>
              <p className="text-[11px] text-muted-foreground font-medium mb-4">⏳ الطلبات اليومية محدودة للحفاظ على الجودة</p>

              {/* Trust bar */}
              <div className="bg-muted/40 rounded-xl p-3 mb-2 space-y-1">
                {trustPoints.map((point) => (
                  <p key={point} className="text-xs text-foreground/80">{point}</p>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground text-center mb-4">🏡 وفّري وقت السوق واستمتعي بوقتك مع عائلتك</p>

              {/* Details button */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full mb-3 gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 border border-border rounded-xl"
                onClick={() => setSelectedBox(box)}
              >
                <Info className="h-4 w-4" />
                ماذا تحتوي السلة؟
              </Button>

              {/* CTA */}
              <Button
                className={`w-full rounded-xl py-5 text-base mt-auto transition-all duration-250 ${
                  box.popular
                    ? "bg-primary hover:bg-khodari-green-dark text-primary-foreground"
                    : "bg-secondary hover:bg-accent text-secondary-foreground"
                }`}
                onClick={() => onOrder(box.name)}
              >
                اطلبي سلتك الآن واستلميها اليوم
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog open={!!selectedBox} onOpenChange={(open) => !open && setSelectedBox(null)}>
        <DialogContent className="max-w-md rounded-2xl" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2 justify-center">
              <ShoppingBasket className="h-5 w-5 text-primary" />
              {selectedBox?.name}
            </DialogTitle>
            <DialogDescription className="text-center">
              لـ {selectedBox?.audience} • تكفي {selectedBox?.duration}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-1">
            <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-muted-foreground border-b border-border pb-2 px-1">
              <span>المنتج</span>
              <span className="text-center">الوزن</span>
              <span className="text-left">السعر</span>
            </div>
            {selectedBox?.details.map((d, idx) => (
              <div
                key={d.item}
                className={`grid grid-cols-3 gap-2 text-sm py-2 px-1 rounded-lg ${
                  idx % 2 === 0 ? "bg-muted/40" : ""
                }`}
              >
                <span className="font-medium text-foreground">{d.item}</span>
                <span className="text-center text-muted-foreground">{d.weight}</span>
                <span className="text-left text-foreground">{d.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Truck className="h-4 w-4" />
                التوصيل
              </span>
              <span className={`font-semibold ${selectedBox?.deliveryPrice === "مجاني" ? "text-primary" : "text-foreground"}`}>
                {selectedBox?.deliveryPrice}
              </span>
            </div>
            <div className="flex items-center justify-between bg-primary/10 rounded-xl px-3 py-2">
              <span className="font-bold text-foreground">المجموع</span>
              <span className="text-xl font-extrabold text-primary">{selectedBox?.price}</span>
            </div>
          </div>

          <Button
            className="w-full rounded-xl py-5 text-base bg-primary hover:bg-khodari-green-dark text-primary-foreground mt-1"
            onClick={() => {
              if (selectedBox) {
                onOrder(selectedBox.name);
                setSelectedBox(null);
              }
            }}
          >
            اطلبي سلتك الآن واستلميها اليوم
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BoxesSection;
