import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Furniture Manufacturing & Supply | EXIM Corporation',
    description: 'End-to-end furniture manufacturing and supply solutions for hospitality, commercial, and residential projects.',
    keywords: 'Furniture Manufacturing, Hospitality Furniture, Commercial Furniture, Contract Furniture, Indoor Furniture, Outdoor Furniture'
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
                        End-to-end solutions for hospitality, commercial, residential, and mixed-use developments.
                    </p>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                </section>

                {/* Introduction */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200 order-2 md:order-1">
                        {/* Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                            <span className="text-slate-500 text-4xl font-bold">Furniture Design</span>
                        </div>
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            EXIM Corporation provides end-to-end furniture manufacturing and supply solutions for hospitality, commercial, residential, and mixed-use developments.
                        </p>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Division Covers:</h3>
                            <ul className="space-y-3">
                                {['Indoor and outdoor furniture', 'Fixed (built-in) and loose furniture', 'Contract furniture for hotels, resorts, offices, and serviced apartments'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-amber-500 mt-1">✓</span>
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Manufacturing Footprint */}
                <section className="relative bg-amber-950 text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Manufacturing Footprint</h2>
                            <p className="text-lg text-amber-100/80 leading-relaxed">
                                Production and sourcing are distributed across <span className="text-white font-semibold">Sri Lanka, China, Indonesia, and Vietnam</span>, allowing flexibility in pricing, design, materials, and delivery timelines.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {['Sri Lanka', 'China', 'Indonesia', 'Vietnam'].map((country) => (
                                <div key={country} className="bg-amber-900/50 px-6 py-3 rounded-xl border border-amber-800 text-amber-200 font-bold shadow-lg">
                                    {country}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Approach */}
                <section className="text-center space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900">Our Approach</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Projects are executed on a specification-driven basis, working closely with developers, architects, and procurement teams to ensure durability, aesthetic alignment, and operational suitability.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                            { title: 'Durability', icon: '🛡️' },
                            { title: 'Aesthetics', icon: '✨' },
                            { title: 'Suitability', icon: '⚙️' }
                        ].map((item) => (
                            <div key={item.title} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:-translate-y-1 transition-transform">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-slate-900">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="text-center pt-8">
                    <a href="/#contact" className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/25">
                        Discuss Your Project
                    </a>
                </div>
            </div>
        </ServiceLayout>
    );
}
