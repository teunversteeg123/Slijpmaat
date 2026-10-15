import React from 'react';

export type UIconSize = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

export interface UIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  brand?: boolean;
  size?: UIconSize;
  className?: string;
  title?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
}

const SIZE_CLASSES: Record<UIconSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl',
  '2xl': 'text-3xl',
};

/**
 * UIcon: Renders official Flaticon UIcons (Regular Rounded / Brands)
 * https://www.flaticon.com/uicons
 */
export const UIcon: React.FC<UIconProps> = ({
  name,
  brand = false,
  size,
  className = '',
  title,
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const prefix = brand ? 'fi fi-brands' : 'fi fi-rr';
  const iconClass = `${prefix}-${name}`;
  const sizeClass = size ? SIZE_CLASSES[size] : '';
  const isAriaHidden = ariaHidden ?? (ariaLabel ? false : true);

  return (
    <i
      className={`uicon-center ${iconClass} ${sizeClass} ${className}`.trim()}
      title={title}
      aria-hidden={isAriaHidden}
      aria-label={ariaLabel}
      {...rest}
    />
  );
};

export type UIconBadgeVariant =
  | 'soft'
  | 'green'
  | 'sage'
  | 'coral'
  | 'peach'
  | 'cream'
  | 'white'
  | 'dark';

export type UIconBadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface UIconBadgeProps {
  name: string;
  brand?: boolean;
  variant?: UIconBadgeVariant;
  size?: UIconBadgeSize;
  rounded?: 'full' | 'xl' | '2xl' | 'lg';
  className?: string;
  iconClassName?: string;
  'aria-label'?: string;
}

const BADGE_VARIANTS: Record<UIconBadgeVariant, string> = {
  soft: 'bg-[#E8EFE8] text-[#3B7F4B] border border-[#d9e1d7]/70',
  green: 'bg-[#3B7F4B] text-white shadow-sm',
  sage: 'bg-[#A9C89E]/25 text-[#244A30] border border-[#A9C89E]/40',
  coral: 'bg-[#F9E4DE] text-[#C95E3E] border border-[#E87B5B]/30',
  peach: 'bg-[#F9E4DE] text-[#244A30]',
  cream: 'bg-[#F7F4EC] text-[#244A30] border border-[#d9e1d7]',
  white: 'bg-white text-[#3B7F4B] shadow-sm border border-[#d9e1d7]',
  dark: 'bg-[#203728] text-[#A9C89E] border border-[#244A30]',
};

// Carefully tuned responsive size scale for mobile and desktop screens
const BADGE_SIZES: Record<UIconBadgeSize, { container: string; icon: string }> = {
  xs: {
    container: 'w-6 h-6 sm:w-7 sm:h-7',
    icon: 'text-xs sm:text-xs',
  },
  sm: {
    container: 'w-8 h-8 sm:w-9 sm:h-9',
    icon: 'text-sm sm:text-sm',
  },
  md: {
    container: 'w-10 h-10 sm:w-11 sm:h-11',
    icon: 'text-base sm:text-lg',
  },
  lg: {
    container: 'w-11 h-11 sm:w-13 sm:h-13',
    icon: 'text-lg sm:text-xl',
  },
  xl: {
    container: 'w-13 h-13 sm:w-16 sm:h-16',
    icon: 'text-xl sm:text-2xl',
  },
};

const ROUNDED_CLASSES = {
  full: 'rounded-full',
  '2xl': 'rounded-2xl',
  xl: 'rounded-xl',
  lg: 'rounded-lg',
};

/**
 * UIconBadge: A polished, responsive badge container for UIcons.
 * Balances geometry, line-height, and padding across mobile & desktop.
 */
export const UIconBadge: React.FC<UIconBadgeProps> = ({
  name,
  brand = false,
  variant = 'soft',
  size = 'md',
  rounded = '2xl',
  className = '',
  iconClassName = '',
  'aria-label': ariaLabel,
}) => {
  const variantClass = BADGE_VARIANTS[variant];
  const sizeConfig = BADGE_SIZES[size];
  const roundedClass = ROUNDED_CLASSES[rounded];

  return (
    <div
      className={`uicon-center shrink-0 transition-transform duration-200 ${sizeConfig.container} ${variantClass} ${roundedClass} ${className}`.trim()}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    >
      <UIcon
        name={name}
        brand={brand}
        className={`${sizeConfig.icon} ${iconClassName}`.trim()}
      />
    </div>
  );
};
