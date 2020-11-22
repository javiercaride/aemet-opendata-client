export interface WindValue {
    setDirection(direction: string): void;
    getDirection(): string;
    setSpeed(speed: number): void;
    getSpeed(): number;
}

export class Wind implements WindValue {
    private direction: string;
    private speed: number;

    public constructor(direction: string, speed: number) {
        this.direction = direction;
        this.speed = speed;
    }

    public setDirection(direction: string): void {
        this.direction = direction;
    }

    public getDirection(): string {
        return this.direction;
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }

    public getSpeed(): number {
        return this.speed;
    }
}
