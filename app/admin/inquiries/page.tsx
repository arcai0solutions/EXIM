"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowRight, RefreshCw, Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Inquiry = {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: string;
};

export default function InquiriesPage() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    const fetchInquiries = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("inquiries")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching inquiries:", error);
            toast({
                title: "Error",
                description: "Failed to load inquiries.",
                variant: "destructive",
            });
        } else {
            setInquiries(data || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const moveToCRM = async (inquiry: Inquiry) => {
        try {
            // 1. Create Lead in CRM
            const { error: leadError } = await supabase.from("leads").insert([
                {
                    title: `Inquiry from ${inquiry.name}`,
                    description: inquiry.message,
                    contact_name: inquiry.name,
                    contact_email: inquiry.email,
                    pipeline_stage: "New",
                    value: 0,
                },
            ]);

            if (leadError) throw leadError;

            // 2. Update Inquiry Status
            const { error: updateError } = await supabase
                .from("inquiries")
                .update({ status: "moved_to_crm" })
                .eq("id", inquiry.id);

            if (updateError) throw updateError;

            toast({
                title: "Success",
                description: "Inquiry moved to CRM successfully.",
            });

            fetchInquiries(); // Refresh list
        } catch (error: any) {
            console.error("Error moving to CRM:", error);
            toast({
                title: "Error",
                description: error.message || "Failed to move inquiry.",
                variant: "destructive",
            });
        }
    };

    if (loading) {
        return (
            <div className="flex h-96 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-amber-950">Website Inquiries</h1>
                    <p className="text-amber-800/60 mt-1">Manage incoming messages from the contact form.</p>
                </div>
                <Button onClick={fetchInquiries} variant="outline" className="border-amber-200 text-amber-900 hover:bg-amber-50 gap-2 shadow-sm bg-white">
                    <RefreshCw className="h-4 w-4" /> Refresh
                </Button>
            </div>

            <Card className="border-amber-100 shadow-md bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="border-b border-amber-50 bg-amber-50/30">
                    <CardTitle className="text-amber-900">Recent Inquiries</CardTitle>
                    <CardDescription>Latest submissions sorted by date</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    {inquiries.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground flex flex-col items-center gap-3">
                            <MessageSquare className="w-12 h-12 text-amber-200" />
                            <p>No inquiries found yet.</p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-amber-50/50 hover:bg-amber-50/60 border-amber-100">
                                    <TableHead className="text-amber-900 font-semibold">Date</TableHead>
                                    <TableHead className="text-amber-900 font-semibold">Name</TableHead>
                                    <TableHead className="text-amber-900 font-semibold">Contact</TableHead>
                                    <TableHead className="text-amber-900 font-semibold">Message</TableHead>
                                    <TableHead className="text-amber-900 font-semibold">Status</TableHead>
                                    <TableHead className="text-amber-900 font-semibold">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {inquiries.map((inquiry) => (
                                    <TableRow key={inquiry.id} className="hover:bg-amber-50/30 border-amber-50">
                                        <TableCell className="text-slate-600">
                                            {new Date(inquiry.created_at).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="font-medium text-slate-900">{inquiry.name}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col text-sm gap-1">
                                                {inquiry.email && (
                                                    <div className="flex items-center gap-1.5 text-slate-600">
                                                        <Mail className="w-3 h-3 text-amber-500" />
                                                        <span>{inquiry.email}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-1.5 text-slate-500">
                                                    <Phone className="w-3 h-3 text-amber-500" />
                                                    <span>{inquiry.phone}</span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="max-w-xs text-slate-600">
                                            <p className="line-clamp-2" title={inquiry.message}>
                                                {inquiry.message}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={inquiry.status === "new" ? "default" : "secondary"} className={inquiry.status === "new" ? "bg-amber-600 hover:bg-amber-700" : "bg-slate-100 text-slate-600"}>
                                                {inquiry.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {inquiry.status !== "moved_to_crm" && (
                                                <Button
                                                    size="sm"
                                                    variant="default"
                                                    className="gap-2 bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-200 shadow-sm"
                                                    onClick={() => moveToCRM(inquiry)}
                                                >
                                                    Move to CRM <ArrowRight className="h-3 w-3" />
                                                </Button>
                                            )}
                                            {inquiry.status === "moved_to_crm" && (
                                                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                                                    Completed
                                                </span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
