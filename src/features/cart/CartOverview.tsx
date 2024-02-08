import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectTotalPrice, selectorTotalItems } from './cartSlice';
import CurrencyPresenter from '../../ui/CurrencyPresenter';
import pluralize from 'pluralize';

export default function CartOverview() {
  const totalPrice = useAppSelector(selectTotalPrice);
  const totalItems = useAppSelector(selectorTotalItems);

  return (
    totalItems != 0 && (
      <div className="p-4 text-sm uppercase bg-stone-800 text-stone-200 sm:px-6 md:text-base">
        <div className="flex items-center justify-between">
          <p className="space-x-4 sm:space-x-6 text-stone-300">
            <span>{pluralize('pizza', totalItems, true)}</span>
            <span>
              <CurrencyPresenter amount={totalPrice} />
            </span>
          </p>

          <Link to="/cart">
            Open cart
            <span role="presentation">&rarr;</span>
          </Link>
        </div>
      </div>
    )
  );
}
