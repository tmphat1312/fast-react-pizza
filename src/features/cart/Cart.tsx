import { useNavigate } from 'react-router-dom';
import AnchorButton from '../../ui/AnchorButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useAppSelector } from '../../hooks/useAppSelector';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function Cart() {
  const cart = fakeCart;
  const navigate = useNavigate();
  const username = useAppSelector((state) => state.user.username);

  return (
    <section className="px-4 py-3">
      <AnchorButton to="/menu" className="inline-block mb-7">
        &larr; Back to menu
      </AnchorButton>

      <h2 className="mb-3 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mb-6 border-b divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="space-x-2">
        <Button onClick={() => navigate('/order/new')}>Order pizzas</Button>
        <Button variant="secondary">Clear cart</Button>
      </div>
    </section>
  );
}
