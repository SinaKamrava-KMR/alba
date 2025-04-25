import React from 'react';

// Utility to merge class names
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Variant class mappings
const VARIANT_STYLES: Record<string, string> = {
  default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline: 'border border-gray-300 text-foreground hover:bg-gray-100',
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof VARIANT_STYLES;
}

/**
 * Badge component for labeling with different variants.
 * Supports `default`, `secondary`, `destructive`, and `outline`.
 */
export default function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.default;
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variantClass,
        className
      )}
      {...props}
    />
  );
}
