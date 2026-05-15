import { test, expect } from '@playwright/test';
import { DemoblazeApi } from '../../api/demoblazeApi';

test.describe('Demoblaze API Tests', () => {
  test('Get products API', async ({ request }) => {
    const demoblazeApi = new DemoblazeApi(request);

    const products = await demoblazeApi.getProducts();

    expect(products.Items.length).toBeGreaterThan(0);

    expect(products.Items[0]).toHaveProperty('title');
  });

  test('Login API with invalid credentials', async ({ request }) => {
    const demoblazeApi = new DemoblazeApi(request);

    const response = await demoblazeApi.login(
      'wrongUser',
      'wrongPassword'
    );

    expect(response).toContain('Wrong password');
  });

  test('Add product to cart API', async ({ request }) => {
    const demoblazeApi = new DemoblazeApi(request);

    const response = await demoblazeApi.addToCart(1);

    expect(response).toBe('');
  });
});