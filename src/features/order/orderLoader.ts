import { LoaderFunctionArgs } from 'react-router-dom';

import api from '../../api/api';
import { OrderModel } from '../../models/OrderModel';

export async function orderLoader({ params }: LoaderFunctionArgs) {
  return await api<OrderModel>(`/order/${params.orderId}`);
}
