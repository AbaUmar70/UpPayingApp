# UpPaying Micro-Banking Service Management System

## 1. Project Overview

**Project Name**: UpPaying Wallet Platform - Micro-Banking Core System  
**Project Type**: Enterprise Fintech Management Dashboard (Web Application)  
**Core Functionality**: Internal operating system for a fintech company managing wallets, agents, POS devices, transactions, finance, HR, and compliance.  
**Target Users**: Internal staff, agents, compliance officers, finance team, HR administrators, and customer support agents.

---

## 2. UI/UX Specification

### Layout Structure

**Application Shell**
- Fixed sidebar navigation (280px width, collapsible to 72px)
- Top header bar (64px height) with search, notifications, user menu
- Main content area with breadcrumbs
- Responsive: sidebar collapses to bottom nav on mobile (<768px)

**Page Sections**
- Dashboard cards with metrics
- Data tables with filters and pagination
- Detail panels (slide-in from right, 480px width)
- Modal dialogs for forms (max 560px width)

**Responsive Breakpoints**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette**
- Background Primary: `#0A0F1C` (deep navy)
- Background Secondary: `#111827` (dark slate)
- Background Card: `#1F2937` (charcoal)
- Background Elevated: `#374151` (gray)
- Primary Accent: `#10B981` (emerald green - trust/money)
- Secondary Accent: `#3B82F6` (blue - actions)
- Warning: `#F59E0B` (amber)
- Danger: `#EF4444` (red)
- Success: `#22C55E` (green)
- Text Primary: `#F9FAFB`
- Text Secondary: `#9CA3AF`
- Text Muted: `#6B7280`
- Border: `#374151`

**Typography**
- Font Family: `"DM Sans", sans-serif` (headings), `"JetBrains Mono", monospace` (numbers/data)
- Heading 1: 32px / 700 weight
- Heading 2: 24px / 600 weight
- Heading 3: 18px / 600 weight
- Body: 14px / 400 weight
- Caption: 12px / 400 weight
- Monospace numbers: 14px / 500 weight

**Spacing System**
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64px
- Card padding: 24px
- Section gaps: 24px
- Table cell padding: 12px 16px

**Visual Effects**
- Card shadows: `0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)`
- Hover transitions: 150ms ease
- Border radius: 8px (cards), 6px (buttons), 4px (inputs)
- Glassmorphism on modals: `backdrop-filter: blur(8px)`

### Components

**Navigation Sidebar**
- Logo at top
- Navigation groups with icons
- Active state: emerald left border, lighter background
- Hover: subtle background highlight
- Collapse toggle button

**Dashboard Cards**
- Metric value in large monospace font
- Label and trend indicator
- Subtle gradient background
- Hover: slight lift effect

**Data Tables**
- Sticky header
- Row hover highlight
- Status badges (colored pills)
- Action buttons (icon only on hover)
- Pagination controls
- Column sorting indicators

**Forms**
- Floating labels
- Input focus: emerald border glow
- Validation states with icons
- Select dropdowns with search
- Date pickers

**Buttons**
- Primary: Emerald background, white text
- Secondary: Transparent, border, white text
- Danger: Red background
- Disabled: 50% opacity
- Loading state with spinner

**Status Badges**
- Active: Green pill
- Inactive: Gray pill
- Pending: Amber pill
- Frozen: Red pill
- Verified: Blue pill

**Modals**
- Centered, dark overlay (60% opacity)
- Slide-up animation
- Close button top-right
- Action buttons bottom-right

---

## 3. Functionality Specification

### Core System Modules

#### 1. Dashboard (Home)
- Total wallet accounts count
- Active agents count
- Today's transactions volume
- Total revenue this month
- Transaction trend chart (7 days)
- Recent transactions list
- Agent performance leaderboard
- System alerts/notifications

#### 2. Wallet & Account Management
- **Customer List**: Searchable, filterable table with KYC status, wallet balance, tier
- **Customer Detail**: Profile info, all wallets, transaction history, documents
- **Wallet Actions**: Create, freeze/unfreeze, adjust limits, view transactions
- **KYC Management**: Document upload, verification workflow, approval queue
- **Wallet Tiers**: Basic, Standard, Premium with different limits
- **Fraud Flags**: Mark accounts, view flag history

