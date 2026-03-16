'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui';
import { DataTable } from '@/components/tables';
import { agents } from '@/lib/data/mockData';
import { formatCurrency, formatNumber, formatDate } from '@/lib/utils';
import { Users, Plus, MapPin, Star, MoreVertical } from 'lucide-react';

const columns = [
  { 
    key: 'name', 
    header: 'Agent',
    render: (agent: typeof agents[0]) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-medium">
          {agent.firstName.charAt(0)}{agent.lastName.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-white">{agent.firstName} {agent.lastName}</p>
          <p className="text-sm text-gray-500">{agent.email}</p>
        </div>
      </div>
    ),
  },
  { key: 'phone', header: 'Phone' },
  { 
    key: 'territory', 
    header: 'Territory',
    render: (agent: typeof agents[0]) => (
      <div className="flex items-center gap-2 text-gray-400">
        <MapPin className="w-4 h-4" />
        {agent.territory}
      </div>
    ),
  },
  { 
    key: 'walletBalance', 
    header: 'Wallet Balance',
    sortable: true,
    render: (agent: typeof agents[0]) => (
      <span className="font-mono text-white">{formatCurrency(agent.walletBalance)}</span>
    ),
  },
  { 
    key: 'totalTransactions', 
    header: 'Transactions',
    sortable: true,
    render: (agent: typeof agents[0]) => (
      <span className="font-mono">{formatNumber(agent.totalTransactions)}</span>
    ),
  },
  { 
    key: 'rating', 
    header: 'Rating',
    sortable: true,
    render: (agent: typeof agents[0]) => (
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-amber-400 fill-current" />
        <span className="text-white">{agent.rating.toFixed(1)}</span>
      </div>
    ),
  },
  { 
    key: 'status', 
    header: 'Status',
    render: (agent: typeof agents[0]) => (
      <Badge variant="status" status={agent.status}>
        {agent.status.replace('_', ' ')}
      </Badge>
    ),
  },
  { 
    key: 'joinedAt', 
    header: 'Joined',
    sortable: true,
    render: (agent: typeof agents[0]) => (
      <span className="text-gray-400">{formatDate(agent.joinedAt)}</span>
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

export default function AgentsPage() {
  const activeAgents = agents.filter(a => a.status === 'active').length;
  const totalCommission = agents.reduce((sum, a) => sum + (a.walletBalance * a.commissionRate / 100), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Agent Management</h1>
          <p className="text-gray-400 mt-1">Manage field agents and merchant partners</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Agent
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Agents</p>
              <p className="text-xl font-bold text-white">{agents.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Active</p>
              <p className="text-xl font-bold text-white">{activeAgents}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending</p>
              <p className="text-xl font-bold text-white">{agents.filter(a => a.status === 'pending_verification').length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Users className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Commission</p>
              <p className="text-xl font-bold text-white font-mono">{formatCurrency(totalCommission)}</p>
            </div>
          </div>
        </Card>
      </div>

      <DataTable
        title="All Agents"
        data={agents}
        columns={columns}
        searchPlaceholder="Search by name or email..."
      />
    </div>
  );
}
