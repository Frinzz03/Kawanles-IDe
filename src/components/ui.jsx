import React from 'react';
import { cn } from '@/lib/utils';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  const variants = {
    primary:
      'bg-[#0F4C42] text-white hover:bg-[#0A3B33] active:scale-[0.99] border border-[#0F4C42]',
    emerald:
      'bg-[#D96B27] text-white hover:bg-[#BD591B] active:scale-[0.99] border border-[#D96B27]',
    secondary:
      'bg-white text-[#1A2421] border border-[#DDD5C7] hover:bg-[#F6F2EA] hover:border-[#C9BFA9]',
    ghost:
      'text-[#51615C] hover:bg-[#EFEAE0] hover:text-[#1A2421] border border-transparent',
    danger:
      'bg-[#B93838] text-white hover:bg-[#9B2C2C] border border-[#B93838]',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2 text-sm rounded-xl',
    lg: 'px-5 py-2.5 text-sm rounded-xl',
  };
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ children, className, elevated = false, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl',
        elevated
          ? 'shadow-[0_10px_28px_-10px_rgba(26,36,33,0.12),0_2px_6px_-1px_rgba(26,36,33,0.05)]'
          : 'border border-[#E6DFD2]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold',
        className || 'bg-[#EFEAE0] text-[#43524D]'
      )}
    >
      {children}
    </span>
  );
}

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full rounded-xl border border-[#DDD5C7] bg-white px-3.5 py-2.5 text-sm text-[#1A2421] placeholder:text-[#8A9690] focus:border-[#0F4C42] focus:ring-2 focus:ring-[#0F4C42]/15 outline-none transition duration-150',
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'w-full rounded-xl border border-[#DDD5C7] bg-white px-3.5 py-2.5 text-sm text-[#1A2421] placeholder:text-[#8A9690] focus:border-[#0F4C42] focus:ring-2 focus:ring-[#0F4C42]/15 outline-none transition duration-150',
        className
      )}
      {...props}
    />
  );
}

export function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        'w-full rounded-xl border border-[#DDD5C7] bg-white px-3.5 py-2.5 text-sm text-[#1A2421] focus:border-[#0F4C42] focus:ring-2 focus:ring-[#0F4C42]/15 outline-none transition duration-150',
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Skeleton({ className }) {
  return <div className={cn('animate-pulse rounded-xl bg-[#EAE3D6]', className)} />;
}
