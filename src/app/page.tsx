'use client';

import { MetricCard, TransactionChart, formatCurrency, formatNumber, formatCompactNumber } from '@/components/dashboard';
import { Card, CardHeader, CardTitle, CardContent, Badge, Avatar } from '@/components/ui';
import { DataTable } from '@/components/tables';
import { dashboardMetrics, transactions, agents, revenueStreams, transactionTrends } from '@/lib/data/mockData';
import { formatRelativeTime, formatDateTime } from '@/lib/utils';
import { Wallet, Users, ArrowLeftRight, DollarSign, TrendingUp, CreditCard, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const recentTransactions = transactions.slice(0, 5);
  const topAgents = agents.filter(a => a.status === 'active').sort((a, b) => b.totalTransactions - a.totalTransactions).slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back! Here&apos;s what&apos;s happening today.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          Last updated: Just now
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Wallets"
          value={formatCompactNumber(dashboardMetrics.totalWallets)}
          trend={{ value: 12.5, isPositive: true }}
          icon={<Wallet className="w-6 h-6" />}
        />
        <MetricCard
          title="Active Agents"
          value={formatCompactNumber(dashboardMetrics.activeAgents)}
          trend={{ value: 8.2, isPositive: true }}
          icon={<Users className="w-6 h-6" />}
        />
        <MetricCard
          title="Today's Transactions"
          value={formatCompactNumber(dashboardMetrics.todayTransactions)}
          trend={{ value: 5.1, isPositive: true }}
          icon={<ArrowLeftRight className="w-6 h-6" />}
        />
        <MetricCard
          title="Today's Volume"
          value={formatCurrency(dashboardMetrics.todayVolume)}
          trend={{ value: 3.8, isPositive: true }}
          icon={<DollarSign className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Monthly Revenue"
          value={formatCurrency(dashboardMetrics.monthlyRevenue)}
          trend={{ value: 15.2, isPositive: true }}
          icon={<TrendingUp className="w-6 h-6" />}
          className="md:col-span-1"
        />
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Pending KYC</p>
              <p className="text-2xl font-bold text-white mt-2 font-mono">{dashboardMetrics.pendingKYCs}</p>
            </div>
            <div className="p-3 bg-amber-600/10 rounded-lg text-amber-400">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
          <Link href="/compliance" className="text-sm text-emerald-400 hover:text-emerald-300 mt-3 inline-block">
            View queue →
          </Link>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Open Tickets</p>
              <p className="text-2xl font-bold text-white mt-2 font-mono">{dashboardMetrics.openTickets}</p>
            </div>
            <div className="p-3 bg-blue-600/10 rounded-lg text-blue-400">
              <CreditCard className="w-6 h-6" />
            </div>
          </div>
          <Link href="/support" className="text-sm text-emerald-400 hover:text-emerald-300 mt-3 inline-block">
            View tickets →
          </Link>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TransactionChart data={transactionTrends} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Streams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueStreams.map((stream, index) => (
                <div key={stream.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-300">{stream.name}</span>
                    <span className="text-sm font-medium text-white">{stream.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: `${stream.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">₦{formatCompactNumber(stream.value)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Link href="/transactions" className="text-sm text-emerald-400 hover:text-emerald-300">
              View all →
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-800">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      tx.type === 'transfer' ? 'bg-blue-500/10 text-blue-400' :
                      tx.type === 'cash_in' ? 'bg-emerald-500/10 text-emerald-400' :
                      tx.type === 'cash_out' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-purple-500/10 text-purple-400'
                    }`}>
                      <ArrowLeftRight className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{tx.reference}</p>
                      <p className="text-xs text-gray-500">{tx.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white font-mono">-{formatCurrency(tx.amount)}</p>
                    <Badge status={tx.status} variant="status" className="mt-1">
                      {tx.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Top Agents</CardTitle>
            <Link href="/agents" className="text-sm text-emerald-400 hover:text-emerald-300">
              View all →
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-800">
              {topAgents.map((agent, index) => (
                <div key={agent.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar name={`${agent.firstName} ${agent.lastName}`} />
                      <span className="absolute -top-1 -left-1 w-5 h-5 bg-gray-900 rounded-full text-xs flex items-center justify-center text-white font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{agent.firstName} {agent.lastName}</p>
                      <p className="text-xs text-gray-500">{agent.territory}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white font-mono">{formatNumber(agent.totalTransactions)}</p>
                    <div className="flex items-center gap-1 text-xs text-amber-400 mt-1">
                      <span>★</span>
                      <span>{agent.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
