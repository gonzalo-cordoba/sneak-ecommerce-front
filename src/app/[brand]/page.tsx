import { BrandHeader, ProductCard } from "@/components";

const products = [
  {
    id: 1,
    name: "Air Max Plus",
    price: "$215.99",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Classic Cortez",
    price: "$92.99",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Air Force 1",
    price: "$215.99",
    imageUrl: "/placeholder.svg",
  },
];

export default function BrandPage({ params }: { params: { brand: string } }) {
  const getBrandLogo = (brand: string) => {
    switch (brand.toLowerCase()) {
      case "nike":
        return "/nike.png";
      case "adidas":
        return "/adidas.png";
      case "puma":
        return "/puma.png";
      default:
        return "/placeholder.svg";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <BrandHeader
        brand={params.brand as "nike" | "adidas" | "puma"}
        logoUrl={getBrandLogo(params.brand)}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
