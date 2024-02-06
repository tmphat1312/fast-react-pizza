import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const navigator = useNavigate();
  const [query, setQuery] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (query.length > 0) {
      navigator(`/order/${query}`);
    }
  }

  return (
    <form action="/" onSubmit={handleSubmit}>
      <search className="w-32 sm:w-64 sm:focus-within:w-72">
        <input
          type="text"
          placeholder="search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 bg-yellow-100 rounded-full placeholder:text-stone-400 placeholder:text-sm md:placeholder:text-base"
        />
      </search>
    </form>
  );
}
