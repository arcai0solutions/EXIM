'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden mx-4 md:mx-8 rounded-[2.5rem] md:rounded-[3.5rem] my-8">
            {/* Wood Texture Background - Same as Why EXIM Section */}
            <div className="absolute inset-0 bg-amber-950" />
            <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            {/* Decorative Glow Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            {/* Golden Border Accent */}
            <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3.5rem] ring-1 ring-amber-400/20" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                    >
                        {/* Eyebrow Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 border border-amber-400/30 mb-6"
                        >
                            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-amber-200 tracking-wide uppercase">
                                Ready to Partner?
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
                            Let&apos;s Build Something{' '}
                            <span className="relative">
                                <span className="text-amber-400">
                                    Extraordinary
                                </span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="absolute -bottom-2 left-0 right-0 h-1.5 bg-amber-400 rounded-full origin-left"
                                />
                            </span>{' '}
                            Together
                        </h2>

                        <p className="text-lg md:text-xl text-amber-50 max-w-xl leading-relaxed mb-8 font-light drop-shadow-sm text-justify">
                            Whether you need timber, furniture, hospitality supplies, or industrial solutions —
                            our expert team is ready to deliver excellence across the Indian Ocean region.
                        </p>

                        {/* Quick Contact Info */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-amber-100/80">
                            <a
                                href="mailto:info@eximcpl.com"
                                className="flex items-center gap-2 hover:text-amber-400 transition-colors group"
                            >
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">info@eximcpl.com</span>
                            </a>
                            <a
                                href="tel:+94117871571"
                                className="flex items-center gap-2 hover:text-amber-400 transition-colors group"
                            >
                                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">+94 117 871 571</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Content - CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 w-full lg:w-auto"
                    >
                        {/* Primary CTA - Wood themed button */}
                        <Link
                            href="/contact"
                            className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        >
                            <div className="relative flex items-center justify-center gap-3 px-8 py-5 bg-white rounded-2xl transition-all duration-300">
                                <MessageCircle className="w-5 h-5 text-amber-900" />
                                <span className="text-lg font-semibold text-amber-900 whitespace-nowrap">
                                    Get a Free Quote
                                </span>
                                <ArrowRight className="w-5 h-5 text-amber-700 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Secondary CTA */}
                        <Link
                            href="/about"
                            className="group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border-2 border-amber-400/30 bg-amber-900/30 backdrop-blur-sm hover:bg-amber-900/50 hover:border-amber-400/50 transition-all duration-300"
                        >
                            <span className="text-lg font-semibold text-white whitespace-nowrap">
                                Learn More About Us
                            </span>
                            <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                        </Link>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
