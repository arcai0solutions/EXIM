'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import StaggeredMenu from '@/components/staggered-menu';

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const text = 'Welcome to EXIM';
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 15; // update every 15ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  /* Scroll Listener */
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setShowContent(true);
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100 p-2">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 gap-6">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-wider min-h-[1.5em] flex items-center justify-center">
              {displayText}
              <span className="animate-pulse text-amber-600 ml-1">|</span>
            </h1>
            <p className="text-sm md:text-lg text-amber-800/60 font-medium tracking-[0.2em] animate-in fade-in duration-1000 slide-in-from-bottom-2 uppercase">
              Terra | Ignis | Ventus | Aqua
            </p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />

      <div className="relative z-10 w-full h-full bg-black rounded-[1.5rem] overflow-hidden shadow-2xl border border-slate-200/50 group">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src="/Generated File January 31, 2026 - 1_39PM.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        />



        {/* Hero Content */}
        <div
          className={`absolute bottom-12 left-0 w-full md:w-3/4 p-8 md:p-16 flex flex-col items-start justify-end text-left transition-all duration-1000 delay-500 z-20 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Regional Trading & Manufacturing Solutions
          </h2>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed text-justify">
            Delivering timber, furniture, linen, hospitality supplies, outdoor architectural systems, and energy-linked trade with precision across Sri Lanka and the Indian Ocean region.
          </p>
        </div>
      </div>

      {/* Navbar */}
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <StaggeredMenu
          position="right"
          items={[
            { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
            { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
            {
              label: 'Services',
              ariaLabel: 'View our services',
              link: '/#services',
              children: [
                { label: 'Timber & Manufacturing', ariaLabel: 'Timber services', link: '/services/timber-industrial-manufacturing' },
                { label: 'Furniture Supply', ariaLabel: 'Furniture services', link: '/services/furniture-manufacturing-supply' },
                { label: 'Hospitality Linen', ariaLabel: 'Linen services', link: '/services/hospitality-linen-resort-supplies' },
                { label: 'Outdoor Solutions', ariaLabel: 'Outdoor services', link: '/services/outdoor-architectural-solutions' },
                { label: 'Oil & Gas', ariaLabel: 'Oil and gas services', link: '/services/oil-gas' },
              ]
            },
            { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
          ]}
          socialItems={[
            { label: 'Facebook', link: '#' },
            { label: 'LinkedIn', link: '#' },
            { label: 'Instagram', link: '#' }
          ]}
          displaySocials
          displayItemNumbering={false}
          menuButtonColor="#000000"
          openMenuButtonColor="#FFFFFF"
          changeMenuColorOnOpen={true}
          logoUrl="/exim-logo.png"
        />
      </div>

    </section>
  );
}
