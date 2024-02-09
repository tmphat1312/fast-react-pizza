import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from './features/menu/Menu';
import { menuLoader } from './features/menu/menuLoader';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import { createOrderAction } from './features/order/createOrderAction';
import { orderLoader } from './features/order/orderLoader';
import AppLayout from './layouts/AppLayout';
import ErrorElement from './ui/Error';
import Home from './ui/Home';
import Cart from './features/cart/Cart';
import { updateOrderPriorityAction } from './features/order/UpdateOrderPriorityAction';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <ErrorElement />,
        action: updateOrderPriorityAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
