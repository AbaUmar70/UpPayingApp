'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui';
import { apiClients } from '@/lib/data/mockData';
import { formatDateTime, formatRelativeTime } from '@/lib/utils';
import { Key, Plus, Eye, EyeOff, RefreshCw, MoreVertical, Copy } from 'lucide-react';

export default function APIManagementPage() {
  const activeClients = apiClients.filter(c => c.status === 'active').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">API & Integration</h1>
          <p className="text-gray-400 mt-1">Manage API clients and webhooks</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Key className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Clients</p>
              <p className="text-xl font-bold text-white">{apiClients.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Key className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Active</p>
              <p className="text-xl font-bold text-white">{activeClients}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Key className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">API Keys</p>
              <p className="text-xl font-bold text-white">
                {apiClients.reduce((sum, c) => sum + c.keys.length, 0)}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        {apiClients.map((client) => (
          <Card key={client.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Key className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                      <Badge variant="status" status={client.status}>
                        {client.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{client.description}</p>
                    <p className="text-xs text-gray-500 mt-2">Created: {formatDateTime(client.createdAt)}</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">API Keys</h4>
                <div className="space-y-3">
                  {client.keys.map((key) => (
                    <div key={key.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <code className="text-sm font-mono text-gray-300">{key.key}</code>
                        {key.lastUsed && (
                          <span className="text-xs text-gray-500">Last used: {formatRelativeTime(key.lastUsed)}</span>
                        )}
                        {key.expiresAt && (
                          <span className="text-xs text-amber-400">Expires: {formatDateTime(key.expiresAt)}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
