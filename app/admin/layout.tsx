"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard, LogOut, FileText, Warehouse, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session && pathname !== '/admin/login') {
                router.push('/admin/login');
            } else if (session && pathname === '/admin/login') {
                router.push('/admin/inquiries');
            }

            setLoading(false);
        };

        checkUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session && pathname !== '/admin/login') {
                router.push('/admin/login')
            }
        });

        return () => subscription.unsubscribe();
    }, [router, pathname]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-amber-50">
                <Loader2 className="h-8 w-8 animate-spin text-amber-700" />
            </div>
        )
    }

    const navItems = [
        { name: 'Website Inquiries', href: '/admin/inquiries', icon: FileText },
        { name: 'CRM System', href: '/admin/crm', icon: LayoutDashboard },
    ];

    return (
        <div className="flex min-h-screen bg-amber-50/50">
            {/* Sidebar with Wood Theme */}
            <aside className="fixed inset-y-0 left-0 z-50 w-64 shadow-xl hidden md:block overflow-hidden">
                <div className="absolute inset-0 bg-amber-950" />
                <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />

                <div className="relative z-10 flex h-full flex-col">
                    <div className="flex h-20 items-center justify-center border-b border-white/10 px-6 backdrop-blur-sm bg-black/10">
                        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
                            <Warehouse className="w-6 h-6 text-amber-400" />
                            <span>EXIM Admin</span>
                        </div>
                    </div>

                    <nav className="flex-1 space-y-1 px-4 py-6">
                        <p className="px-2 pb-2 text-xs font-semibold text-amber-400/60 uppercase tracking-wider">Menu</p>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                                        isActive
                                            ? "text-white shadow-lg"
                                            : "text-amber-100/70 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-90" />
                                    )}
                                    <div className="relative z-10 flex items-center gap-3">
                                        <Icon className={cn("h-4 w-4", isActive ? "text-amber-200" : "text-amber-400/70 group-hover:text-amber-400")} />
                                        {item.name}
                                    </div>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
                        <div className="mb-4 px-2">
                            <p className="text-xs text-amber-200/40">Logged in as Admin</p>
                        </div>
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 text-amber-200/80 hover:bg-red-500/20 hover:text-red-200 transition-colors rounded-xl"
                            onClick={handleLogout}
                        >
                            <LogOut className="h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-6 md:p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto space-y-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