#### 3. Agent & Distribution Management
- **Agent Directory**: Grid/list view with status, territory, performance
- **Agent Profile**: Personal info, wallet balance, commission rate, ratings
- **Agent Onboarding**: Registration form, verification steps
- **Commission Configuration**: Tiered rates, special promotions
- **Territory Management**: Regions, areas, assignment
- **Performance Metrics**: Transactions, revenue, customer acquisitions

#### 4. POS Device Management
- **Device Inventory**: All devices with status, assignment
- **Device Assignment**: Link to agent, activate/deactivate
- **SIM Management**: Carrier, phone number, data plan
- **Maintenance Logs**: Repair history, issues reported
- **Device Tracking**: Last seen, location history

#### 5. Transaction Processing
- **Transaction Log**: All transactions with filters (type, status, date, amount)
- **Transaction Detail**: Full audit trail, parties involved, fees
- **Transaction Types**: Transfer, Cash In, Cash Out, Payment, Bill, Airtime, QR, POS
- **Fee Configuration**: By transaction type, tier, amount brackets
- **Reversals**: Process refunds, view history

#### 6. Double-Entry Ledger
- **Account Chart**: All GL accounts
- **Journal Entries**: View all entries with debit/credit
- **Settlement Reports**: Daily reconciliation
- **Balance Verification**: Trial balance

#### 7. Customer Service
- **Ticket Queue**: Open tickets by priority
- **Ticket Detail**: Conversation thread, actions, resolution
- **Dispute Management**: Case workflow
- **Refund Processing**: Request, approve, track
- **Customer Communication**: Email/SMS logs

#### 8. Finance Management
- **Revenue Dashboard**: Streams, trends
- **Expense Tracking**: Categories, records
- **Commission Payouts**: Schedule, status
- **Bank Reconciliation**: Match records
- **Reports**: P&L, balance sheet

#### 9. HR Management
- **Employee Directory**: Staff list, departments
- **Role Management**: Permissions matrix
- **Attendance**: Check-in/out, reports
- **Leave Requests**: Approve/reject workflow

#### 10. Compliance & KYC
- **KYC Queue**: Pending verifications
- **Risk Profiles**: Customer risk scores
- **AML Alerts**: Suspicious activity watchlist
- **Audit Logs**: All system actions

#### 11. Notifications
- **Template Management**: Create/edit templates
- **Notification Log**: Sent notifications history
- **Channel Configuration**: SMS, Email, Push

#### 12. API & Integration
- **Client Management**: Registered API clients
- **Key Management**: Generate, revoke keys
- **Webhook Configuration**: Endpoints, events
- **Usage Logs**: API call history

### User Interactions & Flows

**Search Flow**: Global search in header → type-ahead suggestions → results page  
**Filter Flow**: Click filter button → sidebar with options → apply → table updates  
**Detail Flow**: Click row → slide-in panel with full details → action buttons  
**Form Flow**: Click add → modal opens → fill form → validate → submit → success toast  

### Edge Cases
- Handle empty states with helpful messages
- Show loading skeletons during data fetch
- Display error states with retry options
- Confirm destructive actions (delete, freeze)
- Handle session timeout gracefully

---

## 4. Technical Architecture

### Stack
- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **State**: React hooks + Context API
- **Data**: In-memory mock data (expandable to database)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

### Project Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Dashboard)
│   ├── wallets/
│   ├── agents/
│   ├── pos/
│   ├── transactions/
│   ├── ledger/
│   ├── support/
│   ├── finance/
│   ├── hr/
│   ├── compliance/
│   ├── notifications/
│   └── api/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── dashboard/
│   ├── tables/
│   └── forms/
├── lib/
│   ├── types/
│   ├── data/
│   └── utils/
└── styles/
    └── globals.css
```

---

## 5. Acceptance Criteria

### Visual Checkpoints
- [ ] Dark theme with emerald accents renders correctly
- [ ] Sidebar navigation is functional with active states
- [ ] Dashboard cards display metrics with proper formatting
- [ ] Tables are sortable and filterable
- [ ] Forms validate input and show error states
- [ ] Modals open/close with animations
- [ ] Responsive layout works on all breakpoints

### Functional Checkpoints
- [ ] All 12 main sections are accessible via navigation
- [ ] Dashboard shows real-time metrics
- [ ] Tables display mock data correctly
- [ ] Search and filters work across modules
- [ ] Detail panels show comprehensive information
- [ ] Navigation between sections is smooth

### Performance Checkpoints
- [ ] Initial page load < 3 seconds
- [ ] No console errors on load
- [ ] Smooth animations (60fps)
