import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const boxes = [
  {
    name: "سلة الزوجين / الطلبة",
    audience: "شخصين",
    duration: "3-4 أيام",
    contents: "طماطم، بطاطا، بصل، جزر، فلفل، فواكه موسمية",
    price: "1,200 دج",
    popular: false,
  },
  {
    name: "السلة الأساسية",
    audience: "عائلة 3-4 أفراد",
    duration: "5-6 أيام",
    contents: "تشكيلة كاملة من الخضار والفواكه الموسمية الطازجة",
    price: "2,200 دج",
    popular: true,
  },
  {
    name: "السلة العائلية الكبيرة",
    audience: "عائلة +5 أفراد",
    duration: "أسبوع كامل",
    contents: "كمية كبيرة ومتنوعة من خضار وفواكه تكفي الأسبوع",
    price: "3,500 دج",
    popular: false,
  },
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
              className={`relative bg-card rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${
                box.popular ? "border-primary shadow-lg" : "border-border"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {box.popular && (
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1">
                  الأكثر طلباً ⭐
                </Badge>
              )}
              <h3 className="text-xl font-bold text-foreground mb-2">{box.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">لـ {box.audience} • تكفي {box.duration}</p>
              <p className="text-sm text-foreground mb-5">{box.contents}</p>
              <div className="text-3xl font-extrabold text-primary mb-5">{box.price}</div>
              <Button
                className={`w-full rounded-xl py-5 text-base transition-all duration-250 ${
                  box.popular
                    ? "bg-primary hover:bg-khodari-green-dark text-primary-foreground"
                    : "bg-secondary hover:bg-accent text-secondary-foreground"
                }`}
                onClick={() => onOrder(box.name)}
              >
                اطلبي هذه السلة
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxesSection;
