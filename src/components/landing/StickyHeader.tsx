import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";

const StickyHeader = ({ onOrder }: { onOrder: () => void }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2.5">
        <span className="text-lg font-bold text-primary">🌿 خضاري</span>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#boxes" className="hover:text-primary transition-colors">السلات</a>
          <a href="#how" className="hover:text-primary transition-colors">كيفاش نطلب</a>
          <a href="#faq" className="hover:text-primary transition-colors">أسئلة شائعة</a>
        </nav>
        <Button
          size="sm"
          className="rounded-full bg-primary hover:bg-khodari-green-dark gap-1.5 px-5"
          onClick={() => document.getElementById("boxes")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ShoppingBasket className="h-4 w-4" />
          اطلبي الآن
        </Button>
      </div>
    </header>
  );
};

export default StickyHeader;
