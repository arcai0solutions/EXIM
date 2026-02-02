'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-10">
            {/* Wood Texture Background - Matched to Footer Theme */}
            <div className="absolute inset-0 bg-amber-950" />
            <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-32 md:mt-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-100/10 border border-amber-100/20 text-amber-100 text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
                        Est. 2018
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Building Values <br />
                        <span className="text-amber-100/80 font-light italic">Across Borders</span>
                    </h1>
                    <p className="text-lg md:text-xl text-amber-50/80 max-w-2xl mx-auto leading-relaxed font-light mb-4">
                        EXIM Corporation is a diversified industrial group combining regional manufacturing capacity with cross-border trade expertise.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
