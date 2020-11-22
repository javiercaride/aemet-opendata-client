import { MinMaxNumber } from '../../index';

test('Test constructor', () => {
    const minimumValue = 10;
    const maximumValue = 20;
    const minMaxValue = new MinMaxNumber(minimumValue, maximumValue);
    expect(minMaxValue.getMinimumValue()).toBe(minimumValue);
    expect(minMaxValue.getMaximumValue()).toBe(maximumValue);
});

test('Test max value setter', () => {
    const newMaximumValue = 30;
    const minMaxValue = new MinMaxNumber(10, 20);
    minMaxValue.setMaximumValue(newMaximumValue);

    expect(minMaxValue.getMaximumValue()).toBe(newMaximumValue);
});

test('Test min value setter', () => {
    const newMinimumValue = 1;
    const minMaxValue = new MinMaxNumber(10, 20);
    minMaxValue.setMinimumValue(newMinimumValue);

    expect(minMaxValue.getMinimumValue()).toBe(newMinimumValue);
});

test('Test min value greater than max value not allowed', () => {
    const minMaxValue = new MinMaxNumber(10, 20);
    expect(() => {
        minMaxValue.setMinimumValue(35);
    }).toThrow(Error);
});
test('Test max value smaller than max value not allowed', () => {
    const minMaxValue = new MinMaxNumber(10, 20);
    expect(() => {
        minMaxValue.setMaximumValue(5);
    }).toThrow(Error);
});
