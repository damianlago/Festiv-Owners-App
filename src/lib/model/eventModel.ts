export class EventModel {

    public constructor(
        public id: string,
        public userId: string,
        public eventName: string,
        public state: number,
        public description: string,
        public dates: [],
        public startTime: string,
        public endTime: string
    ) {
        this.id = id;
        this.userId = userId;
        this.eventName = eventName;
        this.state = state;
        this.description = description;
        this.dates = dates;
        this.startTime = startTime;
        this.endTime = endTime;
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
    public getDescription(): string {
        return this.description;
    }
    public getDates(): [] {
        return this.dates;
    }
    public getStartTime(): string {
        return this.startTime;
    }
    public getEndTime(): string {
        return this.endTime;
    }
}