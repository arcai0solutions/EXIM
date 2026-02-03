'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const features = [
    {
        id: 1,
        title: 'Manufacturing Capabilities',
        description: 'Multi-country sourcing and manufacturing capabilities',
    },
    {
        id: 2,
        title: 'Regional Market Expertise',
        description: 'Deep understanding of regional hospitality and island markets',
    },
    {
        id: 3,
        title: 'Quality & Compliance',
        description: 'Strong focus on quality, compliance, and timely delivery',
    },
    {
        id: 4,
        title: 'Partnership Approach',
        description: 'Long-term partnership approach rather than transactional engagement',
    },
];

export default function WhyEximSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-12 md:py-32 relative overflow-hidden mx-3 md:mx-8 rounded-3xl md:rounded-[3.5rem] my-6 md:my-8">
            {/* Wood Texture Background for the Whole Section */}
            <div className="absolute inset-0 bg-amber-950" />
            <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Left Column - Heading & Intro */}
                    <div className="relative md:sticky md:top-32 flex flex-col justify-center h-auto md:h-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 md:mb-8 drop-shadow-sm">
                                Why EXIM Corporation
                            </h2>
                            <div className="w-24 h-1.5 bg-amber-400 rounded-full mb-6 md:mb-8 shadow-sm mx-auto md:mx-0" />

                            <p className="text-base md:text-xl text-amber-50 leading-relaxed font-light drop-shadow-sm text-center md:text-justify">
                                EXIM Corporation is the leading regional champion for trading and manufacturing in the Indian Ocean region. Benefits of working with us include:
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Accordion List */}
                    <div className="flex flex-col gap-3 md:gap-4">
                        {features.map((feature, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-300 bg-white ${isOpen ? 'shadow-2xl scale-[1.02]' : 'hover:scale-[1.01] shadow-lg'}`}
                                >
                                    <div className="relative z-10 p-5 md:p-8">
                                        <div className="flex items-center justify-between gap-3 md:gap-4">
                                            <h3 className="text-lg md:text-2xl font-bold text-slate-900">
                                                {feature.title}
                                            </h3>

                                            {/* Button with Wood Texture */}
                                            <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden border border-amber-900/10 shadow-md">
                                                <div className="absolute inset-0 bg-amber-800" />
                                                <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                                                <div className="relative z-10 text-amber-100">
                                                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                                </div>
                                            </span>
                                        </div>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light text-left md:text-justify">
                                                        {feature.description}
                                                    </p>

                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
