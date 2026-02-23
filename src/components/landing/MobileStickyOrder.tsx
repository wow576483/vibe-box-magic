import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { useState, useEffect } from "react";

const MobileStickyOrder = ({ onOrder }: { onOrder: () => void }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-card/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button
        size="lg"
        className="w-full rounded-xl py-5 text-base bg-primary hover:bg-khodari-green-dark gap-2 shadow-lg"
        onClick={onOrder}
      >
        <ShoppingBasket className="h-5 w-5" />
        اطلبي سلتك الآن – الدفع عند الاستلام
      </Button>
    </div>
  );
};

export default MobileStickyOrder;
