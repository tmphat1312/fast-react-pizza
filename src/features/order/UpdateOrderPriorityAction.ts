import { ActionFunctionArgs } from 'react-router-dom';
import api from '../../api/api';

export async function updateOrderPriorityAction({
  params,
}: ActionFunctionArgs) {
  try {
    await api(`/order/${params.orderId}`, {
      method: 'PATCH',
      body: JSON.stringify({ priority: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return null;
  }

  return null;
}
