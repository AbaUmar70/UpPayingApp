'use client';

import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui';
import { customers, complianceAlerts } from '@/lib/data/mockData';
import { formatDateTime } from '@/lib/utils';
import { ShieldCheck, AlertTriangle, FileCheck, MoreVertical } from 'lucide-react';

export default function CompliancePage() {
  const verifiedCustomers = customers.filter(c => c.kycStatus === 'verified').length;
  const pendingKYCs = customers.filter(c => c.kycStatus === 'pending' || c.kycStatus === 'submitted').length;
  const openAlerts = complianceAlerts.filter(a => a.status === 'open').length;
  const criticalAlerts = complianceAlerts.filter(a => a.severity === 'critical' && a.status !== 'resolved').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Compliance & KYC</h1>
          <p className="text-gray-400 mt-1">Identity verification and AML monitoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <FileCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Verified</p>
              <p className="text-xl font-bold text-white">{verifiedCustomers}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <FileCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending KYC</p>
              <p className="text-xl font-bold text-white">{pendingKYCs}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Open Alerts</p>
              <p className="text-xl font-bold text-white">{openAlerts}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Critical</p>
              <p className="text-xl font-bold text-white">{criticalAlerts}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>KYC Queue</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Risk Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {customers.filter(c => c.kycStatus !== 'verified').map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-white">{customer.firstName} {customer.lastName}</p>
                        <p className="text-sm text-gray-500">{customer.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="status" status={customer.kycStatus}>
                        {customer.kycStatus}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-800 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              customer.riskScore < 30 ? 'bg-emerald-500' :
                              customer.riskScore < 60 ? 'bg-amber-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.min(customer.riskScore, 100)}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400">{customer.riskScore}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm">Review</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Alerts</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {complianceAlerts.map((alert) => (
                  <tr key={alert.id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {alert.type === 'kyc' && <FileCheck className="w-4 h-4 text-blue-400" />}
                        {alert.type === 'aml' && <AlertTriangle className="w-4 h-4 text-red-400" />}
                        {alert.type === 'fraud' && <ShieldCheck className="w-4 h-4 text-orange-400" />}
                        <span className="text-gray-300 capitalize">{alert.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="status" status={alert.severity}>
                        {alert.severity}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{alert.description}</td>
                    <td className="px-6 py-4">
                      <Badge variant="status" status={alert.status}>
                        {alert.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
