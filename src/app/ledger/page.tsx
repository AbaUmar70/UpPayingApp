'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui';
import { ledgerAccounts, journalEntries } from '@/lib/data/mockData';
import { formatCurrency, formatDate } from '@/lib/utils';
import { BookOpen, Plus, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';

export default function LedgerPage() {
  const totalAssets = ledgerAccounts.filter(a => a.accountType === 'asset').reduce((sum, a) => sum + a.balance, 0);
  const totalLiabilities = ledgerAccounts.filter(a => a.accountType === 'liability').reduce((sum, a) => sum + a.balance, 0);
  const totalEquity = ledgerAccounts.filter(a => a.accountType === 'equity').reduce((sum, a) => sum + a.balance, 0);
  const totalRevenue = ledgerAccounts.filter(a => a.accountType === 'revenue').reduce((sum, a) => sum + a.balance, 0);
  const totalExpenses = ledgerAccounts.filter(a => a.accountType === 'expense').reduce((sum, a) => sum + a.balance, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Double-Entry Ledger</h1>
          <p className="text-gray-400 mt-1">Financial core - accounts and journal entries</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Assets</p>
              <p className="text-lg font-bold text-white font-mono">{formatCurrency(totalAssets)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <TrendingDown className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Liabilities</p>
              <p className="text-lg font-bold text-white font-mono">{formatCurrency(totalLiabilities)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <BookOpen className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Equity</p>
              <p className="text-lg font-bold text-white font-mono">{formatCurrency(totalEquity)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Revenue</p>
              <p className="text-lg font-bold text-white font-mono">{formatCurrency(totalRevenue)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <TrendingDown className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Expenses</p>
              <p className="text-lg font-bold text-white font-mono">{formatCurrency(totalExpenses)}</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chart of Accounts</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Account Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Account Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Type</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {ledgerAccounts.map((account) => (
                <tr key={account.id} className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-mono text-gray-400">{account.accountCode}</td>
                  <td className="px-6 py-4 text-white">{account.accountName}</td>
                  <td className="px-6 py-4">
                    <Badge variant="status" status={account.accountType}>{account.accountType}</Badge>
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-white">{formatCurrency(account.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Journal Entries</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Entry #</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Description</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">Debit</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">Credit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {journalEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-mono text-emerald-400">{entry.entryNumber}</td>
                  <td className="px-6 py-4 text-gray-400">{formatDate(entry.date)}</td>
                  <td className="px-6 py-4 text-white">{entry.description}</td>
                  <td className="px-6 py-4 text-right font-mono text-gray-300">{formatCurrency(entry.debitTotal)}</td>
                  <td className="px-6 py-4 text-right font-mono text-gray-300">{formatCurrency(entry.creditTotal)}</td>
                  <td className="px-6 py-4">
                    <Badge variant="status" status={entry.status}>{entry.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
