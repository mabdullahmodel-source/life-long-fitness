import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import FacilitiesSection from '@/components/landing/FacilitiesSection';
import MembershipSection from '@/components/landing/MembershipSection';
import TrainingSection from '@/components/landing/TrainingSection';
import WhyUsSection from '@/components/landing/WhyUsSection';
import GallerySection from '@/components/landing/GallerySection';
import ConnectSection from '@/components/landing/ConnectSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import WhatsAppFAB from '@/components/landing/WhatsAppFAB';

const IMG1 = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/f1a94c5fe_WhatsAppImage2026-06-03at172318.jpg';
const IMG2 = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/3913eafff_WhatsAppImage2026-06-03at172450.jpg';
const IMG3 = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/2a5494481_WhatsAppImage2026-06-02at1522041.jpg';
const IMG4 = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/c4c177566_WhatsAppImage2026-06-02at152204.jpg';

const HAPPY_MEMBERS = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/70595930f_Wemoveeachotherforward_.jpg';
const TRANSFORMATION = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/a9b01be8d_.jpg';
const CANAL_VIEW = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/372cb9303_WhatsAppImage2026-06-03at173858.jpg';
const ABOUT_IMG = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/2a6125fa0_WhatsAppImage2026-06-02at1522041.jpg';
const TRAINER_IMG = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80';

const IMAGES = {
  hero: IMG2,
  heroAlt: IMG3,
  about: ABOUT_IMG,
  training: TRAINER_IMG,
  gallery: [
    IMG1,           // Gym Equipment (big)
    IMG2,           // Workout Areas
    CANAL_VIEW,     // Canal View
    TRAINER_IMG,    // Professional Trainers
    HAPPY_MEMBERS,  // Happy Members (index 4) — image 1
    TRANSFORMATION, // Transformation Results (index 5) — image 2
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} heroAlt={IMAGES.heroAlt} />
      <AboutSection aboutImage={IMAGES.about} />
      <FacilitiesSection />
      <MembershipSection />
      <TrainingSection trainingImage={IMAGES.training} />
      <WhyUsSection />
      <GallerySection images={IMAGES.gallery} />
      <ConnectSection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}