import { APIRequestContext, expect } from '@playwright/test';

export class DemoblazeApi {
  constructor(private request: APIRequestContext) {}

  async getProducts() {
    const response = await this.request.get(
      'https://api.demoblaze.com/entries'
    );

    expect(response.status()).toBe(200);

    return response.json();
  }

  async login(username: string, password: string) {
    const response = await this.request.post(
      'https://api.demoblaze.com/login',
      {
        data: {
          username,
          password
        }
      }
    );

    expect(response.status()).toBe(200);

    return response.text();
  }

  async addToCart(productId: number) {
    const response = await this.request.post(
      'https://api.demoblaze.com/addtocart',
      {
        data: {
          id: 'test-id',
          cookie: 'test-cookie',
          prod_id: productId,
          flag: false
        }
      }
    );

    expect(response.status()).toBe(200);

    return response.text();
  }
}