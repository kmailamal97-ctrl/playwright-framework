export function generateOrderData() {

  const timestamp = Date.now();

  return {

    name: `Amal ${timestamp}`,

    country: 'Palestine',

    city: 'Nablus',

    card: '4111111111111111',

    month: '05',

    year: '2026'
  };
}