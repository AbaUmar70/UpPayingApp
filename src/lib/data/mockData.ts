import type { 
  Customer, Wallet, Transaction, Agent, POSDevice, 
  SupportTicket, Employee, LedgerAccount, JournalEntry,
  Notification, APIClient, ComplianceAlert, DashboardMetrics 
} from '@/lib/types';

export const dashboardMetrics: DashboardMetrics = {
  totalWallets: 245892,
  activeAgents: 3847,
  todayTransactions: 128456,
  todayVolume: 45678234.56,
  monthlyRevenue: 2345678.90,
  pendingKYCs: 234,
  openTickets: 89,
  activePOS: 3102,
};

export const customers: Customer[] = [
  { id: 'C001', firstName: 'John', lastName: 'Doe', email: 'john.doe@email.com', phone: '+2348012345678', kycStatus: 'verified', riskScore: 15, createdAt: new Date('2024-01-15'), walletCount: 2, totalBalance: 125000 },
  { id: 'C002', firstName: 'Sarah', lastName: 'Williams', email: 'sarah.w@email.com', phone: '+2348012345679', kycStatus: 'pending', riskScore: 25, createdAt: new Date('2024-02-20'), walletCount: 1, totalBalance: 45000 },
  { id: 'C003', firstName: 'Michael', lastName: 'Chen', email: 'm.chen@email.com', phone: '+2348012345680', kycStatus: 'verified', riskScore: 8, createdAt: new Date('2024-03-10'), walletCount: 3, totalBalance: 890000 },
  { id: 'C004', firstName: 'Amara', lastName: 'Okonkwo', email: 'amara.o@email.com', phone: '+2348012345681', kycStatus: 'submitted', riskScore: 45, createdAt: new Date('2024-04-05'), walletCount: 1, totalBalance: 23000 },
  { id: 'C005', firstName: 'David', lastName: 'Smith', email: 'd.smith@email.com', phone: '+2348012345682', kycStatus: 'verified', riskScore: 12, createdAt: new Date('2024-05-12'), walletCount: 2, totalBalance: 567000 },
  { id: 'C006', firstName: 'Fatima', lastName: 'Hassan', email: 'fatima.h@email.com', phone: '+2348012345683', kycStatus: 'rejected', riskScore: 78, createdAt: new Date('2024-06-18'), walletCount: 0, totalBalance: 0 },
  { id: 'C007', firstName: 'James', lastName: 'Wilson', email: 'j.wilson@email.com', phone: '+2348012345684', kycStatus: 'verified', riskScore: 5, createdAt: new Date('2024-07-22'), walletCount: 1, totalBalance: 234000 },
  { id: 'C008', firstName: 'Grace', lastName: 'Momoh', email: 'grace.m@email.com', phone: '+2348012345685', kycStatus: 'pending', riskScore: 32, createdAt: new Date('2024-08-30'), walletCount: 1, totalBalance: 12000 },
];

export const wallets: Wallet[] = [
  { id: 'W001', customerId: 'C001', customerName: 'John Doe', accountNumber: '8901234567890', tier: 'premium', balance: 85000, currency: 'NGN', status: 'active', dailyLimit: 5000000, dailyUsed: 125000, createdAt: new Date('2024-01-15') },
  { id: 'W002', customerId: 'C001', customerName: 'John Doe', accountNumber: '8901234567891', tier: 'basic', balance: 40000, currency: 'NGN', status: 'active', dailyLimit: 100000, dailyUsed: 25000, createdAt: new Date('2024-02-10') },
  { id: 'W003', customerId: 'C002', customerName: 'Sarah Williams', accountNumber: '8901234567892', tier: 'standard', balance: 45000, currency: 'NGN', status: 'active', dailyLimit: 500000, dailyUsed: 0, createdAt: new Date('2024-02-20') },
  { id: 'W004', customerId: 'C003', customerName: 'Michael Chen', accountNumber: '8901234567893', tier: 'premium', balance: 650000, currency: 'NGN', status: 'active', dailyLimit: 10000000, dailyUsed: 890000, createdAt: new Date('2024-03-10') },
  { id: 'W005', customerId: 'C003', customerName: 'Michael Chen', accountNumber: '8901234567894', tier: 'standard', balance: 240000, currency: 'NGN', status: 'frozen', dailyLimit: 500000, dailyUsed: 0, createdAt: new Date('2024-04-15'), frozenAt: new Date('2024-10-01'), frozenReason: 'Suspicious activity' },
  { id: 'W006', customerId: 'C004', customerName: 'Amara Okonkwo', accountNumber: '8901234567895', tier: 'basic', balance: 23000, currency: 'NGN', status: 'active', dailyLimit: 100000, dailyUsed: 15000, createdAt: new Date('2024-04-05') },
  { id: 'W007', customerId: 'C005', customerName: 'David Smith', accountNumber: '8901234567896', tier: 'premium', balance: 450000, currency: 'NGN', status: 'active', dailyLimit: 5000000, dailyUsed: 567000, createdAt: new Date('2024-05-12') },
  { id: 'W008', customerId: 'C007', customerName: 'James Wilson', accountNumber: '8901234567897', tier: 'standard', balance: 234000, currency: 'NGN', status: 'active', dailyLimit: 500000, dailyUsed: 45000, createdAt: new Date('2024-07-22') },
];

