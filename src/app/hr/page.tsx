'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui';
import { DataTable } from '@/components/tables';
import { employees } from '@/lib/data/mockData';
import { formatDate } from '@/lib/utils';
import { UsersRound, Plus, Building, User, MoreVertical } from 'lucide-react';

const columns = [
  { 
    key: 'name', 
    header: 'Employee',
    render: (emp: typeof employees[0]) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
          {emp.firstName.charAt(0)}{emp.lastName.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-white">{emp.firstName} {emp.lastName}</p>
          <p className="text-sm text-gray-500">{emp.email}</p>
        </div>
      </div>
    ),
  },
  { key: 'phone', header: 'Phone' },
  { 
    key: 'department', 
    header: 'Department',
    render: (emp: typeof employees[0]) => (
      <div className="flex items-center gap-2 text-gray-300">
        <Building className="w-4 h-4 text-gray-500" />
        {emp.department}
      </div>
    ),
  },
  { key: 'role', header: 'Role' },
  { 
    key: 'status', 
    header: 'Status',
    render: (emp: typeof employees[0]) => (
      <Badge variant="status" status={emp.status}>
        {emp.status}
      </Badge>
    ),
  },
  { 
    key: 'joinedAt', 
    header: 'Joined',
    sortable: true,
    render: (emp: typeof employees[0]) => (
      <span className="text-gray-400">{formatDate(emp.joinedAt)}</span>
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

export default function HRPage() {
  const activeEmployees = employees.filter(e => e.status === 'active').length;
  const departments = [...new Set(employees.map(e => e.department))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">HR Management</h1>
          <p className="text-gray-400 mt-1">Employee management and payroll</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Employee
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <UsersRound className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Employees</p>
              <p className="text-xl font-bold text-white">{employees.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <User className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Active</p>
              <p className="text-xl font-bold text-white">{activeEmployees}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Building className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Departments</p>
              <p className="text-xl font-bold text-white">{departments.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <UsersRound className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">On Leave</p>
              <p className="text-xl font-bold text-white">2</p>
            </div>
          </div>
        </Card>
      </div>

      <DataTable
        title="All Employees"
        data={employees}
        columns={columns}
        searchPlaceholder="Search by name or email..."
      />
    </div>
  );
}
