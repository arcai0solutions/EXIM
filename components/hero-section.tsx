'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
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
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 gap-8">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-wider animate-pulse">
            WELCOME
          </h1>
          <div className="w-64 h-1 bg-amber-200/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-700 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
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
          className={`absolute bottom-0 left-0 w-full md:w-3/4 p-8 md:p-16 flex flex-col items-start justify-end text-left transition-all duration-1000 delay-500 z-20 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Regional Trading & Manufacturing Solutions
          </h2>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Delivering timber, furniture, linen, hospitality supplies, outdoor architectural systems, and energy-linked trade with precision across Sri Lanka and the Indian Ocean region.
          </p>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`left-1/2 -translate-x-1/2 flex justify-between items-center transition-all duration-500 ease-out z-50 ${showContent ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
          } ${isScrolled
            ? 'fixed top-4 w-[calc(100%-4rem)] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl pl-4 pr-12 py-2'
            : 'absolute top-8 w-[calc(100%-8rem)] bg-transparent'
          }`}
      >
        {/* Logo Container */}
        <div
          className={`transition-all duration-500 ease-out ${!isScrolled
            ? 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-3 py-1.5'
            : ''
            }`}
        >
          <div className="relative h-10 md:h-14 w-auto">
            <Image
              src="/exim-logo.png"
              alt="Exim Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-full"
            />
          </div>
        </div>

        {/* Nav Container */}
        <div
          className={`transition-all duration-500 ease-out ${!isScrolled
            ? 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-8 py-2'
            : ''
            }`}
        >
          <nav className="hidden md:flex items-center gap-8 text-slate-800 text-sm font-medium tracking-wide">
            {['Home', 'About', 'Services'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors uppercase"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="relative overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900 text-white px-6 py-2.5 rounded-xl hover:from-amber-800 hover:to-amber-950 transition-all duration-300 uppercase shadow-md group"
            >
              {/* Wood Texture Effect Overlay */}
              <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
              <span className="relative z-10">Contact</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
