import { Conditions } from '../../value-objects/conditions';
import { CommonDailyForecast } from './common-daily-forecast';

export interface DetailedDailyForecastValue {
    setOvernightConditions(overnightConditions: Conditions): void;
    getOvernightConditions(): Conditions;
    setMorningConditions(morningConditions: Conditions): void;
    getMorningConditions(): Conditions;
    setEveningConditions(eveningConditions: Conditions): void;
    getEveningConditions(): Conditions;
    setNightConditions(nightConditions: Conditions): void;
    getNightConditions(): Conditions;
}

export class DetailedDailyForecast extends CommonDailyForecast implements DetailedDailyForecastValue {
    protected overnightConditions!: Conditions;
    protected morningConditions!: Conditions;
    protected eveningConditions!: Conditions;
    protected nightConditions!: Conditions;

    public setOvernightConditions(overnightConditions: Conditions): void {
        this.overnightConditions = overnightConditions;
    }

    public getOvernightConditions(): Conditions {
        return this.overnightConditions;
    }

    public setMorningConditions(morningConditions: Conditions): void {
        this.morningConditions = morningConditions;
    }

    public getMorningConditions(): Conditions {
        return this.morningConditions;
    }

    public setEveningConditions(eveningConditions: Conditions): void {
        this.eveningConditions = eveningConditions;
    }

    public getEveningConditions(): Conditions {
        return this.eveningConditions;
    }

    public setNightConditions(nightConditions: Conditions): void {
        this.nightConditions = nightConditions;
    }

    public getNightConditions(): Conditions {
        return this.nightConditions;
    }
}
