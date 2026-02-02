import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Timber & Industrial Manufacturing | EXIM Corporation',
    description: 'Sustainable sourcing, engineered processing, and export-ready production of timber and industrial wood products.',
    keywords: 'Timber, Industrial Manufacturing, Sustainable Sourcing, Engineered Wood, Teak, Hardwoods, New Zealand Pine'
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
                        Sustainable sourcing, engineered processing, and export-ready production for international markets.
                    </p>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                </section>

                {/* Introduction */}
                <section className="max-w-4xl mx-auto space-y-6">
                    <p className="text-lg text-slate-700 leading-relaxed">
                        EXIM Corporation's timber and industrial manufacturing division focuses on sustainable sourcing, engineered processing, and export-ready production for international markets.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        The Group works with carefully selected suppliers and production partners to process and supply:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li><strong className="text-slate-900">New Zealand pine</strong> for structural, furniture, and engineered applications</li>
                        <li><strong className="text-slate-900">Teak and premium hardwoods</strong> from Indonesia and Southeast Asia for high-value manufacturing</li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Manufacturing operations are supported by a dedicated timber-based facility in Vietnam, enabling consistent quality control, volume scalability, and export efficiency.
                    </p>
                </section>

                {/* Capabilities */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            'Certified and sustainable timber sourcing',
                            'Engineered wood and semi-finished components',
                            'Industrial timber for construction and manufacturing',
                            'Value-added processing for export markets'
                        ].map((capability, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                <div className="h-2 w-2 mt-2.5 rounded-full bg-amber-500 shrink-0" />
                                <span className="text-lg text-slate-700 font-medium">{capability}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section className="relative bg-amber-950 text-white rounded-3xl p-8 md:p-16 text-center space-y-8 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold">Commitment to Quality</h2>
                        <p className="text-lg text-amber-100/80 max-w-4xl mx-auto leading-relaxed">
                            EXIM Corporation prioritizes traceability, environmental compliance, and long-term supply continuity, making this division suitable for institutional buyers and large-scale projects.
                        </p>
                        <a href="/contact" className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-bold hover:bg-amber-100 transition-all shadow-lg mt-4">
                            Start a Conversation
                        </a>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
