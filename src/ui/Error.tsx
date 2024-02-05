import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router-dom';

export default function ErrorElement() {
  const navigate = useNavigate();
  const error = useRouteError();
  let message: string;

  if (isRouteErrorResponse(error)) {
    message = error.data;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'An unknown error occurred';
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{message}</p>
      <button onClick={() => navigate(-1)}>
        <span role="presentation">&larr;</span> Go back
      </button>
    </div>
  );
}
