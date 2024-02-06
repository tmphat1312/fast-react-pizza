import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md';
  variant?: 'primary';
};

const SIZE_VARIANTS = {
  sm: 'px-3  py-2 text-xs md:px-4 md:py-2.5',
  md: 'px-4 py-3 text-base md:px-5',
};

const STYLE_VARIANTS = {
  primary: 'bg-primary-400 text-stone-800',
};

export default function Button({
  children,
  size,
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'inline-block font-semibold tracking-wide uppercase  ',
        '[&:not(:disabled)]:hover:brightness-110 [&:not(:disabled)]:active:brightness-90',
        'transition-colors rounded-full disabled:grayscale disabled:cursor-not-allowed',
        SIZE_VARIANTS[size ?? 'md'],
        STYLE_VARIANTS[variant ?? 'primary'],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
