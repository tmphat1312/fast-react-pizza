import AnchorButton from '../../ui/AnchorButton';

export default function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <AnchorButton to="/menu" className="inline-block mb-7">
        &larr; Back to menu
      </AnchorButton>

      <p className="text-lg font-bold">
        Your cart is still empty. Start adding some pizzas
        <span role="presentation"> :)</span>
      </p>
    </div>
  );
}
