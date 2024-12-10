import {
  CategorySlider,
  HeroSection,
  InstagramFeed,
  NavBar,
  ProductGrid,
} from "@/components";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ProductGrid />
      <CategorySlider />
      <InstagramFeed />
    </main>
  );
}
