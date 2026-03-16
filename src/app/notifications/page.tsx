'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui';
import { notifications } from '@/lib/data/mockData';
import { formatDateTime } from '@/lib/utils';
import { Bell, Plus, Mail, MessageSquare, Smartphone, MoreVertical } from 'lucide-react';

const typeIcons = {
  sms: Smartphone,
  email: Mail,
  push: MessageSquare,
};

export default function NotificationsPage() {
  const sentNotifications = notifications.filter(n => n.status === 'sent').length;
  const pendingNotifications = notifications.filter(n => n.status === 'pending').length;
  const failedNotifications = notifications.filter(n => n.status === 'failed').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Notification System</h1>
          <p className="text-gray-400 mt-1">Send SMS, Email, and Push notifications</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Notification
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Bell className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total</p>
              <p className="text-xl font-bold text-white">{notifications.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Bell className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Sent</p>
              <p className="text-xl font-bold text-white">{sentNotifications}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Bell className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending</p>
              <p className="text-xl font-bold text-white">{pendingNotifications}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Bell className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Failed</p>
              <p className="text-xl font-bold text-white">{failedNotifications}</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notification Log</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Recipient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Sent At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {notifications.map((notification) => {
                const Icon = typeIcons[notification.type];
                return (
                  <tr key={notification.id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 capitalize">{notification.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-gray-400">{notification.recipient}</td>
                    <td className="px-6 py-4 text-white">{notification.subject || '-'}</td>
                    <td className="px-6 py-4 text-gray-400 max-w-xs truncate">{notification.message}</td>
                    <td className="px-6 py-4">
                      <Badge variant="status" status={notification.status}>
                        {notification.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {notification.sentAt ? formatDateTime(notification.sentAt) : '-'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
