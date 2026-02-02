'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const services = [
    {
        title: 'Timber & Industrial Manufacturing',
        href: '/services/timber-industrial-manufacturing',
        description: 'Sustainable sourcing, engineered processing, and export-ready production.',
    },
    {
        title: 'Furniture Manufacturing & Supply',
        href: '/services/furniture-manufacturing-supply',
        description: 'End-to-end furniture solutions for hospitality, commercial, and residential projects.',
    },
    {
        title: 'Hospitality Linen & Resort Supplies',
        href: '/services/hospitality-linen-resort-supplies',
        description: 'Hospitality-grade bed and bath linen and related soft goods.',
    },
    {
        title: 'Outdoor & Architectural Solutions',
        href: '/services/outdoor-architectural-solutions',
        description: 'Architectural-grade outdoor systems for tropical climates and high-traffic environments.',
    },
    {
        title: 'Oil & Gas',
        href: '/services/oil-gas',
        description: 'Trading and supply activities supporting industrial and commercial energy requirements.',
    },
];

interface NavbarProps {
    isScrolled?: boolean;
    showContent?: boolean;
}

export function Navbar({ isScrolled = true, showContent = true }: NavbarProps) {
    return (
        <div
            className={cn(
                'transition-all duration-500 ease-out z-50 flex justify-between items-center',
                showContent ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0',
                isScrolled
                    ? 'fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl pl-4 pr-12 py-2'
                    : 'absolute top-8 left-1/2 -translate-x-1/2 w-[calc(100%-8rem)] bg-transparent'
            )}
        >
            {/* Logo Container */}
            <div
                className={cn(
                    'transition-all duration-500 ease-out',
                    !isScrolled ? 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-3 py-1.5' : ''
                )}
            >
                <Link href="/" className="relative h-10 md:h-14 w-auto block">
                    <Image
                        src="/exim-logo.png"
                        alt="Exim Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-full"
                    />
                </Link>
            </div>

            {/* Nav Container */}
            <div
                className={cn(
                    'transition-all duration-500 ease-out',
                    !isScrolled ? 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-8 py-2' : ''
                )}
            >
                <div className="hidden md:flex items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/#home" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-100/50 uppercase tracking-wide text-xs font-bold text-slate-800")}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-100/50 uppercase tracking-wide text-xs font-bold text-slate-800")}>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-slate-100/50 uppercase tracking-wide text-xs font-bold text-slate-800">
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                                        {services.map((service) => (
                                            <ListItem
                                                key={service.title}
                                                title={service.title}
                                                href={service.href}
                                            >
                                                {service.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link
                        href="/#contact"
                        className="relative overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900 text-white px-6 py-2.5 rounded-xl hover:from-amber-800 hover:to-amber-950 transition-all duration-300 uppercase shadow-md group ml-4 text-xs font-bold tracking-wide"
                    >
                        {/* Wood Texture Effect Overlay */}
                        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                        <span className="relative z-10">Contact</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-900 focus:bg-amber-50 focus:text-amber-900',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none mb-2 text-slate-900">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
