import ServiceLayout from '@/components/service-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Oil & Gas | EXIM Corporation',
    description: 'Oil and gas related trading and supply activities supporting industrial and commercial energy requirements.',
    keywords: 'Oil and Gas, Energy Trading, Petroleum Trading, Fuel Supply, Industrial Lubricants, Energy Sourcing'
};

export default function OilGasPage() {
    return (
        <ServiceLayout>
            <div className="space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-800 tracking-tight">
                        Oil & Gas
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Supporting industrial and commercial energy requirements through structured sourcing and regional partnerships.
                    </p>
                    <div className="h-1 w-24 bg-slate-800 mx-auto rounded-full"></div>
                </section>

                {/* Introduction */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            EXIM Corporation engages selectively in oil and gas related trading and supply activities, supporting industrial and commercial energy requirements through structured sourcing and regional partnerships.
                        </p>
                        <h3 className="text-2xl font-bold text-slate-900">Scope of Activities</h3>
                        <ul className="space-y-4">
                            {[
                                'Petroleum and energy related product trading',
                                'Industrial fuel and lubricant supply support',
                                'Engagement with vetted regional principals'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-bold text-sm shrink-0">
                                        {i + 1}
                                    </span>
                                    <span className="text-slate-700 mt-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-800 flex items-center justify-center">
                        <div className="text-center p-8">
                            <span className="block text-4xl mb-4">🛢️</span>
                            <span className="text-slate-200 text-xl font-medium">Energy Trading & Supply</span>
                        </div>
                    </div>
                </section>

                {/* Compliance & Sustainability */}
                <section className="relative bg-amber-950 text-white rounded-3xl p-8 md:p-12 text-center space-y-8 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold">Compliance & Sustainability</h2>
                        <p className="text-lg text-amber-100/80 max-w-4xl mx-auto leading-relaxed">
                            All activities are approached with a strong emphasis on regulatory compliance, risk management, and geopolitical awareness. Expansion is evaluated prudently, with focus on secure supply chains and long-term sustainability.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            {[
                                { title: 'Regulatory Compliance', desc: 'Strict adherence to global standards.' },
                                { title: 'Risk Management', desc: 'Proactive mitigation strategies.' },
                                { title: 'Secure Supply Chains', desc: 'Dependable and resilient sourcing.' }
                            ].map((item) => (
                                <div key={item.title} className="bg-amber-900/50 p-6 rounded-xl border border-amber-800">
                                    <h4 className="font-bold text-amber-200 mb-2">{item.title}</h4>
                                    <p className="text-sm text-amber-100/70">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <a href="/contact" className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-bold hover:bg-amber-100 transition-all shadow-lg">
                                Contact Energy Division
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
