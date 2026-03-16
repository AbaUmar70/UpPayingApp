import { classNames } from '@/lib/utils';
import { getStatusColor } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  status?: string;
  className?: string;
  variant?: 'default' | 'status';
}

export function Badge({ children, status, className, variant = 'default' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  if (variant === 'status' && status) {
    return (
      <span className={classNames(baseStyles, getStatusColor(status), className)}>
        {children}
      </span>
    );
  }

  return (
    <span className={classNames(baseStyles, 'bg-gray-800 text-gray-300', className)}>
      {children}
    </span>
  );
}
