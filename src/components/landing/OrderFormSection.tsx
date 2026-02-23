import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Send, X } from "lucide-react";

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

  if (!isOpen) return null;

  const handleShareLocation = () => {
    const text = `📍 موقعي الحالي: أرسل موقعك هنا ليصلك الطلب`;
    window.open(`https://wa.me/213XXXXXXXXX?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const boxText = selectedBox ? `\n🥬 السلة: ${selectedBox}` : "";
    const message = `🛒 طلب جديد من خضاري${boxText}\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n📍 العنوان: ${address}\n🕐 أفضل وقت للتوصيل: ${deliveryTime}`;
    window.open(`https://wa.me/213XXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  };

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
          <p className="text-muted-foreground text-center mb-6 text-sm">
            {selectedBox
              ? `اخترتِ: ${selectedBox} – أدخلي معلوماتك لنوصلها لدارك`
              : "أدخلي معلوماتك لنوصلك سلتك الطازجة"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input
                id="name"
                placeholder="مثال: سارة بوعلام"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full gap-2 text-primary border-primary/30 hover:bg-primary/5"
                onClick={handleShareLocation}
              >
                <MapPin className="h-4 w-4" />
                شاركي موقعك على واتساب
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="delivery-time">أفضل وقت للتوصيل</Label>
              <Select value={deliveryTime} onValueChange={setDeliveryTime} required>
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
            >
              <Send className="h-5 w-5" />
              أرسلي الطلب عبر واتساب
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              💳 الدفع عند الاستلام – لا حاجة للدفع الإلكتروني
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderFormSection;
