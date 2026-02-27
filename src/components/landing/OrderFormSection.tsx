import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, X, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface OrderFormSectionProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBox?: string;
}

const OrderFormSection = ({ isOpen, onClose, selectedBox }: OrderFormSectionProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const resetForm = () => {
    setName("");
    setPhone("");
    setAddress("");
    setDeliveryTime("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("orders").insert([{
        name,
        phone,
        address,
        box_type: selectedBox || null,
        delivery_time: deliveryTime,
        city: "قسنطينة",
        quantity: 1,
      }]);

      if (error) throw error;

      setSuccess(true);
      resetForm();
      setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      toast({
        title: "✅ تم إرسال طلبك بنجاح!",
        description: "سنتواصل معك قريباً لتأكيد الطلب.",
      });
    } catch (err) {
      toast({
        title: "❌ حدث خطأ",
        description: "تعذر إرسال الطلب. حاولي مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="order-form" className="py-16 bg-gradient-to-b from-khodari-green-light/30 to-background">
        <div className="container mx-auto max-w-lg" ref={successRef}>
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border text-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
            <h2 className="text-2xl font-bold text-foreground">تم استلام طلبك بنجاح! 🎉</h2>
            <p className="text-muted-foreground">سنتواصل معك قريباً عبر الهاتف لتأكيد الطلب والتوصيل.</p>
            <p className="text-sm text-muted-foreground">💳 تذكري: الدفع عند الاستلام فقط</p>
            <Button
              onClick={() => { setSuccess(false); onClose(); }}
              variant="outline"
              className="mt-4"
            >
              العودة للصفحة الرئيسية
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-16 bg-gradient-to-b from-khodari-green-light/30 to-background">
      <div className="container mx-auto max-w-lg">
        <div className="relative bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-1.5 rounded-full hover:bg-muted transition-colors"
            aria-label="إغلاق"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

          <h2 className="text-2xl font-bold text-foreground text-center mb-2">
            🛒 أكملي طلبك
          </h2>
          <p className="text-muted-foreground text-center mb-4 text-sm">
            {selectedBox
              ? `أدخلي معلوماتك لنوصلها لدارك`
              : "أدخلي معلوماتك لنوصلك سلتك الطازجة"}
          </p>
          {selectedBox && (
            <p className="text-center text-primary font-semibold mb-4">
              🥬 اخترتِ {selectedBox} – اختيار ممتاز 👌
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input
                id="name"
                placeholder="مثال: سارة بوعلام"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="07XX XX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                dir="ltr"
                className="text-right"
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">العنوان</Label>
              <Input
                id="address"
                placeholder="مثال: حي سيدي مبروك، عمارة 12، الطابق 3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="delivery-time">أفضل وقت للتوصيل</Label>
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

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg py-6 rounded-xl bg-primary hover:bg-khodari-green-dark transition-all duration-250 hover:scale-[1.02] shadow-lg gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  🚀 تأكيد الطلب الآن
                </>
              )}
            </Button>

            <p className="text-center text-primary text-sm font-medium mb-2">
              🌿 نختار أفضل الخضر يومياً من السوق المركزي
            </p>
            <p className="text-xs text-muted-foreground text-center space-y-0.5">
              ✔ الدفع عند الاستلام فقط<br />
              ✔ تفقدي السلة قبل الدفع<br />
              ✔ إلغاء مجاني إذا لم تعجبك
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderFormSection;
