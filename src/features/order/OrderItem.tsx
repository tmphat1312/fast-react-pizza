import { CartItemModel as OrderItemModel } from '../../models/CartItemModel';
import CurrencyPresenter from '../../ui/CurrencyPresenter';

type Ingredient = {
  name: string;
  price: number;
};

type OrderItemProps = {
  item: OrderItemModel;
  isLoadingIngredients?: boolean;
  ingredients?: Ingredient[];
};

export default function OrderItem({
  item,
}: // isLoadingIngredients,
// ingredients,
OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">
          <CurrencyPresenter amount={totalPrice} />
        </p>
      </div>
    </li>
  );
}
