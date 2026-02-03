import { Metadata } from 'next';
import ContactContent from './contact-content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Contact Us | EXIM Corporation',
    description: 'Get in touch with EXIM Corporation for inquiries about our services in Sri Lanka, Maldives, Mauritius, and the Middle East.',
};

export default function ContactPage() {
    return <ContactContent />;
}