export const transactions: Transaction[] = [
  { id: 'TX001', reference: 'TRF/2024/001234', type: 'transfer', status: 'completed', fromWalletId: 'W001', fromName: 'John Doe', toWalletId: 'W003', toName: 'Sarah Williams', amount: 25000, fee: 25, total: 25025, description: 'Transfer to friend', createdAt: new Date('2024-11-15T10:30:00'), completedAt: new Date('2024-11-15T10:30:15') },
  { id: 'TX002', reference: 'CI/2024/001235', type: 'cash_in', status: 'completed', fromWalletId: 'AG001', fromName: 'Agent Adebayo', toWalletId: 'W002', toName: 'John Doe', amount: 50000, fee: 0, total: 50000, description: 'Cash deposit', createdAt: new Date('2024-11-15T11:45:00'), completedAt: new Date('2024-11-15T11:45:22') },
  { id: 'TX003', reference: 'CO/2024/001236', type: 'cash_out', status: 'completed', fromWalletId: 'W004', fromName: 'Michael Chen', toWalletId: 'AG002', toName: 'Agent Folake', amount: 100000, fee: 100, total: 100100, description: 'Withdrawal', createdAt: new Date('2024-11-15T14:20:00'), completedAt: new Date('2024-11-15T14:20:45') },
  { id: 'TX004', reference: 'PMT/2024/001237', type: 'payment', status: 'pending', fromWalletId: 'W006', fromName: 'Amara Okonkwo', toWalletId: 'MER001', toName: 'Shoprite Lagos', amount: 15000, fee: 50, total: 15050, description: 'Purchase at merchant', createdAt: new Date('2024-11-15T16:00:00') },
  { id: 'TX005', reference: 'BILL/2024/001238', type: 'bill', status: 'completed', fromWalletId: 'W007', fromName: 'David Smith', toWalletId: 'PWR001', toName: 'Electricity Company', amount: 12000, fee: 100, total: 12100, description: 'Bill payment - PHCN', createdAt: new Date('2024-11-15T09:15:00'), completedAt: new Date('2024-11-15T09:15:30') },
  { id: 'TX006', reference: 'AIR/2024/001239', type: 'airtime', status: 'completed', fromWalletId: 'W008', fromName: 'James Wilson', toWalletId: 'TEL001', toName: 'MTN Nigeria', amount: 5000, fee: 0, total: 5000, description: 'Airtime purchase', createdAt: new Date('2024-11-15T12:30:00'), completedAt: new Date('2024-11-15T12:30:05') },
  { id: 'TX007', reference: 'QR/2024/001240', type: 'qr', status: 'completed', fromWalletId: 'W001', fromName: 'John Doe', toWalletId: 'MER002', toName: 'Quick Mart', amount: 8500, fee: 0, total: 8500, description: 'QR Payment', createdAt: new Date('2024-11-15T17:45:00'), completedAt: new Date('2024-11-15T17:45:12') },
  { id: 'TX008', reference: 'POS/2024/001241', type: 'pos', status: 'failed', fromWalletId: 'W003', fromName: 'Sarah Williams', toWalletId: 'MER003', toName: 'Fuel Station', amount: 25000, fee: 125, total: 25125, description: 'POS Payment - failed', createdAt: new Date('2024-11-15T18:20:00') },
];

