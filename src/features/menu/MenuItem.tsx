import { Fragment } from 'react';
import { twJoin } from 'tailwind-merge';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CartItemModel } from '../../models/CartItemModel';
import { MenuItemModel } from '../../models/MenuItemModel';
import Button from '../../ui/Button';
import CurrencyPresenter from '../../ui/CurrencyPresenter';
import RemoveCartItemButton from '../cart/RemoveCartItemButton';
import UpdateItemQuantityButtons from '../cart/UpdateItemQuantityButtons';
import { addItem, selectorItemQuantity } from '../cart/cartSlice';

type MenuItemProps = {
  pizza: MenuItemModel;
};

export default function MenuItem({ pizza }: MenuItemProps) {
  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;
  const dispatch = useAppDispatch();
  const isAlreadyInCart = useAppSelector(selectorItemQuantity(id)) > 0;

  function handleAddToCart() {
    const newCartItem: CartItemModel = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newCartItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        width={96}
        height={96}
        className={twJoin(
          'h-[96px] rounded-sm',
          soldOut && 'opacity-70 grayscale',
        )}
      />
      <article className="flex flex-col gap-1 grow pt-0.5">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="flex items-center justify-between mt-auto text-sm">
          {soldOut ? (
            <p className="font-semibold uppercase text-stone-500">Sold out</p>
          ) : (
            <Fragment>
              <CurrencyPresenter amount={unitPrice} />
              {isAlreadyInCart ? (
                <div className="flex items-center gap-3 sm:gap-6">
                  <UpdateItemQuantityButtons pizzaId={id} />
                  <RemoveCartItemButton pizzaId={id} />
                </div>
              ) : (
                <Button size="sm" disabled={soldOut} onClick={handleAddToCart}>
                  Add to cart
                </Button>
              )}
            </Fragment>
          )}
        </div>
      </article>
    </li>
  );
}
