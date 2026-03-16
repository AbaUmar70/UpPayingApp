'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui';
import { DataTable } from '@/components/tables';
import { transactions } from '@/lib/data/mockData';
import { formatCurrency, formatDateTime } from '@/lib/utils';
import { ArrowLeftRight, Plus, Filter, MoreVertical } from 'lucide-react';

const columns = [
  { key: 'reference', header: 'Reference', sortable: true },
  { 
    key: 'type', 
    header: 'Type',
    render: (tx: typeof transactions[0]) => (
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded ${
          tx.type === 'transfer' ? 'bg-blue-500/10 text-blue-400' :
          tx.type === 'cash_in' ? 'bg-emerald-500/10 text-emerald-400' :
          tx.type === 'cash_out' ? 'bg-amber-500/10 text-amber-400' :
          tx.type === 'payment' ? 'bg-purple-500/10 text-purple-400' :
          'bg-gray-500/10 text-gray-400'
        }`}>
          <ArrowLeftRight className="w-3 h-3" />
        </div>
        <span className="capitalize text-white">{tx.type.replace('_', ' ')}</span>
      </div>
    ),
  },
  { 
    key: 'fromName', 
    header: 'From',
    render: (tx: typeof transactions[0]) => (
      <div>
        <p className="text-white">{tx.fromName}</p>
        <p className="text-xs text-gray-500">Wallet: {tx.fromWalletId}</p>
      </div>
    ),
  },
  { 
    key: 'toName', 
    header: 'To',
    render: (tx: typeof transactions[0]) => (
      <div>
        <p className="text-white">{tx.toName}</p>
        <p className="text-xs text-gray-500">Wallet: {tx.toWalletId}</p>
      </div>
    ),
  },
  { 
    key: 'amount', 
    header: 'Amount',
    sortable: true,
    render: (tx: typeof transactions[0]) => (
      <span className="font-mono text-white">{formatCurrency(tx.amount)}</span>
    ),
  },
  { 
    key: 'fee', 
    header: 'Fee',
    render: (tx: typeof transactions[0]) => (
      <span className="font-mono text-gray-400">{formatCurrency(tx.fee)}</span>
    ),
  },
  { 
    key: 'status', 
    header: 'Status',
    render: (tx: typeof transactions[0]) => (
      <Badge variant="status" status={tx.status}>
        {tx.status}
      </Badge>
    ),
  },
  { 
    key: 'createdAt', 
    header: 'Date',
    sortable: true,
    render: (tx: typeof transactions[0]) => (
      <span className="text-gray-400">{formatDateTime(tx.createdAt)}</span>
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

export default function TransactionsPage() {
  const totalVolume = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const totalFees = transactions.reduce((sum, tx) => sum + tx.fee, 0);
  const successful = transactions.filter(tx => tx.status === 'completed').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Transaction Processing</h1>
          <p className="text-gray-400 mt-1">View and manage all wallet transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <ArrowLeftRight className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Transactions</p>
              <p className="text-xl font-bold text-white">{transactions.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <ArrowLeftRight className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Volume</p>
              <p className="text-xl font-bold text-white font-mono">{formatCurrency(totalVolume)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <ArrowLeftRight className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Fees Collected</p>
              <p className="text-xl font-bold text-white font-mono">{formatCurrency(totalFees)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <ArrowLeftRight className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Success Rate</p>
              <p className="text-xl font-bold text-white">{((successful / transactions.length) * 100).toFixed(0)}%</p>
            </div>
          </div>
        </Card>
      </div>

      <DataTable
        title="All Transactions"
        data={transactions}
        columns={columns}
        searchPlaceholder="Search by reference..."
      />
    </div>
  );
}
