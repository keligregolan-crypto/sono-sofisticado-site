import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logo} 
              alt="Cama Box Cascavel" 
              className="h-16 w-auto mb-4"
            />
            <p className="font-inter text-primary/70 text-sm">
              Fábrica de colchões e cama box em Cascavel. Qualidade, conforto e durabilidade para o seu descanso perfeito.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-primary mb-4">
              Contato
            </h3>
            <ul className="space-y-2 font-inter text-primary/70 text-sm">
              <li>Rua Apinajés 1109</li>
              <li>Santa Cruz, Cascavel - PR</li>
              <li>(45) 99149-3388</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-primary mb-4">
              Produtos
            </h3>
            <ul className="space-y-2 font-inter text-primary/70 text-sm">
              <li>Cama Box Conjugada</li>
              <li>Colchões</li>
              <li>Base Baú</li>
              <li>Cabeceiras</li>
              <li>Pufes Baú</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="font-inter text-primary/70 text-sm">
            © {currentYear} Cama Box Cascavel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
