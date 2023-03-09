export class EventData {

    public constructor(public displayName: string, public description: string) {
        this.displayName = displayName;
        this.description = description;
    }

    public getDisplayName(): string {
        return this.displayName;
    }
    public getDescription(): string {
        return this.description;
    }
}