'use client';

import { motion } from 'framer-motion';

const divisions = [
    {
        title: 'Timber & Industrial Manufacturing',
        description: 'Sustainable partner network and engineered timber including New Zealand pine and certified premium hardwoods.'
    },
    {
        title: 'Furniture Manufacturing & Supply',
        description: 'Indoor and outdoor solutions for hospitality, commercial, and residential projects globally.'
    },
    {
        title: 'Hospitality Linen & Resort Supplies',
        description: 'Bed linen, bath linen, towels, duvets, and pillows for premium hotels and resorts.'
    },
    {
        title: 'Outdoor Architectural Solutions',
        description: 'Retractable systems and shading structures designed for tropical and commercial environments.'
    },
    {
        title: 'Oil & Gas Trading',
        description: 'Structured trading and supply support with strict compliance and risk discipline.'
    }
];

export default function AboutCoreDivisions() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <span className="text-amber-700 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Divisions</h2>
                    <p className="text-slate-600">
                        Structured around core divisions reflecting long-term demand and asset-backed capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {divisions.map((division, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-700 font-bold">
                                    <div className="w-2 h-2 rounded-full bg-amber-700" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-800 transition-colors">
                                        {division.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {division.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
