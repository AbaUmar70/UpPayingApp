'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui';
import { DataTable } from '@/components/tables';
import { posDevices } from '@/lib/data/mockData';
import { formatDateTime, formatRelativeTime } from '@/lib/utils';
import { CreditCard, Plus, Signal, MoreVertical } from 'lucide-react';

const columns = [
  { key: 'serialNumber', header: 'Serial Number', sortable: true },
  { 
    key: 'model', 
    header: 'Model',
    render: (device: typeof posDevices[0]) => (
      <span className="text-white">{device.model}</span>
    ),
  },
  { 
    key: 'assignedAgentName', 
    header: 'Assigned Agent',
    render: (device: typeof posDevices[0]) => (
      device.assignedAgentName || <span className="text-gray-500">Unassigned</span>
    ),
  },
  { 
    key: 'simNumber', 
    header: 'SIM Number',
    render: (device: typeof posDevices[0]) => (
      <span className="font-mono text-gray-400">{device.simNumber}</span>
    ),
  },
  { 
    key: 'carrier', 
    header: 'Carrier',
    render: (device: typeof posDevices[0]) => (
      <Badge>{device.carrier}</Badge>
    ),
  },
  { 
    key: 'lastSeen', 
    header: 'Last Seen',
    sortable: true,
    render: (device: typeof posDevices[0]) => (
      <span className="text-gray-400">{formatRelativeTime(device.lastSeen)}</span>
    ),
  },
  { 
    key: 'status', 
    header: 'Status',
    render: (device: typeof posDevices[0]) => (
      <Badge variant="status" status={device.status}>
        {device.status}
      </Badge>
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

export default function POSPage() {
  const activeDevices = posDevices.filter(d => d.status === 'active').length;
  const assignedDevices = posDevices.filter(d => d.assignedAgentId).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">POS Device Management</h1>
          <p className="text-gray-400 mt-1">Manage POS terminals and assignments</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Device
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <CreditCard className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Devices</p>
              <p className="text-xl font-bold text-white">{posDevices.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Signal className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Active</p>
              <p className="text-xl font-bold text-white">{activeDevices}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <CreditCard className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Assigned</p>
              <p className="text-xl font-bold text-white">{assignedDevices}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <CreditCard className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Maintenance</p>
              <p className="text-xl font-bold text-white">{posDevices.filter(d => d.status === 'maintenance').length}</p>
            </div>
          </div>
        </Card>
      </div>

      <DataTable
        title="All Devices"
        data={posDevices}
        columns={columns}
        searchPlaceholder="Search by serial number or model..."
      />
    </div>
  );
}
