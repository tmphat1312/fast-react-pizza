import { dateFormatter } from '../utils/formatter';

export default function DatePresenter({ date }: { date: string | Date }) {
  return <>{dateFormatter.format(new Date(date))}</>;
}
