"use client"

import { cn } from "@/lib/utils"

interface GoogleCalendarProps {
    className?: string
}

export function GoogleCalendar({ className }: GoogleCalendarProps) {
    return (
        <div className={cn("w-full h-full min-h-[600px] bg-white rounded-lg overflow-hidden", className)}>
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0qZfEOa7BbKn27QY8KD4kgsXyMhWWXfxVIOOh-bdqrOSykNohlFZJfA2bq4gna7aQGEj1-m5vJ?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full min-h-[600px]"
            />
        </div>
    )
}
