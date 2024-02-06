import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import BackButton from './BackButton';

export default function ErrorElement() {
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

      <BackButton />
    </div>
  );
}
