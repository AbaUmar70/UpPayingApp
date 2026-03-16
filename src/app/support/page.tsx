'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui';
import { DataTable } from '@/components/tables';
import { supportTickets } from '@/lib/data/mockData';
import { formatDateTime } from '@/lib/utils';
import { Headphones, Plus, Clock, AlertTriangle, CheckCircle, MoreVertical } from 'lucide-react';

const columns = [
  { key: 'ticketNumber', header: 'Ticket #', sortable: true },
  { 
    key: 'subject', 
    header: 'Subject',
    render: (ticket: typeof supportTickets[0]) => (
      <span className="text-white">{ticket.subject}</span>
    ),
  },
  { 
    key: 'customerName', 
    header: 'Customer',
    render: (ticket: typeof supportTickets[0]) => (
      <span className="text-gray-300">{ticket.customerName}</span>
    ),
  },
  { 
    key: 'priority', 
    header: 'Priority',
    render: (ticket: typeof supportTickets[0]) => (
      <Badge variant="status" status={ticket.priority}>
        {ticket.priority}
      </Badge>
    ),
  },
  { 
    key: 'status', 
    header: 'Status',
    render: (ticket: typeof supportTickets[0]) => (
      <Badge variant="status" status={ticket.status}>
        {ticket.status.replace('_', ' ')}
      </Badge>
    ),
  },
  { 
    key: 'assignedTo', 
    header: 'Assigned To',
    render: (ticket: typeof supportTickets[0]) => (
      ticket.assignedTo || <span className="text-gray-500">Unassigned</span>
    ),
  },
  { 
    key: 'createdAt', 
    header: 'Created',
    sortable: true,
    render: (ticket: typeof supportTickets[0]) => (
      <span className="text-gray-400">{formatDateTime(ticket.createdAt)}</span>
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

export default function SupportPage() {
  const openTickets = supportTickets.filter(t => t.status === 'open').length;
  const urgentTickets = supportTickets.filter(t => t.priority === 'urgent' && t.status !== 'closed').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Customer Support</h1>
          <p className="text-gray-400 mt-1">Manage support tickets and customer disputes</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Headphones className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Tickets</p>
              <p className="text-xl font-bold text-white">{supportTickets.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Open</p>
              <p className="text-xl font-bold text-white">{openTickets}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Urgent</p>
              <p className="text-xl font-bold text-white">{urgentTickets}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CheckCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Resolved</p>
              <p className="text-xl font-bold text-white">{supportTickets.filter(t => t.status === 'resolved' || t.status === 'closed').length}</p>
            </div>
          </div>
        </Card>
      </div>

      <DataTable
        title="Support Tickets"
        data={supportTickets}
        columns={columns}
        searchPlaceholder="Search by ticket number or subject..."
      />
    </div>
  );
}
