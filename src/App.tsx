import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>home</div>,
  },
  {
    path: '/menu',
    element: <div>menu</div>,
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
