'use client';

import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import './staggered-menu.css';

// [NEW INTERFACE PROPERTY]
export interface StaggeredMenuItem {
    label: string;
    ariaLabel: string;
    link: string;
    children?: StaggeredMenuItem[]; // Support nested items
}
export interface StaggeredMenuSocialItem {
    label: string;
    link: string;
}
export interface StaggeredMenuProps {
    position?: 'left' | 'right';
    colors?: string[];
    items?: StaggeredMenuItem[];
    socialItems?: StaggeredMenuSocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    logoUrl?: string;
    menuButtonColor?: string;
    openMenuButtonColor?: string;
    accentColor?: string;
    isFixed?: boolean;
    changeMenuColorOnOpen?: boolean;
    closeOnClickAway?: boolean;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
    forceScrolled?: boolean;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
    position = 'right',
    colors = ['#4A3728', '#6D4C41', '#8D6E63', '#BCAAA4'], // Wood Theme Colors
    items = [],
    socialItems = [],
    displaySocials = true,
    displayItemNumbering = true,
    className,
    logoUrl = '/exim-logo.png',
    menuButtonColor = '#000000', // Default to black for visibility on white
    openMenuButtonColor = '#3E2723',
    changeMenuColorOnOpen = true,
    accentColor = '#FFB300', // Amber Accent
    isFixed = true,
    closeOnClickAway = true,
    onMenuOpen,
    onMenuClose,
    forceScrolled
}: StaggeredMenuProps) => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20 || !!forceScrolled);
        };
        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [forceScrolled]);
    // ... (rest of the state hooks are fine, skipping to render for brevity in replacement if possible, but replace_file_content needs contiguous block)
    // Actually I can just update the defaults in one replacement, and the JSX in another if needed, to avoid replacing 400 lines.
    // But let's look at the target content. I need to target the component definition start.

    // Let's do the component definition start to update defaults first.

    const openRef = useRef(false);

    // Track expanded submenus by index
    const [expandedItems, setExpandedItems] = useState<number[]>([]);

    const toggleSubMenu = (index: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedItems(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const panelRef = useRef<HTMLDivElement | null>(null);
    const preLayersRef = useRef<HTMLDivElement | null>(null);
    const preLayerElsRef = useRef<HTMLElement[]>([]);

    const plusHRef = useRef<HTMLSpanElement | null>(null);
    const plusVRef = useRef<HTMLSpanElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    const textInnerRef = useRef<HTMLSpanElement | null>(null);
    const textWrapRef = useRef<HTMLSpanElement | null>(null);
    const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);

    const openTlRef = useRef<gsap.core.Timeline | null>(null);
    const closeTweenRef = useRef<gsap.core.Tween | null>(null);
    const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
    const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
    const colorTweenRef = useRef<gsap.core.Tween | null>(null);

    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
    const busyRef = useRef(false);

    const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

    // Separate effect for color updates to avoid resetting layout state
    useLayoutEffect(() => {
        if (toggleBtnRef.current) {
            const targetColor = open ? openMenuButtonColor : menuButtonColor;
            gsap.to(toggleBtnRef.current, { color: targetColor, duration: 0.3 });
        }
    }, [menuButtonColor, openMenuButtonColor, open]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;

            const plusH = plusHRef.current;
            const plusV = plusVRef.current;
            const icon = iconRef.current;
            const textInner = textInnerRef.current;

            if (!panel || !plusH || !plusV || !icon || !textInner) return;

            let preLayers: HTMLElement[] = [];
            if (preContainer) {
                preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
            }
            preLayerElsRef.current = preLayers;

            // Only set initial closed state if NOT open. 
            // If open (e.g. during a re-render from prop change), we preserve state or rely on GSAP timeline.
            // But since this effect runs on 'position' change, we might want to reset. 
            // For now, assuming position doesn't change dynamically often.
            if (!openRef.current) {
                const offscreen = position === 'left' ? -100 : 100;
                gsap.set([panel, ...preLayers], { xPercent: offscreen });
                gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
                gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
                gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
                gsap.set(textInner, { yPercent: 0 });
            }
        });
        return () => ctx.revert();
    }, [position]); // Removed menuButtonColor from dependencies to prevent reset on scroll

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }
        itemEntranceTweenRef.current?.kill();

        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
        const numberEls = Array.from(
            panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        ) as HTMLElement[];
        const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

        const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
        const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        layerStates.forEach((ls, i) => {
            tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
        });

        const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;

        tl.fromTo(
            panel,
            { xPercent: panelStart },
            { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
            panelInsertTime
        );

        if (itemEls.length) {
            const itemsStartRatio = 0.15;
            const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

            tl.to(
                itemEls,
                { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } },
                itemsStart
            );

            if (numberEls.length) {
                tl.to(
                    numberEls,
                    { duration: 0.6, ease: 'power2.out', ['--sm-num-opacity' as any]: 1, stagger: { each: 0.08, from: 'start' } },
                    itemsStart + 0.1
                );
            }
        }

        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;

            if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: 'power3.out',
                        stagger: { each: 0.08, from: 'start' },
                        onComplete: () => {
                            gsap.set(socialLinks, { clearProps: 'opacity' });
                        }
                    },
                    socialsStart + 0.04
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, [position]);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback('onComplete', () => {
                busyRef.current = false;
            });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;
        itemEntranceTweenRef.current?.kill();

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;

        const all: HTMLElement[] = [...layers, panel];
        closeTweenRef.current?.kill();

        const offscreen = position === 'left' ? -100 : 100;

        closeTweenRef.current = gsap.to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: 'power3.in',
            overwrite: 'auto',
            onComplete: () => {
                const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
                if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

                const numberEls = Array.from(
                    panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
                ) as HTMLElement[];
                if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });

                const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
                const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
                if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
                if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

                busyRef.current = false;
                setExpandedItems([]); // Collapse all on close
            }
        });
    }, [position]);

    const animateIcon = useCallback((opening: boolean) => {
        const icon = iconRef.current;
        const h = plusHRef.current;
        const v = plusVRef.current;
        if (!icon || !h || !v) return;

        spinTweenRef.current?.kill();

        if (opening) {
            // ensure container never rotates
            gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
            spinTweenRef.current = gsap
                .timeline({ defaults: { ease: 'power4.out' } })
                .to(h, { rotate: 45, duration: 0.5 }, 0)
                .to(v, { rotate: -45, duration: 0.5 }, 0);
        } else {
            spinTweenRef.current = gsap
                .timeline({ defaults: { ease: 'power3.inOut' } })
                .to(h, { rotate: 0, duration: 0.35 }, 0)
                .to(v, { rotate: 90, duration: 0.35 }, 0)
                .to(icon, { rotate: 0, duration: 0.001 }, 0);
        }
    }, []);

    const animateColor = useCallback(
        (opening: boolean) => {
            const btn = toggleBtnRef.current;
            if (!btn) return;
            colorTweenRef.current?.kill();
            if (changeMenuColorOnOpen) {
                const targetColor = opening ? openMenuButtonColor : menuButtonColor;
                colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
            } else {
                gsap.set(btn, { color: menuButtonColor });
            }
        },
        [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
    );

    // Removed the Effect that was resetting colors, handled in separate effect now or on open/close
    // But importantly, we extracted color logic from the main layout effect.
    // However, we still need to react to prop changes if the menu IS NOT open?
    // Actually the separate effect handles it.

    const animateText = useCallback((opening: boolean) => {
        const inner = textInnerRef.current;
        if (!inner) return;

        textCycleAnimRef.current?.kill();

        const currentLabel = opening ? 'Menu' : 'Close';
        const targetLabel = opening ? 'Close' : 'Menu';
        const cycles = 3;

        const seq: string[] = [currentLabel];
        let last = currentLabel;
        for (let i = 0; i < cycles; i++) {
            last = last === 'Menu' ? 'Close' : 'Menu';
            seq.push(last);
        }
        if (last !== targetLabel) seq.push(targetLabel);
        seq.push(targetLabel);

        setTextLines(seq);
        gsap.set(inner, { yPercent: 0 });

        const lineCount = seq.length;
        const finalShift = ((lineCount - 1) / lineCount) * 100;

        textCycleAnimRef.current = gsap.to(inner, {
            yPercent: -finalShift,
            duration: 0.5 + lineCount * 0.07,
            ease: 'power4.out'
        });
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);

        if (target) {
            onMenuOpen?.();
            playOpen();
        } else {
            onMenuClose?.();
            playClose();
        }

        animateIcon(target);
        animateColor(target);
        animateText(target);
    }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

    const closeMenu = useCallback(() => {
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);
            onMenuClose?.();
            playClose();
            animateIcon(false);
            animateColor(false);
            animateText(false);
        }
    }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

    React.useEffect(() => {
        if (!closeOnClickAway || !open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target as Node) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeOnClickAway, open, closeMenu]);

    return (
        <div
            className={`sm-scope z-[9999] pointer-events-none ${isFixed ? 'fixed top-0 left-0 w-screen h-screen overflow-hidden' : 'absolute w-full h-full'}`}
        >
            <div
                className={
                    (className ? className + ' ' : '') + 'staggered-menu-wrapper pointer-events-none relative w-full h-full z-40'
                }
                style={accentColor ? ({ ['--sm-accent' as any]: accentColor } as React.CSSProperties) : undefined}
                data-position={position}
                data-open={open || undefined}
            >
                <div
                    ref={preLayersRef}
                    className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
                    aria-hidden="true"
                >
                    {(() => {
                        const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
                        let arr = [...raw];
                        if (arr.length >= 3) {
                            const mid = Math.floor(arr.length / 2);
                            arr.splice(mid, 1);
                        }
                        return arr.map((c, i) => (
                            <div
                                key={i}
                                className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                                style={{ background: c }}
                            />
                        ));
                    })()}
                </div>

                <header
                    className={`staggered-menu-header absolute left-0 right-0 w-full flex justify-center pointer-events-none z-20 transition-all duration-500 ease-in-out ${isScrolled ? 'top-6 px-4' : 'top-0 p-4'}`}
                    aria-label="Main navigation header"
                >
                    <div className={`flex items-center justify-between w-full pointer-events-none mx-auto transition-all duration-500 ${isScrolled ? `rounded-2xl py-3 px-8 pointer-events-auto bg-white/95 backdrop-blur-md ${open ? '' : 'shadow-lg'}` : 'px-8 py-6 bg-transparent pointer-events-none'}`}>
                        <div className={`sm-logo flex items-center select-none pointer-events-auto transition-all duration-500 ${isScrolled ? 'bg-transparent pl-2' : 'bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-1 py-1'}`} aria-label="Logo">
                            <Link href="/" className="block">
                                <img
                                    src={logoUrl}
                                    alt="Logo"
                                    className="sm-logo-img block h-12 md:h-16 w-auto object-contain"
                                    draggable={false}
                                    width={200}
                                    height={80}
                                />
                            </Link>
                        </div>

                        <div
                            className={`rounded-full px-5 py-2 pointer-events-auto flex items-center transition-all duration-500 ${open ? 'bg-[#3E2723] shadow-lg' : (isScrolled ? 'bg-transparent' : 'bg-white/95 shadow-lg backdrop-blur-sm rounded-xl px-6 py-3')}`}
                        >
                            <button
                                ref={toggleBtnRef}
                                className={`sm-toggle relative inline-flex items-center gap-[0.3rem] bg-transparent border-0 cursor-pointer font-bold uppercase tracking-wider leading-none overflow-visible`}
                                style={{ color: open ? '#FFFFFF' : '#000000' }}
                                aria-label={open ? 'Close menu' : 'Open menu'}
                                aria-expanded={open}
                                aria-controls="staggered-menu-panel"
                                onClick={toggleMenu}
                                type="button"
                            >
                                <span
                                    ref={textWrapRef}
                                    className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)]"
                                    aria-hidden="true"
                                >
                                    <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
                                        {textLines.map((l, i) => (
                                            <span className="sm-toggle-line block h-[1em] leading-none font-bold text-xl" key={i}>
                                                {l}
                                            </span>
                                        ))}
                                    </span>
                                </span>

                                <span
                                    ref={iconRef}
                                    className="sm-icon relative w-[18px] h-[18px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
                                    aria-hidden="true"
                                >
                                    <span
                                        ref={plusHRef}
                                        className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2.5px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                                    />
                                    <span
                                        ref={plusVRef}
                                        className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2.5px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                <aside
                    id="staggered-menu-panel"
                    ref={panelRef}
                    className="staggered-menu-panel absolute top-0 right-0 h-full bg-[#FAFAFA] flex flex-col pt-32 md:pt-40 px-8 pb-8 overflow-y-auto z-10 backdrop-blur-[12px] pointer-events-auto"
                    style={{ WebkitBackdropFilter: 'blur(12px)' }}
                    aria-hidden={!open}
                >
                    <div className="sm-panel-inner flex-1 flex flex-col gap-5">
                        <ul
                            className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
                            role="list"
                            data-numbering={displayItemNumbering || undefined}
                        >
                            {items && items.length ? (
                                items.map((it, idx) => (
                                    <li className="sm-panel-itemWrap relative overflow-hidden leading-none flex flex-col" key={it.label + idx}>
                                        <div className="flex items-center justify-start gap-0">
                                            <Link
                                                className="sm-panel-item relative text-amber-950 font-bold text-[3rem] md:text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-0 hover:text-[#FFB300]"
                                                href={it.link}
                                                aria-label={it.ariaLabel}
                                                data-index={idx + 1}
                                                onClick={(e) => {
                                                    if (it.children) {
                                                        toggleSubMenu(idx, e);
                                                    } else {
                                                        toggleMenu();
                                                    }
                                                }}
                                            >
                                                <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                                                    {it.label}
                                                </span>
                                            </Link>
                                            {it.children && (
                                                <button
                                                    onClick={(e) => toggleSubMenu(idx, e)}
                                                    className="sm-submenu-toggle p-0 ml-[-25px] mt-6 text-amber-950 hover:text-[#FFB300] transition-colors"
                                                    aria-label={expandedItems.includes(idx) ? "Collapse submenu" : "Expand submenu"}
                                                >
                                                    <span className={`block w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 ${expandedItems.includes(idx) ? 'rotate-180' : ''}`}>
                                                        ▼
                                                    </span>
                                                </button>
                                            )}
                                        </div>

                                        {/* Nested Dropdown/Accordion */}
                                        {it.children && (
                                            <div
                                                className={`sm-submenu overflow-hidden transition-all duration-300 ease-in-out ${expandedItems.includes(idx) ? 'max-h-[500px] opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'}`}
                                            >
                                                <ul className="pl-8 flex flex-col gap-3">
                                                    {it.children.map((subItem, subIdx) => (
                                                        <li key={subItem.label + subIdx}>
                                                            <Link
                                                                href={subItem.link}
                                                                onClick={toggleMenu}
                                                                className="text-xl font-medium text-amber-900/80 hover:text-[#FFB300] transition-colors block"
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))
                            ) : (
                                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                                    <span className="sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                                        <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                                            No items
                                        </span>
                                    </span>
                                </li>
                            )}
                        </ul>

                        {displaySocials && socialItems && socialItems.length > 0 && (
                            <div className="sm-socials mt-auto pt-8 flex flex-col gap-4" aria-label="Social links">
                                <h3 className="sm-socials-title m-0 text-base font-medium [color:var(--sm-accent,#ff0000)]">Socials</h3>
                                <ul
                                    className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap"
                                    role="list"
                                >
                                    {socialItems.map((s, i) => {
                                        // Determine icon based on label
                                        const labelLower = s.label.toLowerCase();
                                        let icon = null;
                                        if (labelLower.includes('facebook')) {
                                            icon = (
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                                </svg>
                                            );
                                        } else if (labelLower.includes('linkedin')) {
                                            icon = (
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                                    <circle cx="4" cy="4" r="2" />
                                                </svg>
                                            );
                                        } else if (labelLower.includes('instagram')) {
                                            icon = (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                                                </svg>
                                            );
                                        } else if (labelLower.includes('twitter')) {
                                            // Fallback or generic support, though not requested
                                            icon = (
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                                </svg>
                                            );
                                        }

                                        return (
                                            <li key={s.label + i} className="sm-socials-item">
                                                <a
                                                    href={s.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#3E2723] hover:bg-[#FFB300] hover:text-[#3E2723] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md group"
                                                    aria-label={s.label}
                                                >
                                                    {icon || s.label}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </aside>
            </div>

        </div>
    );
};


export default StaggeredMenu;
