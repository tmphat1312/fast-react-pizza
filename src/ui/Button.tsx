import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: keyof typeof SIZE_VARIANTS;
  variant?: keyof typeof STYLE_VARIANTS;
};

const SIZE_VARIANTS = {
  sm: 'px-3  py-2 text-xs md:px-4 md:py-2.5',
  md: 'px-4 py-3 text-base md:px-5',
};

const STYLE_VARIANTS = {
  primary: 'bg-primary-400 text-stone-800',
  secondary:
    'text-stone-500 hover:text-stone-800 hover:bg-stone-300 border-2 border-stone-300',
};

export default function Button({
  children,
  size = 'md',
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'inline-block font-semibold tracking-wide uppercase transition-colors rounded-full',
        '[&:not(:disabled)]:hover:brightness-110 [&:not(:disabled)]:active:brightness-90',
        'disabled:grayscale disabled:cursor-not-allowed',
        SIZE_VARIANTS[size],
        STYLE_VARIANTS[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
