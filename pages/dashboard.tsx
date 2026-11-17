import AppHeader from "../components/app-header";
import Button from "../components/ui/button";
import StatCard from "../components/stat-card";
import ProjectRow from "../components/project-row";
import Table from "../components/ui/table";
import Empty from "../components/ui/empty";
import { useEffect, useState } from "react";

export type DashboardPageState = "default" | "empty";

export function DashboardPage({ initialState = "default" }: { initialState?: DashboardPageState }) {
  const [state, setState] = useState<DashboardPageState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "empty") {
    return (
      <div className="relative w-full min-h-screen flex flex-col bg-background">
        <div className="w-full *:w-full"><AppHeader /></div>
        <div className="flex flex-col gap-8 w-full max-w-[1200px] mx-auto px-10 py-10 max-md:gap-6 max-md:px-4 max-md:py-6">
          <div className="flex items-end justify-between gap-4 max-md:flex-col max-md:items-start">
            <div className="flex flex-col gap-1">
              <p className="text-style-3xl font-semibold tracking-tight text-foreground max-md:text-style-2xl">Dashboard</p>
              <p className="text-style-sm text-muted-foreground">Welcome to Acme, Jamie. Start with your first project.</p>
            </div>
            <div className="w-auto *:w-auto"><Button label="New project" /></div>
          </div>
          <div className="grid grid-cols-4 gap-6 md:max-lg:grid-cols-2 max-md:grid-cols-2 max-md:gap-3">
            <div className="w-full *:w-full"><StatCard label="Revenue" value="$0" change="No payments yet" /></div>
            <div className="w-full *:w-full"><StatCard label="Active projects" value="0" change="Create one to start" /></div>
            <div className="w-full *:w-full"><StatCard label="People" value="1" change="Invite your team" /></div>
            <div className="w-full *:w-full"><StatCard label="Open comments" value="0" change="Nothing to answer" /></div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:max-lg:grid-cols-1 max-md:grid-cols-1">
            <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="flex items-start justify-between gap-4 px-6 py-5">
                <div className="flex flex-col gap-1">
                  <p className="text-style-base font-semibold tracking-tight text-foreground">Projects</p>
                  <p className="text-style-sm text-muted-foreground">None yet</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="w-full *:w-full"><Empty title="No projects yet" description="Create your first project and it shows up here." showAction={false} /></div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm">
              <div className="flex items-start justify-between gap-4 px-6 py-5">
                <div className="flex flex-col gap-1">
                  <p className="text-style-base font-semibold tracking-tight text-foreground">Recent invoices</p>
                  <p className="text-style-sm text-muted-foreground">Paid and pending this month</p>
                </div>
              </div>
              <div className="px-6 pb-6 max-md:overflow-x-auto">
                <div className="w-full max-md:w-[460px] *:w-full max-md:*:w-full"><Table /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background">
      <div className="w-full *:w-full"><AppHeader /></div>
      <div className="flex flex-col gap-8 w-full max-w-[1200px] mx-auto px-10 py-10 max-md:gap-6 max-md:px-4 max-md:py-6">
        <div className="flex items-end justify-between gap-4 max-md:flex-col max-md:items-start">
          <div className="flex flex-col gap-1">
            <p className="text-style-3xl font-semibold tracking-tight text-foreground max-md:text-style-2xl">Dashboard</p>
            <p className="text-style-sm text-muted-foreground">Welcome back, Jamie. Here's your team this month.</p>
          </div>
          <div className="w-auto *:w-auto"><Button label="New project" /></div>
        </div>
        <div className="grid grid-cols-4 gap-6 md:max-lg:grid-cols-2 max-md:grid-cols-2 max-md:gap-3">
          <div className="w-full *:w-full"><StatCard label="Revenue" value="$12,480" change="+12% from last month" /></div>
          <div className="w-full *:w-full"><StatCard label="Active projects" value="8" change="+2 this month" /></div>
          <div className="w-full *:w-full"><StatCard label="People" value="14" change="3 joined this month" /></div>
          <div className="w-full *:w-full"><StatCard label="Open comments" value="23" change="5 waiting for you" /></div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:max-lg:grid-cols-1 max-md:grid-cols-1">
          <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="flex items-start justify-between gap-4 px-6 py-5">
              <div className="flex flex-col gap-1">
                <p className="text-style-base font-semibold tracking-tight text-foreground">Projects</p>
                <p className="text-style-sm text-muted-foreground">4 updated this week</p>
              </div>
              <div className="w-auto *:w-auto"><Button label="View all" initialState="variantOutlineSizeSmall" /></div>
            </div>
            <div className="w-full *:w-full"><ProjectRow name="Website redesign" updated="Updated 2 hours ago" /></div>
            <div className="w-full *:w-full"><ProjectRow name="Mobile app" updated="Updated yesterday" initialState="blocked" /></div>
            <div className="w-full *:w-full"><ProjectRow name="Brand guidelines" updated="Updated 3 days ago" initialState="done" /></div>
            <div className="w-full *:w-full"><ProjectRow name="Onboarding emails" updated="Updated last week" /></div>
          </div>
          <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm">
            <div className="flex items-start justify-between gap-4 px-6 py-5">
              <div className="flex flex-col gap-1">
                <p className="text-style-base font-semibold tracking-tight text-foreground">Recent invoices</p>
                <p className="text-style-sm text-muted-foreground">Paid and pending this month</p>
              </div>
            </div>
            <div className="px-6 pb-6 max-md:overflow-x-auto">
              <div className="w-full max-md:w-[460px] *:w-full max-md:*:w-full"><Table /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
