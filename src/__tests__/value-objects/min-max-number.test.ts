import { MinMaxNumber } from '../../index';

test('Test constructor', () => {
    const minimumValue = 10;
    const maximumValue = 20;
    const minMaxValue = new MinMaxNumber(minimumValue, maximumValue);
    expect(minMaxValue.getMinimumValue()).toBe(minimumValue);
    expect(minMaxValue.getMaximumValue()).toBe(maximumValue);
});
