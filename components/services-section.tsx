'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const services = [
    {
        id: '001',
        title: 'Timber & Industrial Manufacturing',
        description: 'Sustainable sourcing and engineered timber solutions, including New Zealand pine and Southeast Asian hardwoods, supported by export-oriented manufacturing in Vietnam.',
    },
    {
        id: '002',
        title: 'Furniture Manufacturing & Supply',
        description: 'Indoor and outdoor furniture solutions for hospitality, commercial, and residential projects, produced across Sri Lanka, China, Indonesia, and Vietnam.',
    },
    {
        id: '003',
        title: 'Hospitality Linen & Resort Supplies',
        description: 'Manufacture and supply of bed linen, bath linen, towels, duvets, pillows, and feather products for hotels, resorts, and serviced residences.',
    },
    {
        id: '004',
        title: 'Outdoor & Architectural Solutions',
        description: 'Retractable systems, shading structures, and weather-resilient outdoor installations designed for tropical and commercial environments.',
    },
    {
        id: '005',
        title: 'Oil & Gas',
        description: 'Structured trading and supply support for petroleum and energy-related products, managed with strict compliance and risk discipline.',
    },
];

export default function ServicesSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="services">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="text-sm font-medium tracking-wider text-amber-900 uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100">
                            services
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                            How can we help <br />
                            <span className="text-amber-900">Your business grow</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Services List */}
                <div className="max-w-5xl mx-auto">
                    {services.map((service, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-b border-slate-200 last:border-none"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full py-8 md:py-12 flex items-start md:items-center justify-between group text-left transition-colors"
                                >
                                    <div className="flex items-start md:items-center gap-8 md:gap-16">
                                        <span className={`text-sm md:text-base font-mono transition-colors font-bold ${isOpen ? 'text-amber-800' : 'text-amber-900/80 group-hover:text-amber-900'}`}>
                                            {service.id}
                                        </span>
                                        <h3 className={`text-2xl md:text-4xl font-medium transition-colors ${isOpen ? 'text-amber-900' : 'text-slate-900 group-hover:text-amber-900'}`}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Wood Textured Icon Button */}
                                    <div className="relative flex-shrink-0 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                                        <div className="absolute inset-0 bg-amber-800" />
                                        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                                        <div className="relative z-10 text-amber-100">
                                            {isOpen ? <Minus className="w-4 h-4 md:w-6 md:h-6" /> : <Plus className="w-4 h-4 md:w-6 md:h-6" />}
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-[calc(3rem+2rem)] md:pl-[calc(4rem+4rem)] pb-12 pr-4 md:pr-24">
                                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
