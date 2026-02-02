'use client';

import { motion } from 'framer-motion';

const features = [
    {
        id: '01',
        title: 'Regional Footprint',
        description: 'Manufacturing and sourcing presence across key Asian markets.'
    },
    {
        id: '02',
        title: 'Project Driven',
        description: 'Specification-led execution with precise compliance.'
    },
    {
        id: '03',
        title: 'Long-term Partners',
        description: 'Trusted by institutions for sustained growth and reliability.'
    },
    {
        id: '04',
        title: 'Platform Stability',
        description: 'Operating since 2018 with a solid track record.'
    }
];

export default function AboutWhyExim() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why EXIM?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            We don't just supply products; we engineer solutions. Our integrated approach ensures control over quality, timeline, and cost.
                        </p>
                    </div>
                    <div className="w-full md:w-auto">
                        <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-amber-900 text-white rounded-full font-medium transition-transform hover:-translate-y-1">
                            Work With Us
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:shadow-lg transition-all duration-300"
                        >
                            <span className="text-6xl font-bold text-amber-700/30 absolute top-4 right-6 group-hover:text-amber-500/50 transition-colors">
                                {feature.id}
                            </span>
                            <div className="relative z-10 mt-4">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-800 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
