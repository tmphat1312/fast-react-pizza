import { CartItemModel } from '../../models/CartItemModel';
import CurrencyPresenter from '../../ui/CurrencyPresenter';
import RemoveCartItemButton from './RemoveCartItemButton';
import UpdateItemQuantityButtons from './UpdateItemQuantityButtons';

type CartItemProps = {
  item: CartItemModel;
};

export default function CartItem({ item }: CartItemProps) {
  return (
    <li className="items-center justify-between py-3 sm:flex">
      <p className="mb-1 sm:mb-0">
        {item.quantity}&times; {item.name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <span className="text-sm font-bold">
          <CurrencyPresenter amount={item.totalPrice} />
        </span>

        <UpdateItemQuantityButtons pizzaId={item.pizzaId} />

        <RemoveCartItemButton pizzaId={item.pizzaId} />
      </div>
    </li>
  );
}
