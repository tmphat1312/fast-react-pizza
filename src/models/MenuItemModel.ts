import { Brand } from '../utils/types';

export type MenuItemModel = {
  id: Brand<number, '__menu-item__'>;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};
