import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from './features/menu/Menu';
import { menuLoader } from './features/menu/menuLoader';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import { createOrderAction } from './features/order/createOrderAction';
import { orderLoader } from './features/order/orderLoader';
import AppLayout from './layouts/AppLayout';
import ErrorElement from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <div>home</div>,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: '/cart',
        element: <div>cart</div>,
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
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
