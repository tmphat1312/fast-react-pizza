import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';

export default function UpdateOrderPriority() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="patch" className="text-right">
      <Button>Make priority</Button>
    </fetcher.Form>
  );
}
