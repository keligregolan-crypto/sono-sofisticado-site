import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "45991493388";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        asChild
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-accent font-inter font-semibold shadow-lg hover:shadow-xl transition-all rounded-full h-16 w-16 p-0"
      >
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
        >
          <Phone className="h-7 w-7" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
