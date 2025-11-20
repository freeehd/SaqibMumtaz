"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { GoogleCalendar } from "./google-calendar"

interface GoogleCalendarModalProps {
    isOpen: boolean
    onClose: () => void
}

export function GoogleCalendarModal({ isOpen, onClose }: GoogleCalendarModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] h-[80vh] p-0 overflow-hidden">
                <DialogHeader className="px-6 pt-6 pb-2">
                    <DialogTitle>Schedule an Appointment</DialogTitle>
                </DialogHeader>
                <div className="flex-1 h-full w-full overflow-y-auto">
                    <GoogleCalendar className="h-full min-h-[600px]" />
                </div>
            </DialogContent>
        </Dialog>
    )
}
