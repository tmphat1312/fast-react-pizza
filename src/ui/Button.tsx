import { twMerge } from 'tailwind-merge';

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        'inline-block px-3 py-2 md:px-4 md:py-3 font-semibold tracking-wide uppercase transition-colors rounded-full bg-primary-400 text-stone-800 hover:bg-primary-300 active:bg-primary-500 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
