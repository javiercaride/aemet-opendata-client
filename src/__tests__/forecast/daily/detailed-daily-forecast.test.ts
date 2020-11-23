import { DetailedDailyForecast } from '../../../forecast/daily/detailed-daily-forecast';
import { MinMaxMeasure } from '../../../value-objects/min-max-measure';

test('Uninitialized forecast', () => {
    const dailyForecast = new DetailedDailyForecast();

    expect(dailyForecast.getOvernightConditions()).toBeUndefined();
    expect(dailyForecast.getMorningConditions()).toBeUndefined();
    expect(dailyForecast.getEveningConditions()).toBeUndefined();
    expect(dailyForecast.getNightConditions()).toBeUndefined();
    expect(dailyForecast.getFeelsLikeRange()).toBeUndefined();
    expect(dailyForecast.getTemperatureRange()).toBeUndefined();
    expect(dailyForecast.getUvRadiationMaxValue()).toBeUndefined();
    expect(dailyForecast.getHumidityRange()).toBeUndefined();
});

test('Set temperature range', () => {
    const temperatureRange = new MinMaxMeasure(10, 20);
    const dailyForecast = new DetailedDailyForecast();

    dailyForecast.setTemperatureRange(temperatureRange);

    expect(dailyForecast.getTemperatureRange()).toBeInstanceOf(MinMaxMeasure);
    expect(dailyForecast.getTemperatureRange().getMaximumValue()).toBe(20);
    expect(dailyForecast.getTemperatureRange().getMinimumValue()).toBe(10);
});
