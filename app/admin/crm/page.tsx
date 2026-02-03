"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { KanbanBoard, Lead } from "@/components/crm/kanban-board";
import { AddLeadDialog } from "@/components/crm/add-lead-dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function CRMPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    const fetchLeads = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("leads")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching leads:", error);
            toast({
                title: "Error",
                description: "Failed to load leads.",
                variant: "destructive",
            });
        } else {
            setLeads(data || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const handleLeadMove = async (leadId: string, newStage: string) => {
        // Optimistic update
        const oldLeads = [...leads];
        setLeads((prev) =>
            prev.map((l) => (l.id === leadId ? { ...l, pipeline_stage: newStage } : l))
        );

        try {
            const { error } = await supabase
                .from("leads")
                .update({ pipeline_stage: newStage })
                .eq("id", leadId);

            if (error) {
                throw error;
            }
        } catch (error) {
            console.error("Error updating lead stage:", error);
            // Revert optimistic update
            setLeads(oldLeads);
            toast({
                title: "Error",
                description: "Failed to move lead.",
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
        <div className="flex flex-col h-[calc(100vh-8rem)] space-y-6">
            <div className="flex items-center justify-between px-2">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-amber-950">CRM Pipeline</h1>
                    <p className="text-amber-800/60 mt-1">Track and manage business opportunities.</p>
                </div>
                <AddLeadDialog onLeadAdded={fetchLeads} />
            </div>

            <div className="flex-1 overflow-hidden">
                <KanbanBoard leads={leads} onLeadMove={handleLeadMove} />
            </div>
        </div>
    );
}
