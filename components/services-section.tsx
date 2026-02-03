'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const services = [
    {
        id: '001',
        title: 'Timber & Industrial Manufacturing',
        description: 'Sustainable sourcing and engineered timber solutions, including New Zealand pine and Southeast Asian hardwoods, supported by export-oriented manufacturing in Vietnam.',
        link: '/services/timber-industrial-manufacturing',
        images: [
            'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        id: '002',
        title: 'Furniture Manufacturing & Supply',
        description: 'Indoor and outdoor furniture solutions for hospitality, commercial, and residential projects, produced across Sri Lanka, China, Indonesia, and Vietnam.',
        link: '/services/furniture-manufacturing-supply',
        images: [
            'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        id: '003',
        title: 'Hospitality Linen & Resort Supplies',
        description: 'Manufacture and supply of bed linen, bath linen, towels, duvets, pillows, and feather products for hotels, resorts, and serviced residences.',
        link: '/services/hospitality-linen-resort-supplies',
        images: [
            'https://images.unsplash.com/photo-1627387346124-b154a4ba1e4d?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        id: '004',
        title: 'Outdoor & Architectural Solutions',
        description: 'Retractable systems, shading structures, and weather-resilient outdoor installations designed for tropical and commercial environments.',
        link: '/services/outdoor-architectural-solutions',
        images: [
            'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        id: '005',
        title: 'Oil & Gas',
        description: 'Structured trading and supply support for petroleum and energy-related products, managed with strict compliance and risk discipline.',
        link: '/services/oil-gas',
        images: [
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop'
        ]
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
                                    <div className="flex items-start md:items-center gap-6 md:gap-10">
                                        <div className={`p-2 rounded-full border transition-colors ${isOpen ? 'border-amber-800 bg-amber-50 text-amber-800' : 'border-slate-200 text-slate-400 group-hover:border-amber-900/30 group-hover:text-amber-900 group-hover:bg-amber-50/50'}`}>
                                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-medium transition-colors ${isOpen ? 'text-amber-900' : 'text-slate-900 group-hover:text-amber-900'}`}>
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
                                            <div className="pl-[calc(3rem+2rem)] md:pl-[calc(4rem+4rem)] pb-12 pr-4 md:pr-4">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                                    <div className="flex flex-col gap-8">
                                                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
                                                            {service.description}
                                                        </p>
                                                        <div>
                                                            <Link
                                                                href={service.link || '#'}
                                                                className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full overflow-hidden group/btn shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                                                            >
                                                                <span className="absolute inset-0 bg-amber-900" />
                                                                <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                                                                <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                                                                    Learn More
                                                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 w-full">
                                                        {service.images?.map((img, idx) => (
                                                            <div 
                                                                key={idx} 
                                                                className={`relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 group/img shadow-xl
                                                                    ${idx === 0 ? 'rotate-[-6deg] translate-y-4 z-10' : 'rotate-[6deg] translate-x-[-15%] translate-y-[-10%] z-0'}
                                                                    hover:z-20 hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out border-4 border-white
                                                                `}
                                                            >
                                                                <div className="absolute inset-0 bg-amber-900/10 group-hover/img:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
                                                                <img 
                                                                    src={img} 
                                                                    alt={`${service.title} ${idx + 1}`} 
                                                                    className="object-cover w-full h-full transition-transform duration-700 group-hover/img:scale-110" 
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
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
