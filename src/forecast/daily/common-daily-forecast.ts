import { MinMaxMeasure } from '../../value-objects/min-max-measure';

export abstract class CommonDailyForecast {
    protected uvRadiationMaxValue!: number;
    protected temperatureRange!: MinMaxMeasure;
    protected feelsLikeRange!: MinMaxMeasure;
    protected humidityRange!: MinMaxMeasure;

    public setUvRadiationMaxValue(uvRadiationMaxValue: number): void {
        this.uvRadiationMaxValue = uvRadiationMaxValue;
    }

    public getUvRadiationMaxValue(): number {
        return this.uvRadiationMaxValue;
    }

    public setTemperatureRange(temperatureRange: MinMaxMeasure): void {
        this.temperatureRange = temperatureRange;
    }

    public getTempreatureRange(): MinMaxMeasure {
        return this.temperatureRange;
    }

    public setFeelsLikeRange(feelsLikeRange: MinMaxMeasure): void {
        this.feelsLikeRange = feelsLikeRange;
    }

    public getFeelsLikeRange(): MinMaxMeasure {
        return this.feelsLikeRange;
    }

    public setHumidityRange(humidityRange: MinMaxMeasure): void {
        this.humidityRange = humidityRange;
    }

    public getHumidityRange(): MinMaxMeasure {
        return this.humidityRange;
    }
}
