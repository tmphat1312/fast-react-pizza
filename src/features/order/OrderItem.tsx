import { CartItemModel as OrderItemModel } from '../../models/CartItemModel';
import CurrencyPresenter from '../../ui/CurrencyPresenter';

type OrderItemProps = {
  item: OrderItemModel;
  ingredients?: string[];
  isLoadingIngredients?: boolean;
};

export default function OrderItem({
  item,
  ingredients = [],
  isLoadingIngredients = true,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;
  const ingredientsMessage =
    ingredients.length > 0 ? ingredients.join(', ') : 'No ingredients added.';

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">
          <CurrencyPresenter amount={totalPrice} />
        </p>
      </div>
      {isLoadingIngredients ? (
        <p className="text-sm italic text-stone-500">Loading ingredients...</p>
      ) : (
        <p className="text-sm italic text-stone-500">{ingredientsMessage}</p>
      )}
    </li>
  );
}
