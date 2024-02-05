import { MenuItemModel } from '../../models/MenuItemModel';

type MenuItemProps = {
  pizza: MenuItemModel;
};

export default function MenuItem({ pizza }: MenuItemProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {/* {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>} */}
        </div>
      </div>
    </li>
  );
}
