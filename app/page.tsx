import HeroSection from '@/components/hero-section';
import IntroSection from '@/components/intro-section';
import WhyEximSection from '@/components/why-exim-section';
import ServicesSection from '@/components/services-section';
import HowItWorksSection from '@/components/how-it-works-section';
import CTASection from '@/components/cta-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <WhyEximSection />
      <ServicesSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
}
