const BASE_URL = import.meta.env.VITE_API_URL;

export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menu`);

  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();

  return data;
}

// TODO: Add Branded type for the data
export async function getOrder(id: string) {
  const res = await fetch(`${BASE_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

type Order = {
  name: string;
  address: string;
  phone: string;
  items: {
    id: string;
    quantity: number;
  }[];
};

export async function createOrder(newOrder: Order) {
  try {
    const res = await fetch(`${BASE_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id: string, updateObj: Order) {
  try {
    const res = await fetch(`${BASE_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
