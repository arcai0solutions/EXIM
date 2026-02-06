import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Outdoor Furniture & Architectural Solutions | EXIM Corporation',
    description: 'Commercial outdoor furniture, architectural shade systems, and weather-resistant outdoor solutions for resorts and commercial projects.',
    keywords: ['Outdoor Furniture', 'Architectural Solutions', 'Shade Systems', 'Pergolas', 'Outdoor Blinds', 'European Design', 'Maldives', 'Mauritius', 'Seychelles', 'Sri Lanka', 'Middle East', 'Saudi', 'UAE', 'Israel']
};

export default function OutdoorPage() {
    return (
        <ServiceLayout>
            <div className="space-y-16">
                {/* Hero Section */}
                <section className="relative rounded-3xl overflow-hidden bg-amber-950 text-white h-[50vh] flex items-center justify-center text-center px-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-amber-900 to-amber-800 opacity-90 z-0"></div>
                    <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-40 mix-blend-overlay z-0" />

                    <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Outdoor Furniture & Architectural Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-amber-100/80 leading-relaxed">
                            Delivering commercial outdoor furniture, architectural shade systems, and weather-resistant outdoor solutions.
                        </p>
                    </div>
                </section>

                {/* Introduction */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/outdor-serive.webp"
                            alt="Outdoor Furniture Solutions"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            EXIM Corporation delivers commercial outdoor furniture, architectural shade systems, and weather-resistant outdoor solutions through specialist partner manufacturers in Europe and China.
                        </p>
                        <p>
                            Our outdoor solutions are designed for tropical climates, coastal environments, and high-exposure commercial settings, making them ideal for resorts, hotels, villas, and outdoor hospitality spaces.
                        </p>
                    </div>
                </section>

                {/* Product Range */}
                <section className="bg-slate-50 p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Outdoor & Architectural Product Range</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Outdoor furniture', desc: 'Loungers, chairs, tables, poolside furniture, patio furniture, and bespoke outdoor seating' },
                            { title: 'Commercial outdoor furniture systems', desc: 'For resorts and hospitality projects' },
                            { title: 'Shade structures', desc: 'Aluminium and steel pergolas, canopies, and terrace structures' },
                            { title: 'Outdoor blinds and shutters', desc: 'Roller blinds, zip screens, monsoon blinds' },
                            { title: 'Weather-resistant umbrellas', desc: 'And protection systems with European-designed mechanisms' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-500 hover:shadow-xl transition-shadow cursor-default">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="flex-1 p-8 md:p-12 space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900">Why Choose Our Outdoor Solutions</h2>
                        <ul className="space-y-4">
                            {[
                                'Furniture and systems engineered for UV resistance, corrosion resistance, and long-term durability',
                                'European design standards combined with high-quality partner manufacturing',
                                'Ideal for luxury resorts, beachside properties, rooftop terraces, and commercial outdoor spaces'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                                    <span className="text-slate-700 text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full h-80 md:h-auto bg-slate-200 min-h-[300px] relative overflow-hidden group">
                        <img
                            src="/outdoor-furniture.png"
                            alt="Resilient Outdoor Furniture"
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-8">
                    <a href="/contact" className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/25">
                        Get a Consultation
                    </a>
                </section>
            </div>
        </ServiceLayout>
    );
}
