'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Wallet, Users, CreditCard, ArrowLeftRight, 
  BookOpen, Headphones, DollarSign, UsersRound, ShieldCheck, 
  Bell, Key, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { useState } from 'react';
import { classNames } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Wallets', href: '/wallets', icon: Wallet },
  { name: 'Agents', href: '/agents', icon: Users },
  { name: 'POS Devices', href: '/pos', icon: CreditCard },
  { name: 'Transactions', href: '/transactions', icon: ArrowLeftRight },
  { name: 'Ledger', href: '/ledger', icon: BookOpen },
  { name: 'Support', href: '/support', icon: Headphones },
  { name: 'Finance', href: '/finance', icon: DollarSign },
  { name: 'HR', href: '/hr', icon: UsersRound },
  { name: 'Compliance', href: '/compliance', icon: ShieldCheck },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'API Management', href: '/api-management', icon: Key },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={classNames(
        'fixed left-0 top-0 h-screen bg-gray-900 border-r border-gray-800 flex flex-col transition-all duration-300 z-40',
        collapsed ? 'w-[72px]' : 'w-[280px]'
      )}
    >
      <div className="h-16 flex items-center px-4 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">U</span>
          </div>
          {!collapsed && (
            <span className="text-white font-bold text-xl">UpPaying</span>
          )}
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group',
                    isActive
                      ? 'bg-emerald-600/10 text-emerald-400 border-l-2 border-emerald-500'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  )}
                >
                  <item.icon className={classNames('w-5 h-5 flex-shrink-0', isActive && 'text-emerald-400')} />
                  {!collapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-gray-800">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
