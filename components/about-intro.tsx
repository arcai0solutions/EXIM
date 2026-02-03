'use client';

import { motion } from 'framer-motion';

export default function AboutIntro() {
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
                            className="text-sm font-medium text-amber-900 tracking-wider block mb-8 md:mb-0 uppercase"
                        >
                            Who We Are
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
                            <h2 className="text-2xl md:text-4xl md:leading-tight font-medium text-slate-900 mb-8">
                                A diversified industrial and supply-focused group headquartered in Sri Lanka, with manufacturing, strategic partners, and operational presence in key global markets.
                            </h2>

                            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                                <p>
                                    The Group operates across timber and industrial manufacturing, furniture and linen production, outdoor architectural systems, hospitality and resort supplies, and selective oil & gas engagements.
                                </p>
                                <p>
                                    Our strength lies in combining regional manufacturing capacity with cross-border trade expertise, delivering reliable, compliant, and scalable solutions to institutional buyers, developers, and international partners.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
