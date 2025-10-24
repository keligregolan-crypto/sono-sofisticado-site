import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const phoneNumber = "45991493388";
  const message = "Olá, vim do seu site!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Cama Box Cascavel" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary hover:text-accent transition-colors font-inter font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-primary hover:text-accent transition-colors font-inter font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-primary hover:text-accent transition-colors font-inter font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-primary hover:text-accent transition-colors font-inter font-medium"
            >
              Contato
            </button>
            <Button
              asChild
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-accent font-inter font-semibold"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-primary hover:text-accent transition-colors font-inter font-medium text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-primary hover:text-accent transition-colors font-inter font-medium text-left"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-primary hover:text-accent transition-colors font-inter font-medium text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-primary hover:text-accent transition-colors font-inter font-medium text-left"
              >
                Contato
              </button>
              <Button
                asChild
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-accent font-inter font-semibold w-full"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
