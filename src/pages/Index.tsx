import { useState, lazy, Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";
import StickyHeader from "@/components/landing/StickyHeader";
import MobileStickyOrder from "@/components/landing/MobileStickyOrder";
import SocialProofBar from "@/components/landing/SocialProofBar";

const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const BeforeAfterSection = lazy(() => import("@/components/landing/BeforeAfterSection"));
const SolutionSection = lazy(() => import("@/components/landing/SolutionSection"));
const HowItWorksSection = lazy(() => import("@/components/landing/HowItWorksSection"));
const BoxesSection = lazy(() => import("@/components/landing/BoxesSection"));
const OrderFormSection = lazy(() => import("@/components/landing/OrderFormSection"));
const TrustSection = lazy(() => import("@/components/landing/TrustSection"));
const TestimonialsSection = lazy(() => import("@/components/landing/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/landing/FinalCTASection"));

const SectionFallback = () => <div className="py-16" />;

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
    <>
      <StickyHeader onOrder={() => handleOrder()} />
      <main className="min-h-screen">
        <HeroSection onOrder={() => handleOrder()} />
        <SocialProofBar />
        <Suspense fallback={<SectionFallback />}>
          <ProblemSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <BeforeAfterSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SolutionSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <BoxesSection onOrder={handleOrder} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <OrderFormSection isOpen={orderOpen} onClose={() => setOrderOpen(false)} selectedBox={selectedBox} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TrustSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FinalCTASection />
        </Suspense>
      </main>
      <MobileStickyOrder onOrder={() => handleOrder()} />

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background/80">
        <div className="container mx-auto text-center space-y-2">
          <p className="font-bold text-background text-lg">🌿 خضاري – Khodari</p>
          <p className="text-sm">توصيل خضار وفواكه طازجة في قسنطينة</p>
          <p className="text-xs text-background/50">© {new Date().getFullYear()} خضاري. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
