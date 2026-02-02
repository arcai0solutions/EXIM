'use client';

import React from 'react';
import ServiceLayout from '@/components/service-layout';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <ServiceLayout>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[#3E2723] mb-6">Contact Us</h1>
                    <p className="text-xl text-[#5D4037] max-w-2xl mx-auto">
                        Get in touch with our team for inquiries about our regional trading and manufacturing solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-[#D7CCC8]"
                    >
                        <h2 className="text-3xl font-bold text-[#3E2723] mb-8">Get in Touch</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-[#5D4037] mb-2">Corporate Head Office</h3>
                                <p className="text-[#795548] text-lg leading-relaxed">
                                    EXIM Corporation (Pvt) Ltd<br />
                                    Colombo, Sri Lanka
                                </p>
                            </div>

                            <div className="h-px bg-[#D7CCC8] w-full my-6" />

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#EFEBE9] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#3E2723]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#8D6E63] font-medium uppercase tracking-wide">Email</p>
                                        <a href="mailto:info@eximcpl.com" className="text-lg text-[#3E2723] font-medium hover:text-[#FFB300] transition-colors">
                                            info@eximcpl.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#EFEBE9] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#3E2723]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#8D6E63] font-medium uppercase tracking-wide">Telephone</p>
                                        <a href="tel:+94117871571" className="text-lg text-[#3E2723] font-medium hover:text-[#FFB300] transition-colors">
                                            +94 117 871 571
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#EFEBE9] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#3E2723]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#8D6E63] font-medium uppercase tracking-wide">Mobile / WhatsApp</p>
                                        <a href="tel:+94772443778" className="text-lg text-[#3E2723] font-medium hover:text-[#FFB300] transition-colors">
                                            +94 772 443 778
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-[#D7CCC8] w-full my-6" />

                            <div>
                                <h3 className="text-xl font-semibold text-[#5D4037] mb-4">Follow Us</h3>
                                <div className="flex items-center gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#3E2723] hover:bg-[#FFB300] hover:text-[#3E2723] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md group">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#3E2723] hover:bg-[#FFB300] hover:text-[#3E2723] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md group">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#3E2723] hover:bg-[#FFB300] hover:text-[#3E2723] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md group">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#3E2723] p-8 md:p-12 rounded-2xl shadow-xl text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4E342E] rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 text-[#FFB300]">Send us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#D7CCC8] mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-[#4E342E]/50 border border-[#6D4C41] rounded-lg px-4 py-3 text-white placeholder-[#8D6E63] focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#D7CCC8] mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-[#4E342E]/50 border border-[#6D4C41] rounded-lg px-4 py-3 text-white placeholder-[#8D6E63] focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300] transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#D7CCC8] mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-[#4E342E]/50 border border-[#6D4C41] rounded-lg px-4 py-3 text-white placeholder-[#8D6E63] focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300] transition-colors"
                                        placeholder="+94 77..."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[#D7CCC8] mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-[#4E342E]/50 border border-[#6D4C41] rounded-lg px-4 py-3 text-white placeholder-[#8D6E63] focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300] transition-colors"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#FFB300] text-[#3E2723] font-bold py-4 rounded-lg hover:bg-[#FFCA28] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </ServiceLayout>
    );
}