export const agents: Agent[] = [
  { id: 'AG001', firstName: 'Adebayo', lastName: 'Ojo', email: 'adebayo.ojo@upaying.com', phone: '+2348011111111', status: 'active', territory: 'Lagos Central', walletBalance: 2500000, commissionRate: 2.5, totalTransactions: 15678, rating: 4.8, joinedAt: new Date('2023-03-15') },
  { id: 'AG002', firstName: 'Folake', lastName: 'Adesanya', email: 'folake.a@upaying.com', phone: '+2348011111112', status: 'active', territory: 'Lagos East', walletBalance: 1800000, commissionRate: 2.5, totalTransactions: 12345, rating: 4.6, joinedAt: new Date('2023-05-20') },
  { id: 'AG003', firstName: 'Chukwuemeka', lastName: 'Nduka', email: 'emeka.n@upaying.com', phone: '+2348011111113', status: 'suspended', territory: 'Abuja North', walletBalance: 450000, commissionRate: 2.0, totalTransactions: 5678, rating: 3.9, joinedAt: new Date('2023-08-10') },
  { id: 'AG004', firstName: 'Adaeze', lastName: 'Ibrahim', email: 'adaeze.i@upaying.com', phone: '+2348011111114', status: 'pending_verification', territory: 'Kano Central', walletBalance: 0, commissionRate: 2.5, totalTransactions: 0, rating: 0, joinedAt: new Date('2024-11-10') },
  { id: 'AG005', firstName: 'Tunde', lastName: 'Bakare', email: 'tunde.b@upaying.com', phone: '+2348011111115', status: 'active', territory: 'Port Harcourt', walletBalance: 3200000, commissionRate: 3.0, totalTransactions: 18900, rating: 4.9, joinedAt: new Date('2023-01-05') },
  { id: 'AG006', firstName: 'Ngozi', lastName: 'Eze', email: 'ngozi.e@upaying.com', phone: '+2348011111116', status: 'inactive', territory: 'Enugu West', walletBalance: 890000, commissionRate: 2.5, totalTransactions: 8900, rating: 4.2, joinedAt: new Date('2023-06-12') },
];

export const posDevices: POSDevice[] = [
  { id: 'POS001', serialNumber: 'UP-POS-2024-0001', model: 'Ingenico iCT220', status: 'active', assignedAgentId: 'AG001', assignedAgentName: 'Adebayo Ojo', simNumber: '+2348012340001', carrier: 'MTN', lastSeen: new Date('2024-11-15T18:30:00'), assignedAt: new Date('2024-06-15') },
  { id: 'POS002', serialNumber: 'UP-POS-2024-0002', model: 'Verifone V240m', status: 'active', assignedAgentId: 'AG002', assignedAgentName: 'Folake Adesanya', simNumber: '+2348012340002', carrier: 'Airtel', lastSeen: new Date('2024-11-15T17:45:00'), assignedAt: new Date('2024-07-20') },
  { id: 'POS003', serialNumber: 'UP-POS-2024-0003', model: 'Ingenico iCT220', status: 'maintenance', simNumber: '+2348012340003', carrier: 'Glo', lastSeen: new Date('2024-11-10T10:00:00') },
  { id: 'POS004', serialNumber: 'UP-POS-2024-0004', model: 'Pax S900', status: 'active', assignedAgentId: 'AG005', assignedAgentName: 'Tunde Bakare', simNumber: '+2348012340004', carrier: 'MTN', lastSeen: new Date('2024-11-15T19:00:00'), assignedAt: new Date('2024-08-05') },
  { id: 'POS005', serialNumber: 'UP-POS-2024-0005', model: 'Verifone V240m', status: 'retired', assignedAgentId: 'AG006', assignedAgentName: 'Ngozi Eze', simNumber: '+2348012340005', carrier: 'Airtel', lastSeen: new Date('2024-09-01T08:00:00'), assignedAt: new Date('2024-03-10') },
  { id: 'POS006', serialNumber: 'UP-POS-2024-0006', model: 'Ingenico iCT220', status: 'inactive', simNumber: '+2348012340006', carrier: 'MTN', lastSeen: new Date('2024-11-01T12:00:00') },
];

export const supportTickets: SupportTicket[] = [
  { id: 'TKT001', ticketNumber: 'SUP-2024-0001', subject: 'Cannot complete transfer', priority: 'high', status: 'in_progress', customerId: 'C002', customerName: 'Sarah Williams', assignedTo: 'Support Agent John', createdAt: new Date('2024-11-14T10:00:00'), updatedAt: new Date('2024-11-15T09:30:00') },
  { id: 'TKT002', ticketNumber: 'SUP-2024-0002', subject: 'Wallet frozen without notice', priority: 'urgent', status: 'open', customerId: 'C003', customerName: 'Michael Chen', createdAt: new Date('2024-11-15T08:00:00'), updatedAt: new Date('2024-11-15T08:00:00') },
  { id: 'TKT003', ticketNumber: 'SUP-2024-0003', subject: 'Transaction not received', priority: 'medium', status: 'resolved', customerId: 'C004', customerName: 'Amara Okonkwo', assignedTo: 'Support Agent Mary', createdAt: new Date('2024-11-13T14:00:00'), updatedAt: new Date('2024-11-14T16:00:00') },
  { id: 'TKT004', ticketNumber: 'SUP-2024-0004', subject: 'KYC document rejected', priority: 'low', status: 'open', customerId: 'C006', customerName: 'Fatima Hassan', createdAt: new Date('2024-11-15T11:00:00'), updatedAt: new Date('2024-11-15T11:00:00') },
  { id: 'TKT005', ticketNumber: 'SUP-2024-0005', subject: 'Request for statement', priority: 'low', status: 'closed', customerId: 'C007', customerName: 'James Wilson', assignedTo: 'Support Agent John', createdAt: new Date('2024-11-10T09:00:00'), updatedAt: new Date('2024-11-11T10:00:00') },
];

