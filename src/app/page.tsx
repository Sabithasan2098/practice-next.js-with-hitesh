import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instractor";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpComingObenars from "@/components/UpcommingObeners";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <MusicSchoolTestimonialCards />
      <UpComingObenars />
      <Instructor />
      <Footer />
    </main>
  );
}
