import { ActionFunctionArgs, redirect } from 'react-router-dom';
import api from '../../api/api';
import { OrderModel } from '../../models/OrderModel';

export async function createOrderAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const order = {
    ...data,
    cart: JSON.parse(data.cart as string),
    priority: data.priority === 'on',
  };

  const newOrder = await api<OrderModel>('/order', {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/order/:orderId'.replace(':orderId', newOrder.id));
}