export const employees: Employee[] = [
  { id: 'EMP001', firstName: 'Oluwaseun', lastName: 'Adeyemi', email: 'seun.adeyemi@upaying.com', phone: '+2348012222221', department: 'Operations', role: 'Operations Manager', status: 'active', joinedAt: new Date('2022-01-10') },
  { id: 'EMP002', firstName: 'Chidinma', lastName: 'Okonkwo', email: 'chidinma.o@upaying.com', phone: '+2348012222222', department: 'Customer Support', role: 'Team Lead', status: 'active', joinedAt: new Date('2022-03-15') },
  { id: 'EMP003', firstName: 'Emmanuel', lastName: 'Umar', email: 'emmanuel.u@upaying.com', phone: '+2348012222223', department: 'Finance', role: 'Financial Analyst', status: 'active', joinedAt: new Date('2023-02-20') },
  { id: 'EMP004', firstName: 'Aisha', lastName: 'Mohammed', email: 'aisha.m@upaying.com', phone: '+2348012222224', department: 'Compliance', role: 'Compliance Officer', status: 'active', joinedAt: new Date('2023-05-08') },
  { id: 'EMP005', firstName: 'Babatunde', lastName: 'Suleiman', email: 'baba.s@upaying.com', phone: '+2348012222225', department: 'IT', role: 'System Administrator', status: 'inactive', joinedAt: new Date('2023-07-12') },
];

export const ledgerAccounts: LedgerAccount[] = [
  { id: 'LA001', accountCode: '1000', accountName: 'Cash and Cash Equivalents', accountType: 'asset', balance: 500000000, currency: 'NGN' },
  { id: 'LA002', accountCode: '1100', accountName: 'Wallet Float - Lagos', accountType: 'asset', balance: 125000000, currency: 'NGN' },
  { id: 'LA003', accountCode: '1200', accountName: 'Wallet Float - Abuja', accountType: 'asset', balance: 85000000, currency: 'NGN' },
  { id: 'LA004', accountCode: '2000', accountName: 'Customer Deposits', accountType: 'liability', balance: 320000000, currency: 'NGN' },
  { id: 'LA005', accountCode: '2100', accountName: 'Agent Float Liabilities', accountType: 'liability', balance: 180000000, currency: 'NGN' },
  { id: 'LA006', accountCode: '3000', accountName: 'Share Capital', accountType: 'equity', balance: 100000000, currency: 'NGN' },
  { id: 'LA007', accountCode: '4000', accountName: 'Transaction Fee Revenue', accountType: 'revenue', balance: 45000000, currency: 'NGN' },
  { id: 'LA008', accountCode: '4100', accountName: 'Commission Revenue', accountType: 'revenue', balance: 23000000, currency: 'NGN' },
  { id: 'LA009', accountCode: '5000', accountName: 'Agent Commission Expense', accountType: 'expense', balance: 18000000, currency: 'NGN' },
  { id: 'LA010', accountCode: '5100', accountName: 'Operational Expenses', accountType: 'expense', balance: 12000000, currency: 'NGN' },
];

export const journalEntries: JournalEntry[] = [
  { id: 'JE001', entryNumber: 'JE-2024-00001', date: new Date('2024-11-15'), description: 'Wallet Transfer - TRF/2024/001234', debitTotal: 25000, creditTotal: 25000, status: 'posted', createdBy: 'System' },
  { id: 'JE002', entryNumber: 'JE-2024-00002', date: new Date('2024-11-15'), description: 'Cash In - CI/2024/001235', debitTotal: 50000, creditTotal: 50000, status: 'posted', createdBy: 'System' },
  { id: 'JE003', entryNumber: 'JE-2024-00003', date: new Date('2024-11-15'), description: 'Commission Payout - November', debitTotal: 2500000, creditTotal: 2500000, status: 'draft', createdBy: 'EMP003' },
  { id: 'JE004', entryNumber: 'JE-2024-00004', date: new Date('2024-11-14'), description: 'Monthly Reconciliation Adjustment', debitTotal: 15000, creditTotal: 15000, status: 'posted', createdBy: 'EMP003' },
];

