import { Wind } from './wind';

export interface ConditionsValues {
    getPrecipitationProbability(): number;
    setPrecipitationProbability(precipitationProbability: number): void;
    getSnowLevel(): number;
    setSnowLevel(snowLevel: number): void;
    getSkyCondition(): string;
    setSkyCondition(skyCondition: string): void;
    getWind(): Wind;
    setWind(wind: Wind): void;
    getGustOfWindSpeed(): number;
    setGustOfWindSpeed(gustOfWindSpeed: number): void;
    getTemperature(): number;
    setTemperature(temperature: number): void;
    getFeelsLike(): number;
    setFeelsLike(feelsLike: number): void;
    getHumidity(): number;
    setHumidity(humidity: number): void;
}

export class Conditions implements ConditionsValues {
    public static maxProbabilityAllowedValue = 100;
    public static maxHumidityAllowedValue = 100;

    private precipitationProbability!: number;
    private snowLevel!: number;
    private skyCondition!: string;
    private wind!: Wind;
    private gustOfWindSpeed!: number;
    private temperature!: number;
    private feelsLike!: number;
    private humidity!: number;

    getPrecipitationProbability(): number {
        return this.precipitationProbability;
    }

    setPrecipitationProbability(precipitationProbability: number): void {
        if (precipitationProbability > Conditions.maxProbabilityAllowedValue) {
            throw new Error('Probability measure can not be greater than 100');
        }

        if (precipitationProbability < 0) {
            throw new Error('Probability measure can not be negative');
        }

        this.precipitationProbability = precipitationProbability;
    }

    getSnowLevel(): number {
        return this.snowLevel;
    }

    setSnowLevel(snowLevel: number): void {
        this.snowLevel = snowLevel;
    }

    getSkyCondition(): string {
        return this.skyCondition;
    }

    setSkyCondition(skyCondition: string): void {
        this.skyCondition = skyCondition;
    }

    getWind(): Wind {
        return this.wind;
    }

    setWind(wind: Wind): void {
        this.wind = wind;
    }

    getGustOfWindSpeed(): number {
        return this.gustOfWindSpeed;
    }

    setGustOfWindSpeed(gustOfWindSpeed: number): void {
        this.gustOfWindSpeed = gustOfWindSpeed;
    }

    getTemperature(): number {
        return this.temperature;
    }

    setTemperature(temperature: number): void {
        this.temperature = temperature;
    }

    getFeelsLike(): number {
        return this.feelsLike;
    }

    setFeelsLike(feelsLike: number): void {
        this.feelsLike = feelsLike;
    }

    getHumidity(): number {
        return this.humidity;
    }

    setHumidity(humidity: number): void {
        if (humidity > Conditions.maxHumidityAllowedValue) {
            throw new Error('Humidity can not be greater than 100');
        }

        if (humidity < 0) {
            throw new Error('Humidity can not be negative');
        }

        this.humidity = humidity;
    }
}
