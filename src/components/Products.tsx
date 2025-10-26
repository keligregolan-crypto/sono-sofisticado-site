import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

// Import product images
import camaConjugada1 from "@/assets/products/cama-casal-1.jpg";
import camaConjugada2 from "@/assets/products/cama-casal-2.jpg";
import camaConjugada3 from "@/assets/products/cama-casal-3.jpg";
import camaConjugada4 from "@/assets/products/cama-casal-4.jpg";
import camaConjugada5 from "@/assets/products/cama-casal-5.jpg";
import camaConjugada6 from "@/assets/products/cama-casal-6.jpg";
import camaConjugada7 from "@/assets/products/cama-casal-7.jpg";
import baseBau from "@/assets/products/base-bau.jpg";
import camaBauAzul from "@/assets/products/cama-bau-azul.jpg";
import camaSolteiroPreta1 from "@/assets/products/cama-solteiro-preta-1.jpg";
import camaSolteiroAzul1 from "@/assets/products/cama-solteiro-azul-1.jpg";
import camaSolteiroPreta2 from "@/assets/products/cama-solteiro-preta-2.jpg";
import camaSolteiroAzul2 from "@/assets/products/cama-solteiro-azul-2.jpg";
import camaSolteiroRosa from "@/assets/products/cama-solteiro-rosa.jpg";
import camaSolteiroAzul3 from "@/assets/products/cama-solteiro-azul-3.jpg";
import camaPufeBauCinza from "@/assets/products/cama-pufe-bau-cinza.jpg";
import camaPufeBauAzul from "@/assets/products/cama-pufe-bau-azul.jpg";
import camaConjugada8 from "@/assets/products/cama-casal-8.jpg";
import camaConjugada9 from "@/assets/products/cama-casal-9.jpg";
import camaConjugada10 from "@/assets/products/cama-casal-10.jpg";

const products = [
  {
    category: "Cama Box Solteiro com Cabeceira",
    items: [
      {
        title: "Cama Box Solteiro - Preta Base Simples",
        image: camaSolteiroPreta1,
        description: "Base preta com design moderno e compacto"
      },
      {
        title: "Cama Box Solteiro - Azul com Cabeceira Vertical",
        image: camaSolteiroAzul1,
        description: "Cabeceira vertical azul em tecido premium"
      },
      {
        title: "Cama Box Solteiro - Preta com Cabeceira com Botões de Strass",
        image: camaSolteiroPreta2,
        description: "Elegante cabeceira preta com botões de strass decorativos"
      },
      {
        title: "Cama Box Solteiro - Azul com Cabeceira com Botões de Strass",
        image: camaSolteiroAzul2,
        description: "Cabeceira azul com botões de strass e acabamento premium"
      },
      {
        title: "Cama Box Solteiro - Rosa com Cabeceira com Botões de Strass",
        image: camaSolteiroRosa,
        description: "Design delicado com cabeceira rosa com botões de strass"
      },
      {
        title: "Cama Box Solteiro - Azul com Cabeceira Vertical Premium",
        image: camaSolteiroAzul3,
        description: "Cabeceira vertical azul com acabamento em tecido nobre"
      },
    ]
  },
  {
    category: "Cama Box Conjugada com Cabeceira",
    items: [
      {
        title: "Cama Box Conjugada Casal - Preta",
        image: camaConjugada1,
        description: "Cama box conjugada com cabeceira com botões de strass e base"
      },
      {
        title: "Cama Box Conjugada Casal - Bege",
        image: camaConjugada2,
        description: "Cama box com cabeceira com botões de strass em tecido premium"
      },
      {
        title: "Cama Box Casal - Preta",
        image: camaConjugada3,
        description: "Base preta com cabeceira moderna"
      },
      {
        title: "Cama Box Conjugada Casal - Cinza",
        image: camaConjugada7,
        description: "Design elegante com acabamento premium"
      },
      {
        title: "Cama Box Casal - Preta com Cabeceira com Botões de Strass",
        image: camaConjugada8,
        description: "Cabeceira preta elegante com botões de strass e base preta"
      },
      {
        title: "Cama Box Casal - Azul e Cinza com Cabeceira com Botões de Strass",
        image: camaConjugada9,
        description: "Combinação sofisticada de cabeceira cinza com botões de strass e base azul"
      },
      {
        title: "Cama Box Casal - Dupla Camada de Espuma e Pillow Soft",
        image: camaConjugada10,
        description: "Base preta matelassê com cabeceira cinza com botões de strass e colchão premium com dupla camada de espuma"
      },
    ]
  },
  {
    category: "Base Baú e Pufe Baú",
    items: [
      {
        title: "Base Baú Casal - Bege",
        image: baseBau,
        description: "Base baú com amplo espaço de armazenamento"
      },
      {
        title: "Pufe Casal - Azul",
        image: camaBauAzul,
        description: "Pufe baú com sistema de abertura facilitada"
      },
      {
        title: "Cama Box com Pufe Baú - Azul",
        image: camaPufeBauAzul,
        description: "Design moderno com cabeceira azul com botões de strass e pufe baú"
      },
      {
        title: "Cama Box com Pufe Baú - Cinza",
        image: camaPufeBauCinza,
        description: "Conjunto completo com cabeceira com botões de strass e pufe baú espaçoso"
      },
    ]
  }
];

const Products = () => {
  const phoneNumber = "45991493388";

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nossos Produtos
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualidade, conforto e durabilidade em cada produto. Confira nosso catálogo completo.
          </p>
        </div>

        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="font-playfair text-3xl font-bold text-secondary mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((product, productIndex) => (
                <Card 
                  key={productIndex}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-primary/20"
                >
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-playfair text-xl font-semibold text-secondary mb-2">
                        {product.title}
                      </h4>
                      <p className="font-inter text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <Button
                        asChild
                        className="w-full bg-primary text-primary-foreground hover:bg-accent font-inter font-semibold"
                      >
                        <a 
                          href={`https://wa.me/${phoneNumber}?text=Olá! Gostaria de saber mais sobre: ${product.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Solicitar Orçamento
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <div className="bg-card border border-primary/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-secondary mb-4">
              Tamanhos Disponíveis
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="font-inter font-semibold text-secondary">Solteiro</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="font-inter font-semibold text-secondary">Casal</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="font-inter font-semibold text-secondary">Queen</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="font-inter font-semibold text-secondary">King</p>
              </div>
            </div>
            <p className="font-inter text-muted-foreground">
              Todos os nossos produtos estão disponíveis nos tamanhos solteiro, casal, queen e king.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
