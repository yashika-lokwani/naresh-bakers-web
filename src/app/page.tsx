import CustomerFeedback from "@/components/CustomerFeedback";
import FeaturedCake from "@/components/FeaturedCake";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhatsAppOverlay from "@/components/WhatsappOverlay";
import SmoothScroll from "@/shared/SmoothScroll";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <div className="min-h-screen px-4">
        {/* <div className="w-20 h-20 relative">
          <ImageWithLoading src={`/naresh-logo.png`} alt={`naresh-logo.png`} />
        </div> */}
        <Hero />
        <FeaturedCake />
        <Products />
        <CustomerFeedback />
        <WhatsAppOverlay/>
      </div>
      <SmoothScroll />
      <Footer />
    </div>
  );
}
