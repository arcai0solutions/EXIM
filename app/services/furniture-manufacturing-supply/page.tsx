import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Furniture Manufacturing & Supply | EXIM Corporation',
    description: 'Custom furniture supplier and contract furniture specialist for hotels, resorts, luxury residences, and commercial spaces in Maldives, Seychelles, and worldwide.',
    keywords: ['Furniture Manufacturing', 'Custom Furniture', 'Contract Furniture', 'Solid Wood Furniture', 'Hospitality Furniture', 'Bespoke Furniture', 'Maldives', 'Mauritius', 'Seychelles', 'Sri Lanka', 'Middle East', 'Saudi', 'UAE', 'Israel']
};

export default function FurniturePage() {
    return (
        <ServiceLayout>
            <div className="space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-tight">
                        Furniture Manufacturing & Supply
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Custom furniture supplier and contract furniture specialist working with an extensive global network.
                    </p>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                </section>

                {/* Introduction */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200 order-2 md:order-1 group">
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                        <img
                            src="/furniture-manufacturing.png"
                            alt="Custom Furniture Manufacturing"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            EXIM Corporation is a custom furniture supplier and contract furniture specialist, working with an extensive network of partner furniture manufacturers and factories across international markets, including China, Sri Lanka, Vietnam, Indonesia, Myanmar, and New Zealand.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            We deliver made-to-order furniture, solid wood furniture, and bespoke furniture solutions for hotels, resorts, luxury residences, commercial spaces, and office environments.
                        </p>
                    </div>
                </section>

                {/* Capabilities */}
                <section className="bg-slate-50 rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Furniture Manufacturing Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            'Bedroom furniture manufacturing: beds, wardrobes, bedside tables, storage solutions',
                            'Living room furniture: sofas, coffee tables, TV units, sideboards',
                            'Office and commercial furniture: desks, workstations, meeting tables',
                            'Custom wooden cabinets, chairs, bookshelves, and joinery furniture',
                            'Bespoke furniture design and production tailored to project requirements',
                            'Contract furniture solutions for hospitality and commercial developments'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="h-2 w-2 mt-2.5 rounded-full bg-amber-500 shrink-0" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Strengths */}
                <section className="relative bg-amber-950 text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-8 text-center text-amber-50">Core Strengths</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                'Made-to-measure furniture for luxury homes, resorts, hotels, and commercial projects',
                                'High-quality craftsmanship combined with scalable production',
                                'Indoor and outdoor furniture solutions aligned with architectural and interior design concepts'
                            ].map((strength, i) => (
                                <div key={i} className="bg-amber-900/50 p-6 rounded-xl border border-amber-800 backdrop-blur-sm hover:bg-amber-900/70 transition-colors">
                                    <p className="text-lg text-amber-100 font-medium leading-relaxed text-center">{strength}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <div className="text-center pt-8 space-y-6">
                    <p className="text-xl text-slate-700 italic max-w-4xl mx-auto">
                        We specialize in custom furniture manufacturing, solid wood furniture supply, and hospitality furniture solutions for premium developments.
                    </p>
                    <a href="/contact" className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/25">
                        Discuss Your Project
                    </a>
                </div>
            </div>
        </ServiceLayout>
    );
}
