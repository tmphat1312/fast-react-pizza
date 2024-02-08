import { MenuItemModel } from './MenuItemModel';

export type CartItemModel = {
  pizzaId: MenuItemModel['id'];
  // pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};
