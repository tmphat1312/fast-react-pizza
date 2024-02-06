import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function BackButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      {...props}
      className={twMerge(
        'text-sm text-blue-500 hover:text-blue-600 hover:underline underline-offset-2',
        className,
      )}
    >
      <span role="presentation">&larr; </span>
      <span>{children ? children : 'Go back'}</span>
    </button>
  );
}
