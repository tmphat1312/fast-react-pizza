import { useNavigate } from 'react-router-dom';
import AnchorButton from '../../ui/AnchorButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);
  const cart = useAppSelector((state) => state.cart.cart);

  function handleClearCart() {
    const confirmed = window.confirm(
      'Are you sure you want to clear your cart?',
    );

    if (confirmed) {
      dispatch(clearCart());
    }
  }

  return cart.length == 0 ? (
    <EmptyCart />
  ) : (
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
        <Button variant="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </section>
  );
}
