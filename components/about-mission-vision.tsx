'use client';

import { motion } from 'framer-motion';

export default function AboutMissionVision() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden rounded-[2rem] bg-slate-50 p-10 md:p-14 border border-slate-100 shadow-lg hover:shadow-xl transition-all"
                    >
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-8 rotate-3 transition-transform group-hover:rotate-0">
                                <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                To bridge the gap between regional manufacturing excellence and global demand. We strive to deliver sustainable, high-quality industrial and supply solutions that empower businesses and communities worldwide.
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-[2rem] bg-amber-950 p-10 md:p-14 shadow-2xl"
                    >
                        {/* Wood texture overlay for premium feel */}
                        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 -rotate-3 transition-transform group-hover:rotate-0 border border-white/10">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                            <p className="text-lg text-slate-300 leading-relaxed font-light">
                                To be the most trusted industrial and supply partner in the international market, recognized for our commitment to quality, innovation, and compliant cross-border trade.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
