'use client';

import {
    ClipboardCheck,
    Factory,
    ShieldCheck,
    Truck,
    Handshake
} from 'lucide-react';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    style: 'italic',
    adjustFontFallback: false,
});

const steps = [
    {
        icon: ClipboardCheck,
        title: "Requirement Assessment",
        description: "Understanding project objectives, regulations, and operational needs.",
        className: "md:col-span-2 md:row-span-2", // Large prominent card
    },
    {
        icon: Factory,
        title: "Source & Manufacturing Alignment",
        description: "Selecting raw materials and factories based on quality, scalability, and timelines.",
        className: "md:col-span-2",
    },
    {
        icon: ShieldCheck,
        title: "Quality & Compliance Management",
        description: "Centralized inspection and certification to maintain standards.",
        className: "md:col-span-2",
    },
    {
        icon: Truck,
        title: "Logistics & Delivery Coordination",
        description: "Planning shipments and phased deliveries efficiently.",
        className: "md:col-span-2",
    },
    {
        icon: Handshake,
        title: "Long-Term Partnership Focus",
        description: "Prioritizing repeat supply programs and strategic collaboration.",
        className: "md:col-span-2", // Full width or large
    }
];

export default function HowItWorksSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-slate-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-50 border border-slate-200/60">
                        <span className="text-sm font-medium text-slate-600 tracking-wide uppercase">
                            How we work
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight">
                        We like to keep things{' '}
                        <span className={`${instrumentSerif.className} text-amber-700`}>
                            nice
                        </span>{' '}
                        and simple
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {/* Top Row: 3 cards */}
                    {steps.slice(0, 3).map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div key={idx} className="md:col-span-2 bg-[#F7F2EA] rounded-[2rem] p-8 flex flex-col group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-amber-100/50 relative overflow-hidden">
                                <div className="mb-8 flex justify-between items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FDFBF7] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-[#4A3728]" />
                                    </div>
                                    <span className={`${instrumentSerif.className} text-3xl text-[#4A3728]`}>
                                        0{idx + 1}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-slate-900 mb-3 min-h-[4rem] flex items-start">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    {/* Bottom Row: 2 cards (Horizontal Layout) */}
                    {steps.slice(3, 5).map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div key={idx + 3} className="md:col-span-3 bg-[#F7F2EA] rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center gap-6 group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-amber-100/50 relative overflow-hidden min-h-[220px]">
                                <div className="absolute top-8 right-8">
                                    <span className={`${instrumentSerif.className} text-3xl text-[#4A3728]`}>
                                        0{idx + 4}
                                    </span>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FDFBF7] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-[#4A3728]" />
                                    </div>
                                </div>
                                <div className="flex-1 pr-8">
                                    <h3 className="text-2xl font-medium text-slate-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
