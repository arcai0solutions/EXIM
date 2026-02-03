'use client';

import StaggeredMenu from '@/components/staggered-menu';
import AboutHero from '@/components/about-hero';
import AboutMissionVision from '@/components/about-mission-vision';
import AboutCoreDivisions from '@/components/about-core-divisions';
import AboutWhyExim from '@/components/about-why-exim';

export default function AboutContent() {
    return (
        <main className="min-h-screen bg-white">
            {/* Floating Staggered Menu - Forced to Scrolled State */}
            <StaggeredMenu
                position="right"
                forceScrolled={true}
                items={[
                    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
                    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
                    {
                        label: 'Services',
                        ariaLabel: 'View our services',
                        link: '/#services',
                        children: [
                            { label: 'Timber & Manufacturing', ariaLabel: 'Timber services', link: '/services/timber-industrial-manufacturing' },
                            { label: 'Furniture Supply', ariaLabel: 'Furniture services', link: '/services/furniture-manufacturing-supply' },
                            { label: 'Hospitality Linen', ariaLabel: 'Linen services', link: '/services/hospitality-linen-resort-supplies' },
                            { label: 'Outdoor Solutions', ariaLabel: 'Outdoor services', link: '/services/outdoor-architectural-solutions' },
                            { label: 'Oil & Gas', ariaLabel: 'Oil and gas services', link: '/services/oil-gas' },
                        ]
                    },
                    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
                ]}
                socialItems={[
                    { label: 'Facebook', link: 'https://web.facebook.com/profile.php?id=61587158443685' },
                    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/exim-corporation1' },
                    { label: 'Instagram', link: 'https://www.instagram.com/exim_corporation/' }
                ]}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#000000"
                openMenuButtonColor="#FFFFFF"
                changeMenuColorOnOpen={true}
                logoUrl="/exim-logo.png"
            />

            <AboutHero />
            <AboutMissionVision />
            <AboutCoreDivisions />
            <AboutWhyExim />
            {/* SiteFooter is handled by RootLayout */}
        </main>
    );
}
