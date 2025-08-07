import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-ring disabled:opacity-50 disabled:pointer-events-none';

    const variantClasses = {
      default:
        'bg-primary text-primary-foreground hover:bg-primary/90',
      primary:
        'bg-accent-blue text-white hover:bg-accent-blue/90',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      danger:
        'bg-accent-red text-white hover:bg-accent-red/90',
    };

    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };