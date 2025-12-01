import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '../../styles/utils';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-semibold uppercase tracking-[0.4em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-brand to-brand-accent text-white shadow-lg shadow-brand/30',
        secondary: 'border border-white/30 text-white hover:border-brand hover:text-brand',
        ghost: 'text-white/70 hover:text-white',
      },
      size: {
        default: 'px-8 py-3',
        lg: 'px-10 py-4',
        sm: 'px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonStyles({ variant, size }), className)} {...props} />
  ),
);

Button.displayName = 'Button';


