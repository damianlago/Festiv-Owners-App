export class EventModel {

    public constructor(
        public id: string,
        public userId: string,
        public eventName: string,
        public state: number,
        public description: string,
        public startDate: string,
        public endDate: string,
        public startTime: string,
        public endTime: string
    ) {
        this.id = id;
        this.userId = userId;
        this.eventName = eventName;
        this.state = state;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
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
    public getStartDate(): string {
        return this.startDate;
    }
    public getEndDate(): string {
        return this.endDate;
    }
    public getStartTime(): string {
        return this.startTime;
    }
    public getEndTime(): string {
        return this.endTime;
    }
}