export const notifications: Notification[] = [
  { id: 'N001', type: 'sms', recipient: '+2348012345678', message: 'Your transfer of N25,000 was successful', status: 'sent', sentAt: new Date('2024-11-15T10:30:15'), createdAt: new Date('2024-11-15T10:30:14') },
  { id: 'N002', type: 'email', recipient: 'john.doe@email.com', subject: 'Transaction Alert', message: 'A debit of N25,000 was made from your wallet', status: 'sent', sentAt: new Date('2024-11-15T10:30:16'), createdAt: new Date('2024-11-15T10:30:15') },
  { id: 'N003', type: 'push', recipient: 'DEVICE_TOKEN_123', subject: 'Payment Received', message: 'You received N50,000 from Adebayo Ojo', status: 'sent', sentAt: new Date('2024-11-15T11:45:22'), createdAt: new Date('2024-11-15T11:45:20') },
  { id: 'N004', type: 'sms', recipient: '+2348012345680', message: 'Your wallet has been frozen', status: 'pending', createdAt: new Date('2024-11-15T12:00:00') },
  { id: 'N005', type: 'email', recipient: 'compliance@upaying.com', subject: 'AML Alert', message: 'High-value transaction detected for customer C003', status: 'failed', createdAt: new Date('2024-11-15T09:00:00') },
];

export const apiClients: APIClient[] = [
  { id: 'API001', name: 'UpPaying Mobile App', description: 'Official mobile application', status: 'active', keys: [{ id: 'KEY001', key: 'pk_live_xxxxxxxxxxxxx', name: 'Production Key', lastUsed: new Date('2024-11-15T18:00:00'), createdAt: new Date('2024-01-01') }], createdAt: new Date('2024-01-01') },
  { id: 'API002', name: 'Merchant Gateway', description: 'Third-party merchant integration', status: 'active', keys: [{ id: 'KEY002', key: 'pk_live_yyyyyyyyyyyy', name: 'Production Key', lastUsed: new Date('2024-11-15T17:30:00'), createdAt: new Date('2024-03-15') }, { id: 'KEY003', key: 'pk_test_zzzzzzzzzzzz', name: 'Test Key', createdAt: new Date('2024-03-15'), expiresAt: new Date('2024-12-31') }], createdAt: new Date('2024-03-15') },
  { id: 'API003', name: 'Bank Integration Service', description: 'Core banking integration', status: 'inactive', keys: [{ id: 'KEY004', key: 'pk_live_aaaaaaaaaaaaa', name: 'Production Key', createdAt: new Date('2024-05-01') }], createdAt: new Date('2024-05-01') },
];

export const complianceAlerts: ComplianceAlert[] = [
  { id: 'CA001', type: 'kyc', severity: 'high', customerId: 'C004', description: 'Customer submitted incomplete documents', status: 'open', createdAt: new Date('2024-11-15T10:00:00') },
  { id: 'CA002', type: 'aml', severity: 'critical', customerId: 'C003', description: 'Multiple high-value transactions detected in short period', status: 'investigating', createdAt: new Date('2024-11-14T15:30:00') },
  { id: 'CA003', type: 'fraud', severity: 'high', customerId: 'C006', description: 'Multiple failed KYC attempts with suspicious documents', status: 'open', createdAt: new Date('2024-11-15T08:00:00') },
  { id: 'CA004', type: 'suspicious', severity: 'medium', description: 'Unusual login pattern from IP 197.210.xx.xx', status: 'dismissed', createdAt: new Date('2024-11-13T12:00:00') },
];

export const transactionTrends = [
  { date: 'Nov 9', volume: 42000000, count: 112000 },
  { date: 'Nov 10', volume: 38000000, count: 98000 },
  { date: 'Nov 11', volume: 51000000, count: 134000 },
  { date: 'Nov 12', volume: 45000000, count: 118000 },
  { date: 'Nov 13', volume: 49000000, count: 126000 },
  { date: 'Nov 14', volume: 44000000, count: 115000 },
  { date: 'Nov 15', volume: 45678234, count: 128456 },
];

export const revenueStreams = [
  { name: 'Transaction Fees', value: 45000000, percentage: 52 },
  { name: 'Agent Commissions', value: 23000000, percentage: 27 },
  { name: 'POS Usage', value: 12000000, percentage: 14 },
  { name: 'Other', value: 6000000, percentage: 7 },
];
