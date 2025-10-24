import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  const phoneNumber = "45991493388";
  const message = "Olá, vim do seu site!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-secondary to-background pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Cama Box Cascavel
          </h1>
          <p className="font-inter text-xl md:text-2xl text-primary/80 mb-4">
            Fábrica de Colchões e Cama Box
          </p>
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Produtos resistentes, duráveis e confortáveis para o seu descanso perfeito
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-inter font-semibold text-lg px-8 py-6"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Faça seu Pedido
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-inter font-semibold text-lg px-8 py-6"
            >
              <a href="#produtos">
                Ver Produtos
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2 font-playfair">Grande Estoque</div>
              <p className="text-muted-foreground font-inter">Pronta entrega</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2 font-playfair">Frete Grátis</div>
              <p className="text-muted-foreground font-inter">Em Cascavel</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2 font-playfair">Preços Especiais</div>
              <p className="text-muted-foreground font-inter">PIX e dinheiro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
