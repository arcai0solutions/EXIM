import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/cta-section';

export const metadata: Metadata = {
    title: 'Timber & Industrial Manufacturing | EXIM Corporation',
    description: 'Commercial timber solutions, industrial wood products, and furniture-grade timber. Sustainable wood solutions for global markets.',
    keywords: ['Timber', 'Industrial Wood', 'Furniture-Grade Timber', 'Hardwoods', 'Softwoods', 'Kiln-Dried Wood', 'Teak', 'Pine', 'Reclaimed Wood', 'Maldives', 'Mauritius', 'Seychelles', 'Sri Lanka', 'Middle East', 'Saudi', 'UAE', 'Israel']
};

export default function TimberPage() {
    return (
        <ServiceLayout>
            <div className="space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-tight">
                        Timber & Industrial Manufacturing
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Commercial timber solutions, industrial wood products, and furniture-grade timber through a global network of verified partner suppliers.
                    </p>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                </section>

                {/* Introduction */}
                <section className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
                    <p>
                        EXIM Corporation provides commercial timber solutions, industrial wood products, and furniture-grade timber through a global network of verified partner suppliers and timber production houses.
                    </p>
                    <p>
                        We work closely with partner suppliers across Sri Lanka, Vietnam, Myanmar, Indonesia, New Zealand, and China, supplying sustainably sourced hardwoods and softwoods for hospitality projects, commercial construction, furniture manufacturing, and industrial applications.
                    </p>
                    <p>
                        Our partner-supplied timber solutions include kiln-dried wood, precision-cut lumber, and custom timber specifications engineered for durability, stability, and long-term performance.
                    </p>
                </section>

                {/* Conclusion */}
                <section className="relative bg-amber-950 text-white rounded-3xl p-8 md:p-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
                    <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
                        <h2 className="text-3xl font-bold">Reliable Wood Materials</h2>
                        <p className="text-lg text-amber-100/80 max-w-4xl leading-relaxed">
                            Our timber solutions support luxury hospitality developments, resorts, villas, commercial buildings, and industrial projects requiring reliable, high-quality wood materials.
                        </p>
                    </div>
                </section>

                {/* Capabilities */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                        Timber & Wood Product Capabilities
                    </h2>
                    <div className="grid grid-cols-1 gap-3">
                        {[
                            'Kiln-dried timber for commercial furniture manufacturing and interior fit-outs',
                            'Teak wood, pine wood, and premium hardwoods for luxury furniture and joinery works',
                            'Reclaimed wood and sustainable timber solutions for eco-friendly and high-end projects',
                            'Furniture-grade wood for contract furniture, resort developments, and commercial interiors',
                            'Made-to-measure timber solutions aligned with architectural and design specifications'
                        ].map((capability, index) => (
                            <div key={index} className="flex items-start gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="relative flex-shrink-0 w-6 h-6 mt-1 flex items-center justify-center rounded-full overflow-hidden shadow-sm">
                                    <div className="absolute inset-0 bg-amber-800" />
                                    <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                                    <ArrowRight className="relative z-10 w-3 h-3 text-amber-100" />
                                </div>
                                <span className="text-lg text-slate-700 font-medium">{capability}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <CTASection />
        </ServiceLayout>
    );
}
