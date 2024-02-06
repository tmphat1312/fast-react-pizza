import { Link, useNavigate } from 'react-router-dom';
import AnchorButton from '../../ui/AnchorButton';
import Button from '../../ui/Button';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

export default function Cart() {
  // const cart = fakeCart;
  const navigate = useNavigate();

  return (
    <div>
      <AnchorButton to="/menu">&larr; Back to menu</AnchorButton>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Button onClick={() => navigate('/order/new')}>Order pizzas</Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}
