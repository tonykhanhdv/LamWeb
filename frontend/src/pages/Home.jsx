import HeroBanner from "../components/home/HeroBanner";
import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";

function Home() {
  return (
    <div className="container home-page">
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
    </div>
  );
}

export default Home;