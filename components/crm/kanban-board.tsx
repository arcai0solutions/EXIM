"use client";

import { useMemo, useState } from "react";
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent,
    useDroppable,
} from "@dnd-kit/core";
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar } from "lucide-react";

export type Lead = {
    id: string;
    title: string;
    description: string;
    value: number;
    pipeline_stage: string;
    contact_name: string;
    contact_email: string;
    created_at?: string;
};

type KanbanBoardProps = {
    leads: Lead[];
    onLeadMove: (leadId: string, newStage: string) => void;
};

const STAGES = ["New", "Qualified", "Proposal", "Won", "Lost"];

export function KanbanBoard({ leads, onLeadMove }: KanbanBoardProps) {
    const [activeId, setActiveId] = useState<string | null>(null);

    // Group leads by stage
    const columns = useMemo(() => {
        const cols: Record<string, Lead[]> = {};
        STAGES.forEach((stage) => {
            cols[stage] = leads.filter((lead) => lead.pipeline_stage === stage);
        });
        return cols;
    }, [leads]);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5 // Require slight movement to start drag
            }
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragOver = (event: DragOverEvent) => {
        // We can implement visual updates here for smoothness if needed,
        // but for functional "move to stage", dragEnd is sufficient.
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over) return;

        const activeId = active.id as string;
        const overId = over.id as string;

        // Find the lead being dragged
        const lead = leads.find((l) => l.id === activeId);
        if (!lead) return;

        let newStage = "";

        // Case 1: Dropped strictly over a column (KanbanColumn)
        if (STAGES.includes(overId)) {
            newStage = overId;
        }
        // Case 2: Dropped over another card (SortableItem)
        else {
            const overLead = leads.find(l => l.id === overId);
            if (overLead) {
                newStage = overLead.pipeline_stage;
            }
        }

        if (newStage && newStage !== lead.pipeline_stage) {
            onLeadMove(activeId, newStage);
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <div className="flex h-full gap-6 overflow-x-auto pb-6">
                {STAGES.map((stage) => (
                    <KanbanColumn
                        key={stage}
                        id={stage}
                        title={stage}
                        leads={columns[stage]}
                    />
                ))}
            </div>

            <DragOverlay>
                {activeId ? (
                    <LeadCard lead={leads.find((l) => l.id === activeId)!} isOverlay />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}

function KanbanColumn({ id, title, leads }: { id: string, title: string, leads: Lead[] }) {
    // Make the column itself droppable
    const { setNodeRef } = useDroppable({
        id: id,
    });

    return (
        <div
            ref={setNodeRef}
            className="flex h-full w-80 min-w-[20rem] flex-col rounded-xl bg-amber-100/40 border border-amber-200/60 shadow-inner"
        >
            <div className="mb-4 flex items-center justify-between p-4 pb-2">
                <h3 className="font-bold text-amber-900/80 uppercase tracking-wider text-sm">{title}</h3>
                <Badge variant="secondary" className="rounded-full bg-white text-amber-900 border border-amber-100 shadow-sm">
                    {leads.length}
                </Badge>
            </div>

            <SortableContext
                id={id}
                items={leads.map((l) => l.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="flex-1 space-y-3 overflow-y-auto px-3 pb-3">
                    {leads.map((lead) => (
                        <SortableItem key={lead.id} lead={lead} />
                    ))}
                    {/* Add a spacer at the bottom to ensure empty space is droppable if needed, mostly handled by container ref */}
                    <div className="h-4" />
                </div>
            </SortableContext>
        </div>
    );
}

function SortableItem({ lead }: { lead: Lead }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: lead.id, data: { type: 'Lead', lead } });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="opacity-50 grayscale"
            >
                <LeadCard lead={lead} />
            </div>
        )
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <LeadCard lead={lead} />
        </div>
    );
}

function LeadCard({ lead, isOverlay }: { lead: Lead; isOverlay?: boolean }) {
    return (
        <Card className={`relative cursor-grab active:cursor-grabbing hover:shadow-lg transition-all border-l-4 border-l-amber-500 border-y-0 border-r-0 rounded-r-lg rounded-l-sm bg-white ${isOverlay ? 'shadow-2xl rotate-2 scale-105' : 'shadow-sm'} touch-none`}>
            <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm font-bold text-slate-800 leading-tight flex justify-between items-start gap-2">
                    <span className="break-words">{lead.title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2 text-xs text-slate-500 space-y-2">

                <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <User className="w-3 h-3 text-amber-500" />
                    <span>{lead.contact_name}</span>
                </div>

                {lead.description && (
                    <p className="line-clamp-2 text-slate-400 bg-slate-50 p-2 rounded border border-slate-100 italic">
                        {lead.description}
                    </p>
                )}

                <div className="flex justify-end pt-2 border-t border-slate-100 mt-2">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                        <Calendar className="w-3 h-3 text-amber-400" />
                        <span>
                            {lead.created_at
                                ? new Date(lead.created_at).toLocaleDateString()
                                : 'Just now'}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
