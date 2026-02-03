"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2, Plus, Users } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export function AddLeadDialog({ onLeadAdded }: { onLeadAdded: () => void }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [stage, setStage] = useState("New");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabase.from("leads").insert([
                {
                    title,
                    description,
                    contact_name: contactName,
                    contact_email: contactEmail,
                    pipeline_stage: stage,
                },
            ]).select();

            if (error) {
                console.error("Supabase error:", error);
                toast.error("Failed to add lead", {
                    description: error.message
                });
                throw error;
            }

            toast.success("Lead added successfully!");
            onLeadAdded();
            setOpen(false);
            resetForm();
        } catch (error: any) {
            console.error("Error adding lead:", error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setContactName("");
        setContactEmail("");
        setStage("New");
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2 bg-amber-600 hover:bg-amber-700 text-white border-none shadow-md">
                    <Plus className="h-4 w-4" /> Add Lead
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] border-amber-100 bg-white">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle className="text-amber-950 text-xl">Add New Lead</DialogTitle>
                        <DialogDescription className="text-slate-500">
                            Create a new lead to track in your pipeline.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-5 py-5">
                        <div className="grid gap-2">
                            <Label htmlFor="title" className="text-amber-900 font-semibold">Lead Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Timber Order for Resorts"
                                required
                                className="border-amber-200 focus:ring-amber-500/20 focus:border-amber-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="contactName" className="text-amber-900 font-semibold">Contact Name</Label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-2.5 h-4 w-4 text-amber-400" />
                                    <Input
                                        id="contactName"
                                        value={contactName}
                                        onChange={(e) => setContactName(e.target.value)}
                                        placeholder="John Doe"
                                        required
                                        className="pl-9 border-amber-200 focus:ring-amber-500/20 focus:border-amber-500"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contactEmail" className="text-amber-900 font-semibold">Contact Email</Label>
                                <Input
                                    id="contactEmail"
                                    type="email"
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    className="border-amber-200 focus:ring-amber-500/20 focus:border-amber-500"
                                />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="stage" className="text-amber-900 font-semibold">Initial Stage</Label>
                            <Select value={stage} onValueChange={setStage}>
                                <SelectTrigger className="border-amber-200 focus:ring-amber-500/20 focus:border-amber-500">
                                    <SelectValue placeholder="Select stage" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="New">New</SelectItem>
                                    <SelectItem value="Qualified">Qualified</SelectItem>
                                    <SelectItem value="Proposal">Proposal</SelectItem>
                                    <SelectItem value="Won">Won</SelectItem>
                                    <SelectItem value="Lost">Lost</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description" className="text-amber-900 font-semibold">Notes / Description</Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Additional details..."
                                className="min-h-[100px] border-amber-200 focus:ring-amber-500/20 focus:border-amber-500 resize-none"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={loading} className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto">
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Save Lead
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
