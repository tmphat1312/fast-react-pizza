import { Link } from 'react-router-dom';

export default function CartOverview() {
  return (
    <div className="p-4 px-4 text-sm uppercase bg-stone-800 text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 sm:space-x-6 text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>

      <Link to="/cart">
        Open cart
        <span role="presentation">&rarr;</span>
      </Link>
    </div>
  );
}
