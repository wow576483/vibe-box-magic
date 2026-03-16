import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

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
    <form onSubmit={handleSubmit} className="space-y-4 px-1">
      {selectedBox && (
        <p className="text-center text-primary font-semibold text-sm animate-fade-in">
          🥬 اخترتِ {selectedBox} – اختيار ممتاز 👌
        </p>
      )}

      <div className="space-y-1.5 animate-fade-in" style={{ animationDelay: "0.05s", animationFillMode: "both" }}>
        <Label htmlFor="name" className="text-sm">الاسم الكامل</Label>
        <Input id="name" placeholder="مثال: سارة بوعلام" value={name} onChange={(e) => setName(e.target.value)} required disabled={loading} />
      </div>

      <div className="space-y-1.5 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
        <Label htmlFor="phone" className="text-sm">رقم الهاتف</Label>
        <Input id="phone" type="tel" placeholder="07XX XX XX XX" value={phone} onChange={(e) => setPhone(e.target.value)} required dir="ltr" className="text-right" disabled={loading} />
      </div>

      <div className="space-y-1.5 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
        <Label htmlFor="address" className="text-sm">العنوان</Label>
        <Input id="address" placeholder="مثال: حي سيدي مبروك، عمارة 12" value={address} onChange={(e) => setAddress(e.target.value)} required disabled={loading} />
      </div>

      <div className="space-y-1.5 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
        <Label htmlFor="delivery-time" className="text-sm">أفضل وقت للتوصيل</Label>
        <Select value={deliveryTime} onValueChange={setDeliveryTime} required disabled={loading}>
          <SelectTrigger id="delivery-time">
            <SelectValue placeholder="اختاري الوقت المناسب" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="صباحاً (8:00 - 12:00)">صباحاً (8:00 - 12:00)</SelectItem>
            <SelectItem value="بعد الظهر (12:00 - 16:00)">بعد الظهر (12:00 - 16:00)</SelectItem>
            <SelectItem value="مساءً (16:00 - 20:00)">مساءً (16:00 - 20:00)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" size="lg" className="w-full text-base py-5 rounded-xl bg-primary hover:bg-khodari-green-dark transition-all duration-250 hover:scale-[1.02] shadow-lg gap-2 animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "both" }} disabled={loading}>
        {loading ? (
          <><Loader2 className="h-5 w-5 animate-spin" />جاري الإرسال...</>
        ) : (
          <><Send className="h-5 w-5" />🚀 تأكيد الطلب الآن</>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
        ✔ الدفع عند الاستلام &nbsp; ✔ تفقدي السلة قبل الدفع &nbsp; ✔ إلغاء مجاني
      </p>
    </form>
  );
};

const SuccessContent = ({ onClose }: { onClose: () => void }) => (
  <div className="text-center space-y-4 py-4">
    <CheckCircle2 className="h-14 w-14 text-primary mx-auto" />
    <h3 className="text-xl font-bold text-foreground">تم استلام طلبك بنجاح! 🎉</h3>
    <p className="text-muted-foreground text-sm">سنتواصل معك قريباً عبر الهاتف لتأكيد الطلب والتوصيل.</p>
    <p className="text-xs text-muted-foreground">💳 الدفع عند الاستلام فقط</p>
    <Button onClick={onClose} variant="outline" className="mt-2">العودة للصفحة الرئيسية</Button>
  </div>
);

const OrderFormSection = ({ isOpen, onClose, selectedBox }: OrderFormSectionProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const isMobile = useIsMobile();

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  const title = "🛒 أكملي طلبك";
  const description = selectedBox ? "أدخلي معلوماتك لنوصلها لدارك" : "أدخلي معلوماتك لنوصلك سلتك الطازجة";

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DrawerContent className="max-h-[90vh] px-4 pb-6">
          <DrawerHeader className="pb-2">
            <DrawerTitle className="text-xl text-center">{title}</DrawerTitle>
            <DrawerDescription className="text-center text-sm">{description}</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto px-1">
            {success ? (
              <SuccessContent onClose={handleClose} />
            ) : (
              <OrderFormContent selectedBox={selectedBox} onSuccess={() => setSuccess(true)} loading={loading} setLoading={setLoading} />
            )}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">{title}</DialogTitle>
          <DialogDescription className="text-center text-sm">{description}</DialogDescription>
        </DialogHeader>
        {success ? (
          <SuccessContent onClose={handleClose} />
        ) : (
          <OrderFormContent selectedBox={selectedBox} onSuccess={() => setSuccess(true)} loading={loading} setLoading={setLoading} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderFormSection;
