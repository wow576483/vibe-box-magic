import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/15 via-accent to-primary/10" ref={ref}>
      <div className={`container mx-auto text-center max-w-2xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          ودّعي تعب السوق وابدأي تجربة خضاري اليوم 🌿
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          سلة خضار طازج لباب دارك. بلا تعب، بلا زحمة، بلا قلق على الجودة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-10 py-6 rounded-xl bg-primary hover:bg-khodari-green-dark transition-all duration-250 hover:scale-105 shadow-lg"
            onClick={() => document.getElementById("boxes")?.scrollIntoView({ behavior: "smooth" })}
          >
            اطلبي سلتك الأولى اليوم
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-xl border-primary text-primary hover:bg-accent gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            تواصلي معنا على واتساب
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
