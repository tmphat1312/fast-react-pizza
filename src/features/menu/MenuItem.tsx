import { twJoin } from 'tailwind-merge';
import { MenuItemModel } from '../../models/MenuItemModel';
import Button from '../../ui/Button';
import CurrencyPresenter from '../../ui/CurrencyPresenter';

type MenuItemProps = {
  pizza: MenuItemModel;
};

export default function MenuItem({ pizza }: MenuItemProps) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
            <CurrencyPresenter amount={unitPrice} />
          )}

          <Button size="sm" disabled={soldOut}>
            Add to cart
          </Button>
        </div>
      </article>
    </li>
  );
}
