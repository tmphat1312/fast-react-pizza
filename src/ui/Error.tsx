import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>%MESSAGE%</p>
      <button onClick={() => navigate(-1)}>
        <span role="presentation">&larr;</span> Go back
      </button>
    </div>
  );
}
