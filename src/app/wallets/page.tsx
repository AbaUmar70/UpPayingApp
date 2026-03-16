'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input } from '@/components/ui';
import { DataTable } from '@/components/tables';
import { wallets, customers } from '@/lib/data/mockData';
import { formatCurrency, formatDate, getStatusColor } from '@/lib/utils';
import { Wallet, Plus, Search, Filter, MoreVertical, Eye, Trash2 } from 'lucide-react';
import { useState } from 'react';

const columns = [
  { key: 'accountNumber', header: 'Account Number', sortable: true },
  { 
    key: 'customerName', 
    header: 'Customer',
    sortable: true,
  },
  { 
    key: 'tier', 
    header: 'Tier',
    render: (wallet: typeof wallets[0]) => (
      <Badge variant="status" status={wallet.tier}>
        {wallet.tier.toUpperCase()}
      </Badge>
    ),
  },
  { 
    key: 'balance', 
    header: 'Balance',
    sortable: true,
    render: (wallet: typeof wallets[0]) => (
      <span className="font-mono text-white">{formatCurrency(wallet.balance)}</span>
    ),
  },
  { 
    key: 'dailyLimit', 
    header: 'Daily Limit',
    sortable: true,
    render: (wallet: typeof wallets[0]) => (
      <span className="font-mono text-gray-400">{formatCurrency(wallet.dailyLimit)}</span>
    ),
  },
  { 
    key: 'status', 
    header: 'Status',
    render: (wallet: typeof wallets[0]) => (
      <Badge variant="status" status={wallet.status}>
        {wallet.status}
      </Badge>
    ),
  },
  { 
    key: 'createdAt', 
    header: 'Created',
    sortable: true,
    render: (wallet: typeof wallets[0]) => (
      <span className="text-gray-400">{formatDate(wallet.createdAt)}</span>
    ),
  },
  {
    key: 'actions',
    header: '',
    render: () => (
      <button className="p-1 hover:bg-gray-800 rounded">
        <MoreVertical className="w-4 h-4 text-gray-400" />
      </button>
    ),
  },
];

export default function WalletsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWallets = wallets.filter(w => 
    w.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.accountNumber.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Wallet Management</h1>
          <p className="text-gray-400 mt-1">Manage customer wallets, limits, and statuses</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Wallet
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Wallet className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Wallets</p>
              <p className="text-xl font-bold text-white">{wallets.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Wallet className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Active</p>
              <p className="text-xl font-bold text-white">{wallets.filter(w => w.status === 'active').length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Wallet className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Frozen</p>
              <p className="text-xl font-bold text-white">{wallets.filter(w => w.status === 'frozen').length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Wallet className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Balance</p>
              <p className="text-xl font-bold text-white font-mono">
                {formatCurrency(wallets.reduce((sum, w) => sum + w.balance, 0))}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <DataTable
        title="All Wallets"
        data={filteredWallets}
        columns={columns}
        searchPlaceholder="Search by name or account number..."
      />
    </div>
  );
}
