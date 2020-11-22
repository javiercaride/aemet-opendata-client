import { Wind } from '../../index';

test('Wind Constructor', () => {
    const windValue = new Wind('S', 20);
    expect(windValue.getDirection()).toBe('S');
    expect(windValue.getSpeed()).toBe(20);
});
