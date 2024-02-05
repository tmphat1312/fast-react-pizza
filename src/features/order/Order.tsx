// Test ID: IIDSAT

import { useLoaderData } from '../../hooks/useLoaderData';
import { OrderModel } from '../../models/OrderModel';
import CurrencyPresenter from '../../ui/CurrencyPresenter';
import DatePresenter from '../../ui/DatePresenter';
import { calcMinutesLeft } from '../../utils/helpers';

function Order() {
  const order = useLoaderData<OrderModel>();
  const deliveryIn = calcMinutesLeft(order.estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {order.priority && <span>Priority</span>}
          <span>{order.status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(order.estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>
          (Estimated delivery: <DatePresenter date={order.estimatedDelivery} />)
        </p>
      </div>

      <div>
        <p>
          Price pizza: <CurrencyPresenter amount={order.orderPrice} />
        </p>
        {order.priority && (
          <p>
            Price priority: <CurrencyPresenter amount={order.priorityPrice} />
          </p>
        )}
        <p>
          To pay on delivery:
          <CurrencyPresenter
            amount={
              order.orderPrice + (order.priority ? order.priorityPrice : 0)
            }
          />
        </p>
      </div>
    </div>
  );
}

export default Order;
