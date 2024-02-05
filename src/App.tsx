import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from './features/menu/Menu';
import { menuLoader } from './features/menu/menuLoader';
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
