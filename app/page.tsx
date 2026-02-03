import HeroSection from '@/components/hero-section';
import IntroSection from '@/components/intro-section';
import WhyEximSection from '@/components/why-exim-section';
import ServicesSection from '@/components/services-section';
import HowItWorksSection from '@/components/how-it-works-section';
import CTASection from '@/components/cta-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EXIM Corporation | Industrial Manufacturing & Global Sourcing',
  description: 'Leading industrial manufacturing and global sourcing partner in Sri Lanka, serving Maldives, Mauritius, Seychelles, and the Middle East.',
};
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
