type OrderItemType = {
  quantity: number;
  name: string;
  totalPrice: number;
};

type Ingredient = {
  name: string;
  price: number;
};

type OrderItemProps = {
  item: OrderItemType;
  isLoadingIngredients: boolean;
  ingredients: Ingredient[];
};

export default function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        {/* <p>{formatCurrency(totalPrice)}</p> */}
      </div>
    </li>
  );
}
