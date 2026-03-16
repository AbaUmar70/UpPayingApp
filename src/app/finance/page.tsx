'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui';
import { revenueStreams, transactions } from '@/lib/data/mockData';
import { formatCurrency, formatCompactNumber, formatNumber } from '@/lib/utils';
import { DollarSign, TrendingUp, TrendingDown, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function FinancePage() {
  const totalRevenue = revenueStreams.reduce((sum, s) => sum + s.value, 0);
  const totalTransactions = transactions.length;
  const avgTransactionValue = totalRevenue / totalTransactions;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Finance Management</h1>
          <p className="text-gray-400 mt-1">Revenue tracking, expenses, and reconciliation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Revenue</p>
              <p className="text-xl font-bold text-white font-mono">{formatCurrency(totalRevenue)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Transactions</p>
              <p className="text-xl font-bold text-white">{formatNumber(totalTransactions)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <PieChart className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Avg. Transaction</p>
              <p className="text-xl font-bold text-white font-mono">{formatCurrency(avgTransactionValue)}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <ArrowUpRight className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Monthly Growth</p>
              <p className="text-xl font-bold text-white">+15.2%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Streams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueStreams.map((stream, index) => {
                const colors = ['bg-emerald-500', 'bg-blue-500', 'bg-purple-500', 'bg-gray-500'];
                return (
                  <div key={stream.name} className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${colors[index]}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-300">{stream.name}</span>
                        <span className="text-sm font-medium text-white">{stream.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className={`${colors[index]} h-2 rounded-full`}
                          style={{ width: `${stream.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-mono text-gray-400 w-24 text-right">
                      {formatCurrency(stream.value)}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <ArrowUpRight className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-400">Income</p>
                    <p className="text-lg font-bold text-white font-mono">{formatCurrency(totalRevenue)}</p>
                  </div>
                </div>
                <Badge variant="status" status="completed">+12.5%</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <ArrowDownRight className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-sm text-gray-400">Expenses</p>
                    <p className="text-lg font-bold text-white font-mono">{formatCurrency(30000000)}</p>
                  </div>
                </div>
                <Badge variant="status" status="pending">+8.2%</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-400">Net Profit</p>
                    <p className="text-xl font-bold text-emerald-400 font-mono">{formatCurrency(totalRevenue - 30000000)}</p>
                  </div>
                </div>
                <Badge variant="status" status="active">Healthy</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
