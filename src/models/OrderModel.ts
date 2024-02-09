import { CartItemModel } from './CartItemModel';

export type OrderModel = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItemModel[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
};
