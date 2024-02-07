import { CartItemModel } from '../../models/CartItemModel';
import Button from '../../ui/Button';
import CurrencyPresenter from '../../ui/CurrencyPresenter';

type CartItemProps = {
  item: CartItemModel;
};

export default function CartItem({ item }: CartItemProps) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="items-center justify-between py-3 sm:flex">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <span className="text-sm font-bold">
          <CurrencyPresenter amount={totalPrice} />
        </span>
        <Button size="sm">Delete</Button>
      </div>
    </li>
  );
}
