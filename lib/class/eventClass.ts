export class Event {

    public constructor(public id: string, public userId: string, public eventName: string, public date: string, public startTime: string, public endTime: string, public adress: string, public image: string) {
        this.id = id;
        this.userId = userId;
        this.eventName = eventName;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.adress = adress;
        this.image = image;
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
    public getDate(): string {
        return this.date;
    }
    public getStartTime(): string {
        return this.startTime;
    }
    public getEndTime(): string {
        return this.endTime;
    }
    public getAdress(): string {
        return this.adress;
    }
    public getImage(): string {
        return this.image;
    }
}