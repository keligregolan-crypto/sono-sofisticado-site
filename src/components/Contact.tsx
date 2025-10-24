import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phoneNumber = "5545991493388";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const address = "Rua Apinajés 1109, Santa Cruz, Cascavel - PR";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">
            Fale Conosco
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato e faça seu orçamento sem compromisso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card border border-primary/20 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-secondary mb-3">
              Endereço
            </h3>
            <p className="font-inter text-muted-foreground mb-4">
              Rua Apinajés 1109<br />
              Santa Cruz<br />
              Cascavel - PR
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Ver no Mapa
              </a>
            </Button>
          </div>

          <div className="bg-card border border-primary/20 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Phone className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-secondary mb-3">
              WhatsApp
            </h3>
            <p className="font-inter text-muted-foreground mb-4">
              (45) 99149-3388
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-accent font-inter font-semibold"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="bg-card border border-primary/20 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-secondary mb-3">
              Horário
            </h3>
            <p className="font-inter text-muted-foreground">
              Segunda a Sexta<br />
              08:00 - 18:00<br />
              <br />
              Sábado<br />
              08:00 - 12:00
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-xl p-8 md:p-12 text-center">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              Visite Nossa Loja
            </h3>
            <p className="font-inter text-lg text-primary/80 mb-6">
              Venha conhecer nosso showroom e veja de perto a qualidade dos nossos produtos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent font-inter font-semibold"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Fale Conosco
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-inter font-semibold bg-card/50"
              >
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Como Chegar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
