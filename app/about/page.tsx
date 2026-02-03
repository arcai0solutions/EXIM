import { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
    title: 'About Us | EXIM Corporation',
    description: "Learn about EXIM Corporation's legacy in industrial manufacturing and our commitment to quality across the Indian Ocean region.",
};

export default function AboutPage() {
    return <AboutContent />;
}
