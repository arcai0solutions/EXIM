import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Outdoor & Architectural Solutions | EXIM Corporation',
    description: 'Architectural-grade outdoor systems designed for tropical climates and commercial use.',
    keywords: 'Outdoor Solutions, Retractable Awnings, Shade Structures, Roller Shutters, Monsoon Blinds, Architectural Systems'
};

export default function OutdoorPage() {
    return (
        <ServiceLayout>
            <div className="space-y-16">
                {/* Hero Section */}
                <section className="relative rounded-3xl overflow-hidden bg-amber-950 text-white h-[50vh] flex items-center justify-center text-center px-4">
                    <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-amber-900 to-amber-800 opacity-90 z-0"></div>

                    <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Outdoor & Architectural Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-amber-100/80 leading-relaxed">
                            Architectural-grade outdoor systems designed for tropical climates, commercial use, and high-traffic environments.
                        </p>
                    </div>
                </section>

                {/* Product Scope */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Retractable Awnings & Roofs', desc: 'Flexible shade solutions for dynamic environments.' },
                        { title: 'Shade Structures', desc: 'Aluminium and steel structures engineered for durability.' },
                        { title: 'Blinds & Shutters', desc: 'Roller shutters, zip screens, and monsoon blinds.' },
                        { title: 'Weather Resistant Systems', desc: 'Large format umbrellas and protective systems.' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-500 hover:shadow-2xl transition-shadow">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </section>

                {/* Applications */}
                <section className="bg-slate-100 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Applications</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Widely deployed across hotels, resorts, F&B venues, commercial developments, and lifestyle projects, these solutions emphasize durability, low maintenance, and seamless architectural integration.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Hotels', 'Resorts', 'F&B Venues', 'Commercial', 'Lifestyle'].map((tag) => (
                                <span key={tag} className="bg-white px-4 py-2 rounded-full text-slate-800 font-medium shadow-sm text-sm border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full h-80 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <span className="text-slate-300 font-bold text-3xl">Architectural Integration</span>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-8">
                    <a href="/#contact" className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/25">
                        Get a Consultation
                    </a>
                </section>
            </div>
        </ServiceLayout>
    );
}
