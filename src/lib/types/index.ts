export type WalletTier = 'basic' | 'standard' | 'premium';
export type WalletStatus = 'active' | 'frozen' | 'closed';
export type KYCStatus = 'pending' | 'submitted' | 'verified' | 'rejected';
export type TransactionType = 'transfer' | 'cash_in' | 'cash_out' | 'payment' | 'bill' | 'airtime' | 'qr' | 'pos';
export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'reversed';
export type AgentStatus = 'active' | 'inactive' | 'suspended' | 'pending_verification';
export type POSStatus = 'active' | 'inactive' | 'maintenance' | 'retired';
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'closed';
export type LeaveStatus = 'pending' | 'approved' | 'rejected';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  kycStatus: KYCStatus;
  riskScore: number;
  createdAt: Date;
  walletCount: number;
  totalBalance: number;
}

export interface Wallet {
  id: string;
  customerId: string;
  customerName: string;
  accountNumber: string;
  tier: WalletTier;
  balance: number;
  currency: string;
  status: WalletStatus;
  dailyLimit: number;
  dailyUsed: number;
  createdAt: Date;
  frozenAt?: Date;
  frozenReason?: string;
}

export interface Transaction {
  id: string;
  reference: string;
  type: TransactionType;
  status: TransactionStatus;
  fromWalletId: string;
  fromName: string;
  toWalletId: string;
  toName: string;
  amount: number;
  fee: number;
  total: number;
  description: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface Agent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: AgentStatus;
  territory: string;
  walletBalance: number;
  commissionRate: number;
  totalTransactions: number;
  rating: number;
  joinedAt: Date;
}

export interface POSDevice {
  id: string;
  serialNumber: string;
  model: string;
  status: POSStatus;
  assignedAgentId?: string;
  assignedAgentName?: string;
  simNumber: string;
  carrier: string;
  lastSeen: Date;
  assignedAt?: Date;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  subject: string;
  priority: TicketPriority;
  status: TicketStatus;
  customerId: string;
  customerName: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  role: string;
  status: 'active' | 'inactive';
  joinedAt: Date;
}

export interface LedgerAccount {
  id: string;
  accountCode: string;
  accountName: string;
  accountType: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
  balance: number;
  currency: string;
}

export interface JournalEntry {
  id: string;
  entryNumber: string;
  date: Date;
  description: string;
  debitTotal: number;
  creditTotal: number;
  status: 'draft' | 'posted';
  createdBy: string;
}

export interface Notification {
  id: string;
  type: 'sms' | 'email' | 'push';
  recipient: string;
  subject?: string;
  message: string;
  status: 'pending' | 'sent' | 'failed';
  sentAt?: Date;
  createdAt: Date;
}

export interface APIClient {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  keys: APIKey[];
  createdAt: Date;
}

export interface APIKey {
  id: string;
  key: string;
  name: string;
  lastUsed?: Date;
  createdAt: Date;
  expiresAt?: Date;
}

export interface ComplianceAlert {
  id: string;
  type: 'kyc' | 'aml' | 'fraud' | 'suspicious';
  severity: 'low' | 'medium' | 'high' | 'critical';
  customerId?: string;
  description: string;
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
  createdAt: Date;
}

export interface DashboardMetrics {
  totalWallets: number;
  activeAgents: number;
  todayTransactions: number;
  todayVolume: number;
  monthlyRevenue: number;
  pendingKYCs: number;
  openTickets: number;
  activePOS: number;
}
