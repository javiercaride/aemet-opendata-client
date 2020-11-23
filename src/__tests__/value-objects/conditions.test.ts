import { Conditions } from '../../index';
import { Wind } from '../../index';

test('Set Precipitation probability', () => {
    const conditions = new Conditions();
    conditions.setPrecipitationProbability(80);

    expect(conditions.getPrecipitationProbability()).toBe(80);
});

test('Precipitation probability not initialized', () => {
    const conditions = new Conditions();

    expect(conditions.getPrecipitationProbability()).toBeUndefined();
});

test('Set precipitation probability greater than 100', () => {
    const conditions = new Conditions();
    expect(() => {
        conditions.setPrecipitationProbability(150);
    }).toThrow(Error);
});

test('Set negative precipitation probability', () => {
    const conditions = new Conditions();
    expect(() => {
        conditions.setPrecipitationProbability(-30);
    }).toThrow(Error);
});

test('Set snow level', () => {
    const conditions = new Conditions();
    conditions.setSnowLevel(2300);

    expect(conditions.getSnowLevel()).toBe(2300);
});

test('Snow level not initialized', () => {
    const conditions = new Conditions();

    expect(conditions.getSnowLevel()).toBeUndefined();
});

test('Set sky condition', () => {
    const conditions = new Conditions();
    conditions.setSkyCondition('Test Sky Condition');

    expect(conditions.getSkyCondition()).toBe('Test Sky Condition');
});

test('Sky condition not initialized', () => {
    const conditions = new Conditions();

    expect(conditions.getSkyCondition()).toBeUndefined();
});

test('Set wind', () => {
    const conditions = new Conditions();
    const wind = new Wind('S', 30);

    conditions.setWind(wind);

    expect(conditions.getWind()).toBeInstanceOf(Wind);
    expect(conditions.getWind().getDirection()).toBe('S');
    expect(conditions.getWind().getSpeed()).toBe(30);
});

test('Wind not initialized', () => {
    const conditions = new Conditions();

    expect(conditions.getSkyCondition()).toBeUndefined();
});

test('Set gust of wind speed', () => {
    const conditions = new Conditions();
    conditions.setGustOfWindSpeed(150);

    expect(conditions.getGustOfWindSpeed()).toBe(150);
});

test('Gust of wind not initialized', () => {
    const conditions = new Conditions();

    expect(conditions.getGustOfWindSpeed()).toBeUndefined();
});

test('Set temperature', () => {
    const conditions = new Conditions();
    conditions.setTemperature(20);

    expect(conditions.getTemperature()).toBe(20);
});

test('Temperature not initialized', () => {
    const conditions = new Conditions();

    expect(conditions.getTemperature()).toBeUndefined();
});

test('Set feelsl like', () => {
    const conditions = new Conditions();
    conditions.setFeelsLike(30);

    expect(conditions.getFeelsLike()).toBe(30);
});

test('Feels like not initialized', () => {
    const conditions = new Conditions();

    expect(conditions.getFeelsLike()).toBeUndefined();
});

test('Set humidity', () => {
    const conditions = new Conditions();
    conditions.setHumidity(30);

    expect(conditions.getHumidity()).toBe(30);
});

test('Set humidity greater than 100', () => {
    const conditions = new Conditions();
    expect(() => {
        conditions.setHumidity(150);
    }).toThrow(Error);
});

test('Set negative humidity', () => {
    const conditions = new Conditions();
    expect(() => {
        conditions.setHumidity(-30);
    }).toThrow(Error);
});

test('Humidity not initialized', () => {
    const conditions = new Conditions();

    expect(conditions.getHumidity()).toBeUndefined();
});
