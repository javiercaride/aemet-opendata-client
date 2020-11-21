import { AemetApi } from '../index';

test('Test Initialization', () => {
    const expectedApiKey = 'FakeApiKeyForTesting';
    const apiClient = new AemetApi(expectedApiKey);
    expect(apiClient.getApikey()).toBe(expectedApiKey);
});
