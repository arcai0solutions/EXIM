import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hospitality Linen & Resort Supplies | EXIM Corporation',
    description: 'Manufacturer and supplier of hospitality-grade bed and bath linen and soft goods for hotels and resorts.',
    keywords: 'Hospitality Linen, Hotel Bedding, Bath Linen, Resort Supplies, Hotel Towels, Institutional Linen'
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
                        Premium bed and bath linen for hotels, resorts, and institutional accommodation.
                    </p>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                </section>

                {/* Intro & Portfolio */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            EXIM Corporation is a manufacturer and supplier of hospitality-grade bed and bath linen and related soft goods, serving hotels, resorts, serviced apartments, and institutional accommodation providers.
                        </p>
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-amber-500">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Product Portfolio</h3>
                            <ul className="space-y-4">
                                {[
                                    'Bed linen (sheets, pillowcases, duvet covers)',
                                    'Bath linen (towels, bath mats)',
                                    'Duvets, pillows, and feather products',
                                    'Selected soft furnishing essentials',
                                    'Project-specific ceramic and bathroom fittings'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 to-white flex items-center justify-center">
                            <span className="text-slate-400 text-4xl font-bold">Luxury Linen</span>
                        </div>
                    </div>
                </section>

                {/* Capabilities */}
                <section className="bg-slate-50 rounded-3xl p-8 md:p-16 text-center space-y-8">
                    <h2 className="text-3xl font-bold text-slate-900">Manufacturing & Supply Capability</h2>
                    <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
                        The division is supported by regional manufacturing partnerships and dedicated production capacity aligned with international hospitality standards. Products are developed with a focus on durability, laundering performance, comfort, and brand specification compliance.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                        {[
                            'Durability', 'Performance', 'Comfort', 'Compliance'
                        ].map((val) => (
                            <div key={val} className="bg-white p-4 rounded-xl shadow-sm text-amber-900 font-bold border border-slate-100">
                                {val}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Approach footer */}
                <section className="text-center max-w-4xl mx-auto space-y-8">
                    <p className="text-lg text-slate-600">
                        EXIM Corporation works closely with hotel operators, developers, and procurement teams to deliver consistent quality, customization options, and dependable long-term supply.
                    </p>
                    <a href="/#contact" className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/25">
                        Request a Quote
                    </a>
                </section>
            </div>
        </ServiceLayout>
    );
}
