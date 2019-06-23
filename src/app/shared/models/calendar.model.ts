export interface CalendarEvent {
    id: string,
    start: Date,
    end: Date,
    name: string,
    description?: string,
    color: string
}