import { Period } from '../../index';
import { Wind } from '../../index';

test('Set Precipitation probability', () => {
    const period = new Period();
    period.setPrecipitationProbability(80);

    expect(period.getPrecipitationProbability()).toBe(80);
});

test('Precipitation probability not initialized', () => {
    const period = new Period();

    expect(period.getPrecipitationProbability()).toBeUndefined();
});

test('Set precipitation probability greater than 100', () => {
    const period = new Period();
    expect(() => {
        period.setPrecipitationProbability(150);
    }).toThrow(Error);
});

test('Set negative precipitation probability', () => {
    const period = new Period();
    expect(() => {
        period.setPrecipitationProbability(-30);
    }).toThrow(Error);
});

test('Set snow level', () => {
    const period = new Period();
    period.setSnowLevel(2300);

    expect(period.getSnowLevel()).toBe(2300);
});

test('Snow level not initialized', () => {
    const period = new Period();

    expect(period.getSnowLevel()).toBeUndefined();
});

test('Set sky condition', () => {
    const period = new Period();
    period.setSkyCondition('Test Sky Condition');

    expect(period.getSkyCondition()).toBe('Test Sky Condition');
});

test('Sky condition not initialized', () => {
    const period = new Period();

    expect(period.getSkyCondition()).toBeUndefined();
});

test('Set wind', () => {
    const period = new Period();
    const wind = new Wind('S', 30);

    period.setWind(wind);

    expect(period.getWind()).toBeInstanceOf(Wind);
    expect(period.getWind().getDirection()).toBe('S');
    expect(period.getWind().getSpeed()).toBe(30);
});

test('Wind not initialized', () => {
    const period = new Period();

    expect(period.getSkyCondition()).toBeUndefined();
});

test('Set gust of wind speed', () => {
    const period = new Period();
    period.setGustOfWindSpeed(150);

    expect(period.getGustOfWindSpeed()).toBe(150);
});

test('Gust of wind not initialized', () => {
    const period = new Period();

    expect(period.getGustOfWindSpeed()).toBeUndefined();
});

test('Set temperature', () => {
    const period = new Period();
    period.setTemperature(20);

    expect(period.getTemperature()).toBe(20);
});

test('Temperature not initialized', () => {
    const period = new Period();

    expect(period.getTemperature()).toBeUndefined();
});

test('Set feelsl like', () => {
    const period = new Period();
    period.setFeelsLike(30);

    expect(period.getFeelsLike()).toBe(30);
});

test('Feels like not initialized', () => {
    const period = new Period();

    expect(period.getFeelsLike()).toBeUndefined();
});

test('Set humidity', () => {
    const period = new Period();
    period.setHumidity(30);

    expect(period.getHumidity()).toBe(30);
});

test('Set humidity greater than 100', () => {
    const period = new Period();
    expect(() => {
        period.setHumidity(150);
    }).toThrow(Error);
});

test('Set negative humidity', () => {
    const period = new Period();
    expect(() => {
        period.setHumidity(-30);
    }).toThrow(Error);
});

test('Humidity not initialized', () => {
    const period = new Period();

    expect(period.getHumidity()).toBeUndefined();
});
