import { CheckCircle, Wrench, Package, Truck } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Grande Estoque",
      description: "Produtos a pronta entrega para você levar hoje mesmo"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Entrega Grátis",
      description: "Frete grátis para toda região de Cascavel"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Qualidade Garantida",
      description: "Produtos resistentes, duráveis e confortáveis"
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Serviço de Reforma",
      description: "Reformamos e restauramos seus móveis com qualidade"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Por Que Escolher a Cama Box Cascavel?
          </h2>
          <p className="font-inter text-lg text-primary/80 max-w-2xl mx-auto">
            Somos uma fábrica especializada em colchões e cama box, oferecendo produtos de alta qualidade com os melhores preços da região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-xl transition-shadow border border-primary/20"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="font-inter text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 md:p-12 max-w-4xl mx-auto border border-primary/20">
          <h3 className="font-playfair text-3xl font-bold text-secondary mb-6 text-center">
            Nossos Produtos
          </h3>
          <div className="grid md:grid-cols-2 gap-6 font-inter">
            <div>
              <h4 className="font-semibold text-lg text-secondary mb-3">Produtos Disponíveis:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Cama Box Conjugada
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Colchões de Alta Qualidade
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Bases para Cama
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Base Baú
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-secondary mb-3">Diferenciais:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Cabeceiras Personalizadas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Pufes Baú
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Serviço de Reforma
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Atendimento Personalizado
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary/10 rounded-lg">
            <h4 className="font-semibold text-lg text-secondary mb-3 text-center">Formas de Pagamento</h4>
            <p className="text-center text-muted-foreground">
              <strong className="text-secondary">Valores promocionais</strong> para pagamento em <strong className="text-primary">PIX</strong> ou <strong className="text-primary">dinheiro</strong>
              <br />
              <span className="text-sm">Aceitamos também pagamentos com cartão de crédito e débito</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
