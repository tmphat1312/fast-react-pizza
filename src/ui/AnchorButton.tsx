import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function AnchorButton({
  children,
  className,
  ...props
}: LinkProps) {
  return (
    <Link
      {...props}
      className={twMerge(
        'text-sm text-blue-500 hover:text-blue-600 hover:underline underline-offset-2',
        className,
      )}
    >
      {children}
    </Link>
  );
}
