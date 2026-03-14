import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, Percent, Gift } from "lucide-react";

const offers = [
  {
    title: "عرض الربيع 🌸",
    description: "سلة خضار وفواكه موسمية طازجة بسعر مخفض",
    discount: "-20%",
    originalPrice: "2,200 دج",
    newPrice: "1,760 دج",
    tag: "لفترة محدودة",
    icon: <Percent className="h-5 w-5" />,
    highlight: true,
  },
  {
    title: "اشتري 2 واحصلي على التوصيل مجاناً 🚚",
    description: "اطلبي سلتين أو أكثر واستمتعي بتوصيل مجاني لباب بيتك",
    discount: "توصيل مجاني",
    originalPrice: "",
    newPrice: "",
    tag: "عرض مستمر",
    icon: <Gift className="h-5 w-5" />,
    highlight: false,
  },
  {
    title: "سلة رمضان الخاصة 🌙",
    description: "تشكيلة مختارة من الخضار والفواكه لتحضير أشهى الأطباق",
    discount: "-15%",
    originalPrice: "3,500 دج",
    newPrice: "2,975 دج",
    tag: "عرض موسمي",
    icon: <Clock className="h-5 w-5" />,
    highlight: false,
  },
];

const SeasonalOffersSection = ({ onOrder }: { onOrder: () => void }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-accent/30" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-destructive text-destructive-foreground mb-4 text-sm px-4 py-1.5">
            🔥 عروض وتخفيضات
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            عروض موسمية لا تفوّتيها!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            استفيدي من تخفيضات حصرية على سلالنا الطازجة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className={`relative bg-card rounded-2xl p-6 border-2 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${
                offer.highlight
                  ? "border-destructive shadow-lg"
                  : "border-border"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Discount badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge
                  className={`px-3 py-1 text-sm ${
                    offer.highlight
                      ? "bg-destructive text-destructive-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {offer.tag}
                </Badge>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4 mt-2 text-accent-foreground">
                {offer.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {offer.description}
              </p>

              {/* Price */}
              {offer.originalPrice && (
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground line-through ml-2">
                    {offer.originalPrice}
                  </span>
                  <span className="text-2xl font-extrabold text-destructive">
                    {offer.newPrice}
                  </span>
                </div>
              )}

              {/* Discount tag */}
              <div
                className={`text-lg font-bold mb-5 px-4 py-1.5 rounded-full ${
                  offer.highlight
                    ? "bg-destructive/10 text-destructive"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {offer.discount}
              </div>

              {/* CTA */}
              <Button
                className="w-full rounded-xl py-5 text-base mt-auto bg-primary hover:bg-khodari-green-dark text-primary-foreground"
                onClick={onOrder}
              >
                استفيدي من العرض الآن
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalOffersSection;
