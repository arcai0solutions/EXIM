"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="relative mx-auto mb-6 w-[98%] max-w-[1920px] px-2 md:px-4">
            <div
                className="relative overflow-hidden rounded-[24px] bg-cover bg-center bg-no-repeat p-8 md:p-12"
                style={{}}
            >
                {/* Wood Texture Background - Matched to Why EXIM Section */}
                <div className="absolute inset-0 bg-amber-950" />
                <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

                {/* Additional dark overlay for footer readability if needed, keeping consistent with request but letting the wood shine through more like the other section */}
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 grid gap-12 lg:grid-cols-4">
                    {/* Logo & Description - Spans 1 column on large screens */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative flex h-20 w-40 items-center justify-center overflow-hidden rounded-[1rem] bg-white p-4 shadow-lg">
                                <Image
                                    src="/exim-logo.png"
                                    alt="EXIM Logo"
                                    width={140}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="max-w-md text-sm leading-relaxed text-white/90">
                            EXIM Corporation (Pvt) Ltd is a diversified Sri Lankan-origin enterprise with deep-rooted expertise across industrial manufacturing, global sourcing, and strategic supply solutions.
                        </p>

                        <div className="flex flex-col gap-2 text-sm text-white/80">
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <a href="mailto:info@eximcpl.com" className="hover:text-white hover:underline">info@eximcpl.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                <a href="tel:+94117871571" className="hover:text-white hover:underline">+94 117 871 571</a>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns - Spans 2 columns on large screens */}
                    <div className="col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-2">
                        {/* Pages Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold text-white">Pages</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/" className="text-sm font-medium text-white/90 hover:text-white hover:underline">Home</Link>
                                <Link href="/about" className="text-sm font-medium text-white/90 hover:text-white hover:underline">About</Link>
                                <Link href="/#services" className="text-sm font-medium text-white/90 hover:text-white hover:underline">Services</Link>
                                <Link href="/contact" className="text-sm font-medium text-white/90 hover:text-white hover:underline">Contact</Link>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold text-white">Services</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/services/timber-industrial-manufacturing" className="text-sm font-medium text-white/90 hover:text-white hover:underline">Timber & Manufacturing</Link>
                                <Link href="/services/furniture-manufacturing-supply" className="text-sm font-medium text-white/90 hover:text-white hover:underline">Furniture Supply</Link>
                                <Link href="/services/hospitality-linen-resort-supplies" className="text-sm font-medium text-white/90 hover:text-white hover:underline">Hospitality Linen</Link>
                                <Link href="/services/outdoor-architectural-solutions" className="text-sm font-medium text-white/90 hover:text-white hover:underline">Outdoor Solutions</Link>
                                <Link href="/services/oil-gas" className="text-sm font-medium text-white/90 hover:text-white hover:underline">Oil & Gas</Link>
                            </div>
                        </div>
                    </div>
                    {/* Subscribe & Socials - Spans 1 column on large screens */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold text-white">Socials</h3>
                            <div className="flex gap-4">
                                <Link href="https://web.facebook.com/profile.php?id=61587158443685" target="_blank" className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#3E2723] hover:bg-[#FFB300] hover:text-[#3E2723] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md group">
                                    <Facebook className="w-6 h-6" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/exim-corporation1" target="_blank" className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#3E2723] hover:bg-[#FFB300] hover:text-[#3E2723] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md group">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                                <Link href="https://www.instagram.com/exim_corporation/" target="_blank" className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#3E2723] hover:bg-[#FFB300] hover:text-[#3E2723] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md group">
                                    <Instagram className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row">
                    <p>© {new Date().getFullYear()} EXIM Corporation. All rights Reserved</p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span>Made by</span>
                            <a href="https://www.arcai.agency" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/arc logo.png"
                                    alt="ARC AI Logo"
                                    className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
