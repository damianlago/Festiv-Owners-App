export class TicketModel {

    public constructor(
        public id: string,
        public eventId: string,
        public maxTickets: number,
        public nominalTickets: number,
        public price: number,
    ) {
        this.id = id;
        this.eventId = eventId;
        this.maxTickets = maxTickets;
        this.nominalTickets = nominalTickets;
        this.price = price;
    }

    public getId(): string {
        return this.id;
    }
    public getEventId(): string {
        return this.eventId;
    }
    public getMaxTickets(): number {
        return this.maxTickets;
    }
    public getNominalTickets(): number {
        return this.nominalTickets;
    }
    public getPrice(): number {
        return this.price;
    }
}