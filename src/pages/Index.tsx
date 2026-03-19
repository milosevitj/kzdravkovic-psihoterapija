import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TherapyApproachesSection from '@/components/TherapyApproachesSection';
import PsychotherapySection from '@/components/PsychotherapySection';
import WhatToExpectSection from '@/components/WhatToExpectSection';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TherapyApproachesSection />
        <PsychotherapySection />
        <WhatToExpectSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;