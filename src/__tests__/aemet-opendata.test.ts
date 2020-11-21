import { AemetOpendata } from '../index';

test('Test Initialization', () => {
    const expectedApiKey = 'FakeApiKeyForTesting';
    const apiClient = new AemetOpendata(expectedApiKey);
    expect(apiClient.getApikey()).toBe(expectedApiKey);
});
