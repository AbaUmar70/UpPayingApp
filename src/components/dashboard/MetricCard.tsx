import { Card } from '@/components/ui';
import { classNames, formatCurrency, formatNumber, formatCompactNumber } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  formatted?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: ReactNode;
  className?: string;
}

export function MetricCard({ title, value, formatted, trend, icon, className }: MetricCardProps) {
  return (
    <Card className={classNames('p-6', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400 font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-2 font-mono">
            {formatted || value}
          </p>
          {trend && (
            <div className={classNames(
              'flex items-center gap-1 mt-2 text-sm',
              trend.isPositive ? 'text-emerald-400' : 'text-red-400'
            )}>
              {trend.isPositive ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{trend.value}%</span>
              <span className="text-gray-500">vs last week</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="p-3 bg-emerald-600/10 rounded-lg text-emerald-400">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export { formatCurrency, formatNumber, formatCompactNumber };
