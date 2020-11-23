import { MinMaxMeasure } from '../../index';

test('Test constructor', () => {
    const minimumValue = 10;
    const maximumValue = 20;
    const minMaxMeasure = new MinMaxMeasure(minimumValue, maximumValue);
    expect(minMaxMeasure.getMinimumValue()).toBe(minimumValue);
    expect(minMaxMeasure.getMaximumValue()).toBe(maximumValue);
});

test('Test max value setter', () => {
    const newMaximumValue = 30;
    const minMaxMeasure = new MinMaxMeasure(10, 20);
    minMaxMeasure.setMaximumValue(newMaximumValue);

    expect(minMaxMeasure.getMaximumValue()).toBe(newMaximumValue);
});

test('Test min value setter', () => {
    const newMinimumValue = 1;
    const minMaxMeasure = new MinMaxMeasure(10, 20);
    minMaxMeasure.setMinimumValue(newMinimumValue);

    expect(minMaxMeasure.getMinimumValue()).toBe(newMinimumValue);
});

test('Test min value greater than max value not allowed', () => {
    const minMaxMeasure = new MinMaxMeasure(10, 20);
    expect(() => {
        minMaxMeasure.setMinimumValue(35);
    }).toThrow(Error);
});
test('Test max value smaller than max value not allowed', () => {
    const minMaxMeasure = new MinMaxMeasure(10, 20);
    expect(() => {
        minMaxMeasure.setMaximumValue(5);
    }).toThrow(Error);
});
