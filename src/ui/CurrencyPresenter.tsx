import { currencyFormatter } from '../utils/formatter';

export default function CurrencyPresenter({
  amount,
}: {
  amount: number | bigint | string;
}) {
  if (typeof amount === 'string') {
    amount = parseFloat(amount);
  }

  return <>{currencyFormatter.format(amount)}</>;
}
