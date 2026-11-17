export function StatCard({ label = "Revenue", value = "$12,480", change = "+12% from last month" }: { label?: string; value?: string; change?: string } = {}) {
  return (
    <div className="flex flex-col gap-2 w-[240px] rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm max-md:p-4">
      <p className="text-style-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-style-2xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="text-style-xs text-muted-foreground">{change}</p>
    </div>
  );
}

export default StatCard;
