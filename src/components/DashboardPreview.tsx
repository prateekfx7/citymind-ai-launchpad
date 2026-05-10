import {
  Home,
  CheckSquare,
  ArrowLeftRight,
  CreditCard,
  Wallet,
  Building2,
  Briefcase,
  ChevronRight,
  Search,
  Bell,
  ChevronDown,
  Plus,
  MoreHorizontal,
  Check,
  Send,
  Download,
  Upload,
  Receipt,
  FileText,
  Workflow,
  Settings,
  BellRing,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: CheckSquare, label: "Tasks", badge: "10" },
  { icon: ArrowLeftRight, label: "Transactions" },
  { icon: CreditCard, label: "Payments", chevron: true },
  { icon: Wallet, label: "Cards" },
  { icon: Briefcase, label: "Capital" },
  { icon: Building2, label: "Accounts", chevron: true },
];

const workflowItems = [
  { icon: Workflow, label: "Trake rutes" },
  { icon: CreditCard, label: "Payments" },
  { icon: BellRing, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

const accounts = [
  { name: "Credit", amount: "$98,125.50" },
  { name: "Treasury", amount: "$6,750,200.00" },
  { name: "Operations", amount: "$1,592,864.82" },
];

const transactions = [
  { date: "May 9", desc: "AWS", amount: "-$5,200", status: "Pending", color: "amber" },
  { date: "May 8", desc: "Client Payment", amount: "+$125,000", status: "Completed", color: "green" },
  { date: "May 7", desc: "Payroll", amount: "-$85,450", status: "Completed", color: "green" },
  { date: "May 6", desc: "Office Supplies", amount: "-$1,200", status: "Completed", color: "green" },
];

export function DashboardPreview() {
  return (
    <div className="bg-background rounded-xl overflow-hidden text-[11px] select-none pointer-events-none border border-border/50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-background">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-foreground text-background flex items-center justify-center text-[10px] font-semibold">N</div>
          <span className="font-medium text-foreground">Nexora</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary text-muted-foreground w-64">
          <Search className="h-3 w-3" />
          <span className="flex-1 text-[10px]">Search</span>
          <span className="text-[9px] px-1 py-0.5 rounded bg-background border border-border">⌘K</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md bg-foreground text-background px-2.5 py-1 text-[10px] font-medium">Move Money</button>
          <Bell className="h-3.5 w-3.5 text-muted-foreground" />
          <div className="h-5 w-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[9px] font-semibold">JB</div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 border-r border-border bg-background p-2 space-y-0.5">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${
                  item.active ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-3 w-3" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] px-1 rounded bg-secondary text-muted-foreground">{item.badge}</span>
                )}
                {item.chevron && <ChevronRight className="h-2.5 w-2.5" />}
              </div>
            );
          })}
          <div className="pt-3 pb-1 px-2 text-[9px] uppercase tracking-wider text-muted-foreground">Workflows</div>
          {workflowItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
                <Icon className="h-3 w-3" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Main content */}
        <div className="flex-1 bg-secondary/30 p-4 space-y-3">
          <div className="text-sm font-semibold text-foreground">Welcome, Jane</div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button className="flex items-center gap-1 rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-[10px] font-medium">
              <Send className="h-2.5 w-2.5" /> Send
            </button>
            <button className="flex items-center gap-1 rounded-full bg-background border border-border px-2.5 py-1 text-[10px]">
              <Download className="h-2.5 w-2.5" /> Request
            </button>
            <button className="flex items-center gap-1 rounded-full bg-background border border-border px-2.5 py-1 text-[10px]">
              <ArrowLeftRight className="h-2.5 w-2.5" /> Transfer
            </button>
            <button className="flex items-center gap-1 rounded-full bg-background border border-border px-2.5 py-1 text-[10px]">
              <Upload className="h-2.5 w-2.5" /> Deposit
            </button>
            <button className="flex items-center gap-1 rounded-full bg-background border border-border px-2.5 py-1 text-[10px]">
              <Receipt className="h-2.5 w-2.5" /> Pay Bill
            </button>
            <button className="flex items-center gap-1 rounded-full bg-background border border-border px-2.5 py-1 text-[10px]">
              <FileText className="h-2.5 w-2.5" /> Create Invoice
            </button>
            <span className="text-[10px] text-muted-foreground ml-1">+ Customize</span>
          </div>

          <div className="flex gap-3">
            {/* Balance card */}
            <div className="flex-1 basis-0 rounded-lg bg-background border border-border p-3">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span>Mercury Balance</span>
                <Check className="h-2.5 w-2.5" />
              </div>
              <div className="mt-1 text-foreground font-semibold text-base">
                $8,450,190<span className="text-xs text-muted-foreground">.32</span>
              </div>
              <div className="flex gap-4 mt-1 text-[10px]">
                <div>
                  <div className="text-muted-foreground">Last 30 Days</div>
                </div>
                <div>
                  <div className="text-muted-foreground">In</div>
                  <div className="text-emerald-600">+$1.8M</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Out</div>
                  <div className="text-red-500">-$900K</div>
                </div>
              </div>
              <svg viewBox="0 0 300 80" className="h-20 w-full mt-2">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,55 C40,50 60,30 100,35 C140,40 160,15 200,20 C240,25 260,45 300,30 L300,80 L0,80 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,55 C40,50 60,30 100,35 C140,40 160,15 200,20 C240,25 260,45 300,30"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Accounts card */}
            <div className="flex-1 basis-0 rounded-lg bg-background border border-border p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium text-foreground">Accounts</div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Plus className="h-3 w-3" />
                  <MoreHorizontal className="h-3 w-3" />
                </div>
              </div>
              <div className="mt-1">
                {accounts.map((a) => (
                  <div key={a.name} className="flex items-center justify-between py-3 text-xs">
                    <span className="text-muted-foreground">{a.name}</span>
                    <span className="text-foreground font-medium">{a.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="rounded-lg bg-background border border-border p-3">
            <div className="font-medium text-foreground mb-2">Recent Transactions</div>
            <table className="w-full text-[10px]">
              <thead>
                <tr className="text-muted-foreground text-left">
                  <th className="font-normal pb-1.5">Date</th>
                  <th className="font-normal pb-1.5">Description</th>
                  <th className="font-normal pb-1.5">Amount</th>
                  <th className="font-normal pb-1.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.desc} className="border-t border-border">
                    <td className="py-1.5 text-muted-foreground">{t.date}</td>
                    <td className="py-1.5 text-foreground">{t.desc}</td>
                    <td className={`py-1.5 ${t.amount.startsWith("+") ? "text-emerald-600" : "text-foreground"}`}>{t.amount}</td>
                    <td className="py-1.5">
                      <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${
                        t.color === "amber" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                      }`}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
