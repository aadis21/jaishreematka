import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RegistrationSteps from "@/components/RegistrationSteps";
import ImageBanner from "@/components/ImageBanner";
import InfoSection from "@/components/InfoSection";
import Features from "@/components/Features";
import GameLobbies from "@/components/GameLobbies";
import WithdrawalProcess from "@/components/WithdrawalProcess";
import Bonuses from "@/components/Bonuses";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import ResponsibleGaming from "@/components/ResponsibleGaming";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/constants";

const SECTION_COMPONENTS: Record<string, React.ComponentType> = {
  hero: HeroSection,
  registration: RegistrationSteps,
  features: Features,
  info: InfoSection,
  sports: GameLobbies,
  withdrawal: WithdrawalProcess,
  bonuses: Bonuses,
  comparison: ComparisonTable,
  faq: FAQSection,
  testimonials: Testimonials,
  responsible: ResponsibleGaming,
};

export default function Home() {
  return (
    <main>
      <Navbar />

      {SITE_CONFIG.layout.sectionOrder.map((sectionId) => {
        // Handle image banners dynamically from constants
        if (sectionId === "banner1") {
          const banner = SITE_CONFIG.images.banners.banner1;
          return (
            <ImageBanner
              key={sectionId}
              src={banner.src}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
            />
          );
        }
        if (sectionId === "banner2") {
          const banner = SITE_CONFIG.images.banners.banner2;
          return (
            <ImageBanner
              key={sectionId}
              src={banner.src}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
            />
          );
        }
        if (sectionId === "banner3") {
          const banner = SITE_CONFIG.images.banners.banner3;
          return (
            <ImageBanner
              key={sectionId}
              src={banner.src}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
            />
          );
        }

        // Render dynamic sections from the map
        const Component = SECTION_COMPONENTS[sectionId];
        if (!Component) return null;

        return <Component key={sectionId} />;
      })}

      <Footer />
    </main>
  );
}
