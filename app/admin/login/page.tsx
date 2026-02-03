"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lock, Loader2, Warehouse } from 'lucide-react';
import Image from "next/image";

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            router.push('/admin/inquiries');
            router.refresh();
        } catch (err: any) {
            setError(err.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
            {/* Wood Texture Background - Similar to CTA Section */}
            <div className="absolute inset-0 bg-amber-950" />
            <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-cover bg-center opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

            {/* Decorative Glow Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <Card className="w-full max-w-md relative z-10 border-amber-900/20 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto mb-4 bg-amber-100 p-3 rounded-2xl w-fit border border-amber-200 shadow-inner">
                        <Warehouse className="w-8 h-8 text-amber-800" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-amber-950">EXIM Admin Portal</CardTitle>
                    <CardDescription className="text-amber-800/60">
                        Secure access for management
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                        {error && (
                            <Alert variant="destructive">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-amber-900">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@eximcpl.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border-amber-200 focus:ring-amber-500/20 focus:border-amber-500 bg-amber-50/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-amber-900">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border-amber-200 focus:ring-amber-500/20 focus:border-amber-500 bg-amber-50/50"
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white shadow-lg hover:shadow-amber-900/20 transition-all font-semibold" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                'Access Dashboard'
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>

            <div className="absolute bottom-8 text-center text-amber-100/60 text-xs z-10">
                &copy; {new Date().getFullYear()} EXIM Corporation. Restricted Access.
            </div>
        </div>
    );
}
