import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../ui/Username';

export default function Header() {
  return (
    <header className="px-4 py-3 uppercase border-b bg-primary-500 border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}
