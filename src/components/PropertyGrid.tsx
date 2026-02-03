import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    images: [
      "/src/assets/barracoes/barracoes1.jpeg",
      "/src/assets/barracoes/barracoes2.jpeg",
      "/src/assets/barracoes/barracoes3.jpeg",
      "/src/assets/barracoes/barracoes4.jpeg",
      "/src/assets/barracoes/barracoes5.jpeg",
    ],
    title: "Casa em Condomínio Fechado",
    location: "Alphaville, Barueri - SP",
    price: "R$ 1.850.000",
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    area: 320,
    type: "Venda",
  },
  {
    id: 2,
    images: [
      "/src/assets/beirario/Beirario1.jpeg",
      "/src/assets/beirario/Beirario2.jpeg",
      "/src/assets/beirario/Beirario3.jpeg",
      "/src/assets/beirario/Beirario4.jpeg",
      "/src/assets/beirario/Beirario5.jpeg",
    ],
    title: "Apartamento Alto Padrão",
    location: "Jardins, São Paulo - SP",
    price: "R$ 2.400.000",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: 180,
    type: "Venda",
  },
  {
    id: 3,
    images: [
      "/src/assets/beirario2/beirario22.jpeg",
      "/src/assets/beirario2/beirario21.jpeg",
      "/src/assets/beirario2/beirario23.jpeg",
      "/src/assets/beirario2/beirario24.jpeg",
      "/src/assets/beirario2/beirario25.jpeg",
    ],
    title: "Cobertura Duplex",
    location: "Moema, São Paulo - SP",
    price: "R$ 3.200.000",
    bedrooms: 4,
    bathrooms: 5,
    parking: 4,
    area: 420,
    type: "Venda",
  },
  {
    id: 4,
    images: [
      "/src/assets/beirario3/beirario31.jpeg",
      "/src/assets/beirario3/beirario32.jpeg",
      "/src/assets/beirario3/beirario33.jpeg",
      "/src/assets/beirario3/beirario34.jpeg",
      "/src/assets/beirario3/beirario35.jpeg",
    ],
    title: "Casa Térrea Moderna",
    location: "Granja Viana, Cotia - SP",
    price: "R$ 12.000/mês",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 200,
    type: "Aluguel",
  },
  {
    id: 5,
    images: [
      "/src/assets/colegiointegral/colegiointegral4.jpeg",
      "/src/assets/colegiointegral/colegiointegral2.png",
      "/src/assets/colegiointegral/colegiointegral3.png",
      "/src/assets/colegiointegral/colegiointegral1.png",
      "/src/assets/colegiointegral/colegiointegral5.jpeg",
    ],
    title: "Apartamento Garden",
    location: "Vila Mariana, São Paulo - SP",
    price: "R$ 980.000",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: 95,
    type: "Venda",
  },
  
];

const PropertyGrid = () => {
  return (
    <section id="imoveis" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Portfólio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Imóveis em Destaque
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Uma seleção exclusiva de imóveis cuidadosamente escolhidos para atender 
            aos mais exigentes padrões de qualidade e conforto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
