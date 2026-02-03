import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Oil & Gas Solutions | EXIM Corporation',
    description: 'Supporting energy requirements for industrial, commercial, and strategic infrastructure projects in Saudi Arabia, UAE, and the Middle East.',
    keywords: ['Oil & Gas', 'Energy Trading', 'Petroleum Products', 'Industrial Fuel', 'LNG', 'LPG', 'Energy Logistics', 'Maldives', 'Mauritius', 'Seychelles', 'Sri Lanka', 'Middle East', 'Saudi', 'UAE', 'Israel']
};

export default function OilGasPage() {
    return (
        <ServiceLayout>
            <div className="space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-800 tracking-tight">
                        Oil & Gas Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Supporting energy requirements for industrial, commercial, and strategic infrastructure projects.
                    </p>
                    <div className="h-1 w-24 bg-slate-800 mx-auto rounded-full"></div>
                </section>

                {/* Introduction & Approach */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            EXIM Corporation supports energy requirements for industrial, commercial, and strategic infrastructure projects through structured sourcing, product supply, and regional partnerships. We engage selectively in petroleum product trading and energy logistics — designed to ensure reliable access to refined fuels, industrial feedstocks, and energy solutions tailored to complex project needs.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Approach</h3>
                        <p className="text-slate-700 leading-relaxed">
                            We combine global energy market insights with compliant sourcing strategies to deliver refined petroleum products and industrial fuels that meet international quality standards. Our operations emphasize risk aware supply chains, regulatory compliance, and long term sustainability for partners across emerging and established markets.
                        </p>
                    </div>
                </section>

                {/* Portfolio */}
                <section className="space-y-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Fuel & Energy Product Portfolio</h2>
                        <p className="text-lg text-slate-600">
                            Through vetted regional principals and refinery partners — including high capability refiners — we offer a comprehensive range of refined petroleum products:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Crude Oil',
                            'Motor Fuels & Aviation Fuels',
                            'Industrial Fuel Oils',
                            'Liquefied Petroleum Gas (LPG) & Liquefied Natural Gas (LNG)',
                            'Energy Trading & Industrial Fuel Supply',
                            'Logistics & Supply Chain Coordination'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border-l-4 border-slate-700 hover:shadow-lg transition-all">
                                <span className="text-2xl">🛢️</span>
                                <span className="text-slate-800 font-bold">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section className="bg-slate-900 text-slate-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Trading & Delivery Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Energy Trading', desc: 'Structured procurement and placement of crude, refined fuels, and LPG/LNG products in global markets.' },
                            { title: 'Industrial Fuel Supply', desc: 'Timely delivery of fuels and lubricants for energy and infrastructure projects.' },
                            { title: 'Logistics Coordination', desc: 'Seamless integration with carriers and terminals to ensure dependable supply continuity.' }
                        ].map((service, i) => (
                            <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-slate-300 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Compliance & Sustainability */}
                <section className="text-center space-y-6 max-w-4xl mx-auto bg-amber-50 p-8 rounded-3xl border border-amber-100">
                    <h2 className="text-3xl font-bold text-amber-900">Compliance & Sustainability</h2>
                    <p className="text-lg text-amber-900/80 leading-relaxed">
                        All engagements are governed by stringent regulatory compliance, environmental stewardship, and risk mitigation frameworks. We prioritize secure, resilient supply chains, proactive risk management, and adherence to global standards to support customer needs with integrity and long term reliability.
                    </p>
                    <div className="pt-4">
                        <a href="/contact" className="inline-block bg-amber-900 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-800 transition-all shadow-lg">
                            Contact Energy Division
                        </a>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
