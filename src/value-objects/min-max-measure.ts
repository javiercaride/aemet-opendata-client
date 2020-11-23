export interface MinMaxMeasureValue {
    setMaximumValue(maximumValue: number): void;
    getMaximumValue(): number;
    setMinimumValue(minimumValue: number): void;
    getMinimumValue(): number;
}

export class MinMaxMeasure implements MinMaxMeasureValue {
    private minimumValue: number;
    private maximumValue: number;

    public constructor(minimumValue: number, maximumValue: number) {
        if (minimumValue > maximumValue) {
            throw new Error('Minimum value can not be bigger than maximum value');
        }
        this.minimumValue = minimumValue;
        this.maximumValue = maximumValue;
    }

    setMaximumValue(maximumValue: number): void {
        if (maximumValue < this.getMinimumValue()) {
            throw new Error('Maximum value can not be smaller than minimum value');
        }
        this.maximumValue = maximumValue;
    }

    getMaximumValue(): number {
        return this.maximumValue;
    }

    setMinimumValue(minimumValue: number): void {
        if (minimumValue > this.getMaximumValue()) {
            throw new Error('Minimum value can not be bigger than maximum value');
        }
        this.minimumValue = minimumValue;
    }

    getMinimumValue(): number {
        return this.minimumValue;
    }
}
