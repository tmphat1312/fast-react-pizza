import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from './features/menu/Menu';
import { menuLoader } from './features/menu/menuLoader';
import Order from './features/order/Order';
import AppLayout from './layouts/AppLayout';
import ErrorElement from './ui/Error';
import { orderLoader } from './features/order/orderLoader';

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
        element: <div>new order</div>,
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
