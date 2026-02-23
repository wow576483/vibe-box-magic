import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BoxesSection from "@/components/landing/BoxesSection";
import OrderFormSection from "@/components/landing/OrderFormSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  const [orderOpen, setOrderOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState<string | undefined>();

  const handleOrder = (boxName?: string) => {
    setSelectedBox(boxName);
    setOrderOpen(true);
    setTimeout(() => {
      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen">
      <HeroSection onOrder={() => handleOrder()} />
      <ProblemSection />
      <BeforeAfterSection />
      <SolutionSection />
      <HowItWorksSection />
      <BoxesSection onOrder={handleOrder} />
      <OrderFormSection isOpen={orderOpen} onClose={() => setOrderOpen(false)} selectedBox={selectedBox} />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
