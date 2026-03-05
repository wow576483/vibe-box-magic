import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const boxes = [
  {
    name: "سلة الزوجين / الطلبة",
    audience: "شخصين",
    duration: "3-4 أيام",
    
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

  const calcTotal = (box: typeof boxes[0]) => {
    const productsTotal = box.details.reduce((sum, d) => sum + parseInt(d.price.replace(/[^\d]/g, '')), 0);
    const deliveryNum = box.deliveryPrice === "مجاني" ? 0 : parseInt(box.deliveryPrice.replace(/[^\d]/g, ''));
    return { productsTotal, deliveryNum, total: productsTotal + deliveryNum };
  };

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
          {boxes.map((box, i) => {
            const { productsTotal, deliveryNum, total } = calcTotal(box);
            return (
              <div
                key={box.name}
                className={`relative bg-card rounded-2xl border-2 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden ${
                  box.popular ? "border-primary shadow-lg" : "border-border"
                } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {box.popular && (
                  <Badge className="absolute top-3 right-4 z-10 bg-primary text-primary-foreground px-3 py-1">
                    الأكثر طلباً ⭐
                  </Badge>
                )}

                {/* Header */}
                <div className="p-6 pb-4 text-center border-b border-border">
                  <h3 className="text-xl font-bold text-foreground mb-1">🛒 {box.name}</h3>
                  <p className="text-base font-semibold text-foreground/90 mb-1">
                    {box.audience} تكفي {box.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">🌿 خضار طازجة يومياً من السوق مباشرة</p>
                </div>

                {/* Items Table */}
                <div className="px-4 py-3 flex-1">
                  <div className="space-y-0">
                    {box.details.map((d, idx) => (
                      <div
                        key={d.item}
                        className={`flex items-center justify-between py-3 px-3 rounded-xl text-sm ${
                          idx % 2 === 0 ? "bg-muted/40" : ""
                        }`}
                      >
                        <span className="font-semibold text-foreground flex-1 text-right">{d.item}</span>
                        <span className="text-muted-foreground flex-1 text-center">{d.weight}</span>
                        <span className="text-foreground flex-1 text-left">{d.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totals */}
                <div className="px-6 py-4 border-t border-border space-y-2">
                  <div className="flex justify-between text-sm text-foreground/80">
                    <span>قيمة المنتجات</span>
                    <span>{productsTotal.toLocaleString()} دج</span>
                  </div>
                  <div className="flex justify-between text-sm text-foreground/80">
                    <span>🚚 التوصيل</span>
                    <span>{box.deliveryPrice === "مجاني" ? "مجاني" : box.deliveryPrice}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="font-bold text-foreground text-base">المجموع</span>
                    <span className="font-extrabold text-primary text-2xl">{total.toLocaleString()} دج</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-4 pt-0">
                  <Button
                    className="w-full rounded-xl py-5 text-base bg-primary hover:bg-khodari-green-dark text-primary-foreground transition-all duration-250"
                    onClick={() => onOrder(box.name)}
                  >
                    🛒 اطلبي سلتك الآن – الدفع عند الاستلام
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BoxesSection;
