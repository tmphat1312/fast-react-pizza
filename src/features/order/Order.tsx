// Test ID: IIDSAT

import { useFetcher } from 'react-router-dom';
import { useLoaderData } from '../../hooks/useLoaderData';
import { OrderModel } from '../../models/OrderModel';
import CurrencyPresenter from '../../ui/CurrencyPresenter';
import DatePresenter from '../../ui/DatePresenter';
import { calcMinutesLeft } from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import { MenuItemModel } from '../../models/MenuItemModel';
import UpdateOrderPriority from './UpdateOrderPriority';

function Order() {
  const fetcher = useFetcher<MenuItemModel[]>();
  const order = useLoaderData<OrderModel>();
  const deliveryIn = calcMinutesLeft(order.estimatedDelivery);
  const menuItems = fetcher.data ?? [];

  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load('/menu');
    }
  }, [fetcher]);

  return (
    <div className="px-4 py-6 space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{order.id} status</h2>

        <div className="space-x-2">
          {order.priority && (
            <span className="inline-block px-3 py-1 text-sm tracking-wide uppercase bg-red-500 rounded-full text-red-50">
              Priority
            </span>
          )}
          <span className="inline-block px-3 py-1 text-sm tracking-wide uppercase bg-green-500 rounded-full text-green-50">
            {order.status} order
          </span>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-5 rounded-md shadow-sm bg-stone-200">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(order.estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: <DatePresenter date={order.estimatedDelivery} />)
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-y">
        {order.cart.map((item) => {
          const menuItem = menuItems.find(
            (menuItem) => menuItem.id === item.pizzaId,
          );

          return (
            <OrderItem
              key={item.pizzaId}
              item={item}
              ingredients={menuItem?.ingredients}
              isLoadingIngredients={fetcher.state === 'loading'}
            />
          );
        })}
      </ul>

      <div className="px-6 py-5 space-y-2 rounded-md shadow-sm bg-stone-200">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: <CurrencyPresenter amount={order.orderPrice} />
        </p>
        {order.priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: <CurrencyPresenter amount={order.priorityPrice} />
          </p>
        )}
        <p className="font-bold">
          To pay on delivery:&nbsp;
          <CurrencyPresenter
            amount={
              order.orderPrice + (order.priority ? order.priorityPrice : 0)
            }
          />
        </p>
      </div>

      {!order.priority && <UpdateOrderPriority />}
    </div>
  );
}

export default Order;
