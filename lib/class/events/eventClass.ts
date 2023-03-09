export class Event {

    public constructor(public id: string, public userId: string, public eventName: string, public state: number) {
        this.id = id;
        this.userId = userId;
        this.eventName = eventName;
        this.state = state;
    }

    public getId(): string {
        return this.id;
    }
    public getuserId(): string {
        return this.id;
    }
    public getEventName(): string {
        return this.eventName;
    }
    public getState(): number {
        return this.state;
    }
}