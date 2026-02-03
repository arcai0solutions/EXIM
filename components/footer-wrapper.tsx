"use client";

import { usePathname } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';

export function FooterWrapper() {
    const pathname = usePathname();

    // Don't show footer on admin routes
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return <SiteFooter />;
}
