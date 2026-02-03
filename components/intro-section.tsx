'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function IntroSection() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Column - Label */}
                    <div className="md:col-span-3">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-slate-900 tracking-wide block mb-8 md:mb-0 uppercase"
                        >
                            About Us
                        </motion.span>
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:col-span-9 lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-2xl md:text-4xl md:leading-tight font-medium text-slate-900 mb-8 text-justify">
                                EXIM Corporation (Pvt) Ltd is a diversified Sri Lankan-origin enterprise with deep-rooted expertise across industrial manufacturing, partner networks, and strategic supply solutions.
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl text-justify">
                                Since 2018, the Group has evolved into a multi-sector organization supporting infrastructure, hospitality, industrial development, and energy-related initiatives globally and selected international markets. Our operations are structured around key divisions that reflect long-term demand, asset-backed capabilities, and cross-border trade strength.
                            </p>

                            <Link
                                href="/about"
                                className="relative inline-flex items-center gap-2 px-8 py-4 text-white rounded-full hover:scale-[1.02] transition-all hover:gap-3 group overflow-hidden shadow-lg hover:shadow-xl"
                            >
                                {/* Wood texture background */}
                                <span className="absolute inset-0 bg-amber-800" />
                                <span className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                                <span className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/20" />
                                <span className="relative z-10">About Us</span>
                                <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
