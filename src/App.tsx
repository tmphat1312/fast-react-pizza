import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from './features/menu/Menu';
import { menuLoader } from './features/menu/menuLoader';
import AppLayout from './layouts/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <div>home</div>,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
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
        element: <div>order</div>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
