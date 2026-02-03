import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hospitality Linen & Resort Supplies | EXIM Corporation',
    description: 'Premium hospitality linen and resort supplies through trusted partner textile manufacturers. Serving luxury properties globally.',
    keywords: ['Hospitality Linen', 'Resort Supplies', 'Hotel Bedding', 'Luxury Towels', 'Bath Linen', 'Resort Textiles', 'Maldives', 'Mauritius', 'Seychelles', 'Sri Lanka', 'Middle East', 'Saudi', 'UAE', 'Israel']
};

export default function LinenPage() {
    return (
        <ServiceLayout>
            <div className="space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-tight">
                        Hospitality Linen & Resort Supplies
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Supplying premium hospitality linen and resort supplies through trusted partner textile manufacturers.
                    </p>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                </section>

                {/* Intro & Offerings */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                            <p>
                                EXIM Corporation supplies premium hospitality linen and resort supplies through trusted partner textile manufacturers and linen suppliers in India, Sri Lanka, and China.
                            </p>
                            <p>
                                We offer custom hotel linen, luxury bedding, and resort textile solutions designed to meet the standards of five-star hotels, luxury resorts, and serviced residences.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-amber-500">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Hospitality Linen & Textile Offerings</h3>
                            <ul className="space-y-4">
                                {[
                                    'Custom hotel and resort bed linen',
                                    'Luxury towels, bath linen, bed sheets, pillow covers, duvet covers',
                                    'Hospitality bedding accessories and soft furnishings',
                                    'Made-to-order resort textiles tailored to branding and design concepts'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100 group">
                        <div className="absolute inset-0 bg-slate-900/10 z-10" />
                        <img
                            src="/luxury-linen.png"
                            alt="Luxury Hospitality Linen"
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </section>

                {/* Key Advantages */}
                <section className="bg-slate-50 rounded-3xl p-8 md:p-16 text-center space-y-8">
                    <h2 className="text-3xl font-bold text-slate-900">Key Advantages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
                        {[
                            'High-thread-count fabrics and durable hospitality-grade materials',
                            'Sustainable and eco-conscious textile options',
                            'Project-based coordination for hotel openings, refurbishments, and renovations',
                            'Linen solutions designed to enhance guest comfort, room aesthetics, and brand experience'
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm">
                                    {i + 1}
                                </span>
                                <span className="text-slate-700 font-medium">{val}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section className="text-center max-w-4xl mx-auto space-y-8">
                    <p className="text-xl text-slate-700 font-medium">
                        Our hospitality supply solutions support hotel operators, resort developers, interior designers, and project consultants.
                    </p>
                    <a href="/contact" className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/25">
                        Request a Quote
                    </a>
                </section>
            </div>
        </ServiceLayout>
    );
}
