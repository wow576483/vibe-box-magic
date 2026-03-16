import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Loader2, CheckCircle2, ShoppingBasket } from "lucide-react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface OrderFormSectionProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBox?: string;
}

const OrderFormContent = ({ selectedBox, onSuccess, loading, setLoading }: {
  selectedBox?: string;
  onSuccess: () => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const { error } = await supabase.from("orders").insert([{
        name, phone, address,
        box_type: selectedBox || null,
        delivery_time: deliveryTime,
        city: "قسنطينة",
        quantity: 1,
      }]);
      if (error) throw error;
      onSuccess();
      toast({ title: "✅ تم إرسال طلبك بنجاح!", description: "سنتواصل معك قريباً لتأكيد الطلب." });
    } catch {
      toast({ title: "❌ حدث خطأ", description: "تعذر إرسال الطلب. حاولي مرة أخرى.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {selectedBox && (
        <div className="text-center animate-fade-in">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-medium text-sm px-4 py-2 rounded-full">
            <ShoppingBasket className="h-4 w-4" />
            {selectedBox}
          </span>
        </div>
      )}

      <div className="space-y-1.5 animate-fade-in" style={{ animationDelay: "0.05s", animationFillMode: "both" }}>
        <Label htmlFor="name" className="text-sm font-medium text-foreground/80">الاسم الكامل</Label>
        <Input
          id="name"
          placeholder="مثال: سارة بوعلام"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
          className="h-12 rounded-xl border-border/60 bg-muted/30 focus:bg-background transition-colors"
        />
      </div>

      <div className="space-y-1.5 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
        <Label htmlFor="phone" className="text-sm font-medium text-foreground/80">رقم الهاتف</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="07XX XX XX XX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          dir="ltr"
          className="h-12 rounded-xl border-border/60 bg-muted/30 focus:bg-background transition-colors text-right"
          disabled={loading}
        />
      </div>

      <div className="space-y-1.5 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
        <Label htmlFor="address" className="text-sm font-medium text-foreground/80">العنوان</Label>
        <Input
          id="address"
          placeholder="مثال: حي سيدي مبروك، عمارة 12"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          disabled={loading}
          className="h-12 rounded-xl border-border/60 bg-muted/30 focus:bg-background transition-colors"
        />
      </div>

      <div className="space-y-1.5 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
        <Label htmlFor="delivery-time" className="text-sm font-medium text-foreground/80">أفضل وقت للتوصيل</Label>
        <Select value={deliveryTime} onValueChange={setDeliveryTime} required disabled={loading}>
          <SelectTrigger id="delivery-time" className="h-12 rounded-xl border-border/60 bg-muted/30">
            <SelectValue placeholder="اختاري الوقت المناسب" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="صباحاً (8:00 - 12:00)">صباحاً (8:00 - 12:00)</SelectItem>
            <SelectItem value="بعد الظهر (12:00 - 16:00)">بعد الظهر (12:00 - 16:00)</SelectItem>
            <SelectItem value="مساءً (16:00 - 20:00)">مساءً (16:00 - 20:00)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="animate-fade-in pt-1" style={{ animationDelay: "0.25s", animationFillMode: "both" }}>
        <Button
          type="submit"
          size="lg"
          className="w-full text-base py-6 rounded-xl bg-primary hover:bg-khodari-green-dark transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20 gap-2"
          disabled={loading}
        >
          {loading ? (
            <><Loader2 className="h-5 w-5 animate-spin" />جاري الإرسال...</>
          ) : (
            <><Send className="h-5 w-5" />تأكيد الطلب</>
          )}
        </Button>
      </div>

      <div className="animate-fade-in flex items-center justify-center gap-4 text-xs text-muted-foreground pt-1" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
        <span>✔ الدفع عند الاستلام</span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        <span>✔ إلغاء مجاني</span>
      </div>
    </form>
  );
};

const SuccessContent = ({ onClose }: { onClose: () => void }) => (
  <div className="text-center space-y-5 py-6 animate-scale-in">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
      <CheckCircle2 className="h-9 w-9 text-primary" />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-foreground">تم استلام طلبك بنجاح! 🎉</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">سنتواصل معك قريباً عبر الهاتف<br />لتأكيد الطلب والتوصيل</p>
    </div>
    <span className="inline-block text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">💳 الدفع عند الاستلام فقط</span>
    <Button onClick={onClose} variant="outline" className="mt-2 rounded-xl">العودة للصفحة الرئيسية</Button>
  </div>
);

const OrderFormSection = ({ isOpen, onClose, selectedBox }: OrderFormSectionProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  const description = selectedBox ? "أدخلي معلوماتك لنوصلها لدارك" : "أدخلي معلوماتك لنوصلك سلتك الطازجة";

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DrawerContent className="max-h-[92vh] px-5 pb-8">
        {/* Header */}
        <div className="text-center pt-3 pb-4 space-y-1">
          <h2 className="text-lg font-bold text-foreground">أكملي طلبك 🛒</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto overscroll-contain">
          {success ? (
            <SuccessContent onClose={handleClose} />
          ) : (
            <OrderFormContent
              selectedBox={selectedBox}
              onSuccess={() => setSuccess(true)}
              loading={loading}
              setLoading={setLoading}
            />
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default OrderFormSection;
