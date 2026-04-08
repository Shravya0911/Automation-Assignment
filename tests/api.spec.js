const { test, expect } = require('@playwright/test');

test('API Test - Get Posts', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    // Status check
    expect(response.status()).toBe(200);

    const body = await response.json();

    // Validate response
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
});