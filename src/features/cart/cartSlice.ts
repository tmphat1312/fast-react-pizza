import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CartItemModel } from '../../models/CartItemModel';
import { MenuItemModel } from '../../models/MenuItemModel';
import { RootState } from '../../store';

type CartState = {
  cart: CartItemModel[];
};

type _UpdateItemQuantityAction = PayloadAction<{
  pizzaId: MenuItemModel['id'];
  quantity: number;
}>;

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemModel>) {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.pizzaId === item.pizzaId);

      if (existingItem) {
        const action: _UpdateItemQuantityAction = {
          type: cartSlice.actions.addItemQuantity.type,
          payload: {
            pizzaId: existingItem.pizzaId,
            quantity: 1,
          },
        };
        cartSlice.caseReducers.addItemQuantity(state, action);
      } else {
        state.cart.push(item);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const pizzaId = action.payload;
      state.cart = state.cart.filter((i) => i.pizzaId !== pizzaId);
    },
    addItemQuantity(state, action: _UpdateItemQuantityAction) {
      const { pizzaId, quantity } = action.payload;
      const existingItem = state.cart.find((i) => i.pizzaId === pizzaId);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      }
    },
    removeItemQuantity(state, action: _UpdateItemQuantityAction) {
      const { pizzaId, quantity } = action.payload;
      const existingItem = state.cart.find((i) => i.pizzaId === pizzaId);

      if (existingItem) {
        cartSlice.caseReducers.addItemQuantity(state, {
          payload: {
            pizzaId,
            quantity: -quantity,
          },
          type: cartSlice.actions.addItemQuantity.type,
        });
      }
    },
    clearCart(state) {
      state.cart = initialState.cart;
    },
  },
});

export function selectTotalPrice(state: RootState) {
  return state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
}

export function selectorTotalItems(state: RootState) {
  return state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
}

export function selectorItemQuantity(pizzaId: number) {
  return (state: RootState) => {
    const item = state.cart.cart.find((i) => i.pizzaId === pizzaId);
    return item?.quantity ?? 0;
  };
}

export const {
  addItem,
  addItemQuantity,
  clearCart,
  removeItem,
  removeItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
