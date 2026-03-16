export function formatCurrency(amount: number, currency = 'NGN'): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-NG').format(num);
}

export function formatCompactNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d);
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
}

export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return formatDate(d);
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    active: 'bg-emerald-500/20 text-emerald-400',
    verified: 'bg-emerald-500/20 text-emerald-400',
    completed: 'bg-emerald-500/20 text-emerald-400',
    resolved: 'bg-emerald-500/20 text-emerald-400',
    approved: 'bg-emerald-500/20 text-emerald-400',
    posted: 'bg-emerald-500/20 text-emerald-400',
    sent: 'bg-emerald-500/20 text-emerald-400',
    investigating: 'bg-blue-500/20 text-blue-400',
    inactive: 'bg-gray-500/20 text-gray-400',
    pending: 'bg-amber-500/20 text-amber-400',
    submitted: 'bg-amber-500/20 text-amber-400',
    in_progress: 'bg-amber-500/20 text-amber-400',
    draft: 'bg-amber-500/20 text-amber-400',
    pending_verification: 'bg-amber-500/20 text-amber-400',
    maintenance: 'bg-amber-500/20 text-amber-400',
    frozen: 'bg-red-500/20 text-red-400',
    closed: 'bg-red-500/20 text-red-400',
    failed: 'bg-red-500/20 text-red-400',
    rejected: 'bg-red-500/20 text-red-400',
    suspended: 'bg-red-500/20 text-red-400',
    critical: 'bg-red-500/20 text-red-400',
    high: 'bg-orange-500/20 text-orange-400',
    urgent: 'bg-orange-500/20 text-orange-400',
    medium: 'bg-amber-500/20 text-amber-400',
    low: 'bg-blue-500/20 text-blue-400',
    open: 'bg-amber-500/20 text-amber-400',
    dismissed: 'bg-gray-500/20 text-gray-400',
    retired: 'bg-gray-500/20 text-gray-400',
  };
  return colors[status] || 'bg-gray-500/20 text-gray-400';
}

export function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export function generateAccountNumber(): string {
  const prefix = '890';
  const random = Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(7, '0');
  return prefix + random;
}

export function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
