'use client';

import * as React from 'react';
import StaggeredMenu from '@/components/staggered-menu';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial scroll position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            <StaggeredMenu
                position="right"
                forceScrolled={true}
                items={[
                    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
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
                    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
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
            <main className="pt-40 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
                {children}
            </main>
        </div>
    );
}
