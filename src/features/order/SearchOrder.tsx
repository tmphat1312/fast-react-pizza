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

    console.log('searching for order', query);
  }

  return (
    <form action="/" onSubmit={handleSubmit}>
      <search>
        <input
          type="text"
          placeholder="search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </search>
    </form>
  );
}
