import { currencyFormatter } from '../utils/formatter';

type CurrencyPresenterProps = {
  amount: number | bigint | string;
};

export default function CurrencyPresenter({ amount }: CurrencyPresenterProps) {
  if (typeof amount === 'string') {
    amount = parseFloat(amount);
  }

  return <>{currencyFormatter.format(amount)}</>;
}
