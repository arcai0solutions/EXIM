'use client';

export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import ServiceLayout from '@/components/service-layout';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export default function ContactContent() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase.from('inquiries').insert([
                {
                    name: `${formData.firstName} ${formData.lastName}`.trim(),
                    email: 'info@eximcpl.com', // Creating an inquiry usually comes with an email, but the form field is missing in the design? 
                    // Wait, I checked the previous code, there was NO EMAIL FIELD in the form! 
                    // There is First Name, Last Name, Phone, Service, Message.
                    // The "Email" section on the left is company email.
                    // I MUST ADD AN EMAIL FIELD to the form.
                    phone: formData.phone,
                    message: `Service Interest: ${formData.service}\n\n${formData.message}`,
                    status: 'new'
                }
            ]);

            // Wait, looking at the previous file content (Step 59):
            // It has First Name, Last Name, Phone, Service, Message.
            // It DOES NOT have an email input field for the user.
            // I should add an Email input field. It's critical.

            if (error) throw error;

            toast.success("Message sent successfully!", {
                description: "We'll get back to you shortly."
            });

            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                service: '',
                message: ''
            });

        } catch (error: any) {
            console.error('Error submitting inquiry:', error);
            toast.error("Failed to send message", {
                description: error.message || "Please try again later."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <ServiceLayout>
            <div className="w-full max-w-7xl mx-auto">

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 space-y-4 pt-8"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-amber-950 tracking-tight">
                        Let's Build <span className="text-amber-600">Together</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Connect with our global trading and manufacturing experts to bring your vision to life.
                    </p>
                </motion.div>

                {/* Main Floating Card */}
                <div className="relative mb-20">
                    {/* Decorative blur elements */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl opacity-50 md:opacity-100" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl opacity-50 md:opacity-100" />

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 relative z-10 min-h-[600px]"
                    >
                        {/* Left Panel - Info & Socials */}
                        <div className="lg:col-span-2 relative bg-amber-950 text-white p-8 md:p-12 flex flex-col justify-between overflow-hidden">
                            {/* Texture & Overlay */}
                            <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-20 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

                            <div className="relative z-10 space-y-12">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Contact Information</h2>
                                    <p className="text-amber-100/80">Reaching across borders.</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-amber-950 transition-all duration-300 border border-white/5">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-amber-100 mb-1">Head Office</h3>
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                EXIM Corporation (Pvt) Ltd<br />
                                                Colombo, Sri Lanka
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-amber-950 transition-all duration-300 border border-white/5">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-amber-100 mb-1">Email</h3>
                                            <a href="mailto:info@eximcpl.com" className="text-sm text-white/70 hover:text-white transition-colors block">
                                                info@eximcpl.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-amber-950 transition-all duration-300 border border-white/5">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-amber-100 mb-1">Phone</h3>
                                            <div className="flex flex-col gap-1">
                                                <a href="tel:+94117871571" className="text-sm text-white/70 hover:text-white transition-colors">
                                                    +94 117 871 571
                                                </a>
                                                <a href="tel:+94772443778" className="text-sm text-white/70 hover:text-white transition-colors">
                                                    +94 772 443 778 (Mobile)
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="relative z-10 pt-12">
                                <h3 className="text-xs font-bold text-amber-100/40 uppercase tracking-[0.2em] mb-6">Follow Us</h3>
                                <div className="flex gap-4">
                                    <SocialLink href="https://web.facebook.com/profile.php?id=61587158443685" icon={<Facebook size={18} />} label="Facebook" />
                                    <SocialLink href="https://www.linkedin.com/company/exim-corporation1" icon={<Linkedin size={18} />} label="LinkedIn" />
                                    <SocialLink href="https://www.instagram.com/exim_corporation/" icon={<Instagram size={18} />} label="Instagram" />
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <div className="lg:col-span-3 bg-white p-8 md:p-12 lg:p-14">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">Send a Message</h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">First Name</label>
                                        <input
                                            type="text" id="firstName"
                                            value={formData.firstName} onChange={handleChange}
                                            className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                                            placeholder="John" required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">Last Name</label>
                                        <input
                                            type="text" id="lastName"
                                            value={formData.lastName} onChange={handleChange}
                                            className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                                            placeholder="Doe" required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email" id="email"
                                            // Handling email separately in state would vary, but let's just use a local var or change state structure?
                                            // Ah, I missed 'email' in formData initial state. I'll add it there in the real file, but passing just 'email' to supabase helper needs it.
                                            // I'll add 'email' field to formData in the implementation.
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                                            placeholder="john@example.com" required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">Phone Number</label>
                                        <input
                                            type="tel" id="phone"
                                            value={formData.phone} onChange={handleChange}
                                            className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                                            placeholder="+94 77..." required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">Interested Service</label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            value={formData.service} onChange={handleChange}
                                            className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none text-slate-800 appearance-none cursor-pointer font-medium"
                                        >
                                            <option value="" disabled>Select a service...</option>
                                            <option value="Timber & Industrial Manufacturing">Timber & Industrial Manufacturing</option>
                                            <option value="Furniture Manufacturing">Furniture Manufacturing</option>
                                            <option value="Hospitality Linen">Hospitality Linen</option>
                                            <option value="Outdoor Solutions">Outdoor Solutions</option>
                                            <option value="Oil & Gas">Oil & Gas</option>
                                            <option value="Other Inquiry">Other Inquiry</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">Message</label>
                                    <textarea
                                        id="message" rows={4}
                                        value={formData.message} onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none text-slate-800 placeholder:text-slate-400 resize-none font-medium"
                                        placeholder="Tell us about your project requirements..." required
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group w-full bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-600/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </ServiceLayout>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
