import Navbar from "../components/navbar";
import Badge from "../components/ui/badge";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import Footer from "../components/footer";
import AlertDialog from "../components/ui/alert-dialog";
import Label from "../components/ui/label";
import Switch from "../components/ui/switch";
import { useEffect, useState } from "react";

export type HomePageState = "default" | "designTogether" | "realCode" | "askTheAgent";

const cardPopups: Record<Exclude<HomePageState, "default">, { title: string; description: string }> = {
  designTogether: { title: "Design together", description: "Everyone edits the same canvas, with comments right on the design." },
  realCode: { title: "Real code", description: "Every change is code you can open as a pull request." },
  askTheAgent: { title: "Ask the agent", description: "Describe a change and the agent updates the design and the code." },
};

type ChartRange = "week" | "year";

const shippedChanges: Record<ChartRange, { label: string; value: number }[]> = {
  week: [
    { label: "Mon", value: 24 },
    { label: "Tue", value: 42 },
    { label: "Wed", value: 35 },
    { label: "Thu", value: 51 },
    { label: "Fri", value: 47 },
    { label: "Sat", value: 12 },
    { label: "Sun", value: 8 },
  ],
  year: [
    { label: "Jan", value: 410 },
    { label: "Feb", value: 465 },
    { label: "Mar", value: 520 },
    { label: "Apr", value: 498 },
    { label: "May", value: 610 },
    { label: "Jun", value: 655 },
    { label: "Jul", value: 590 },
    { label: "Aug", value: 540 },
    { label: "Sep", value: 720 },
    { label: "Oct", value: 785 },
    { label: "Nov", value: 830 },
    { label: "Dec", value: 690 },
  ],
};

export function HomePage({ initialState = "default" }: { initialState?: HomePageState }) {
  const [state, setState] = useState<HomePageState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);
  const [darkMode, setDarkMode] = useState(false);
  const [chartRange, setChartRange] = useState<ChartRange>("week");
  const [activeBar, setActiveBar] = useState<number | null>(null);

  const bars = shippedChanges[chartRange];
  const maxBar = Math.max(...bars.map((bar) => bar.value));
  const totalShipped = bars.reduce((sum, bar) => sum + bar.value, 0);
  const hoveredBar = activeBar === null ? null : bars[activeBar];

  const popup = state === "default" ? null : cardPopups[state];

  return (
    <div className={`relative w-full min-h-screen flex flex-col bg-background text-foreground${darkMode ? " dark" : ""}`}>
      <div className="flex items-center w-full bg-background border-b border-border">
        <div className="flex-1 min-w-0 *:w-full *:border-b-0 *:pr-4"><Navbar /></div>
        <div className="flex items-center gap-2 pr-10 cursor-pointer max-md:pr-4" onClick={() => setDarkMode(!darkMode)}>
          <div className="w-auto max-md:hidden *:w-auto"><Label text="Dark mode" /></div>
          <div className="w-auto *:h-6 *:w-[38px] *:border-[3px] *:p-px *:bg-clip-padding *:shadow-none"><Switch initialState={darkMode ? "on" : "default"} /></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-10 pt-24 pb-20 text-center bg-linear-to-b from-muted to-background max-md:px-4 max-md:pt-12 max-md:pb-12">
        <div className="w-auto *:w-auto"><Badge label="New: team workspaces" initialState="secondary" /></div>
        <p className="max-w-[720px] text-style-6xl font-extrabold tracking-tight text-foreground max-md:text-style-4xl">Plan, design and ship together</p>
        <p className="max-w-[560px] text-style-lg text-muted-foreground max-md:text-style-base">Acme keeps your team's designs, code and feedback in one place.</p>
        <div className="flex items-center gap-3 max-md:flex-col max-md:w-full">
          <div className="w-auto max-md:w-full *:w-auto max-md:*:w-full" onClick={() => window.location.assign("/pricing")}><Button label="See pricing" initialState="variantDefaultSizeLarge" /></div>
          <div className="w-auto max-md:w-full *:w-auto max-md:*:w-full" onClick={() => window.location.assign("/sign-up")}><Button label="Create account" initialState="variantOutlineSizeLarge" /></div>
        </div>
        <div className="flex flex-col gap-6 w-full max-w-[720px] mt-6 rounded-xl border border-border bg-card p-6 text-left text-card-foreground shadow-sm max-md:p-4">
          <div className="flex items-start justify-between gap-4 max-md:flex-col">
            <div className="flex flex-col gap-1">
              <p className="text-style-sm text-muted-foreground">{hoveredBar ? `Changes shipped ${chartRange === "week" ? "on" : "in"} ${hoveredBar.label}` : `Changes shipped this ${chartRange}`}</p>
              <p className="text-style-3xl font-semibold tracking-tight text-foreground">{(hoveredBar ? hoveredBar.value : totalShipped).toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-auto *:w-auto" onClick={() => { setChartRange("week"); setActiveBar(null); }}><Button label="Week" initialState={chartRange === "week" ? "variantDefaultSizeSmall" : "variantOutlineSizeSmall"} /></div>
              <div className="w-auto *:w-auto" onClick={() => { setChartRange("year"); setActiveBar(null); }}><Button label="Year" initialState={chartRange === "year" ? "variantDefaultSizeSmall" : "variantOutlineSizeSmall"} /></div>
            </div>
          </div>
          <div className="flex items-end gap-2 h-[200px] max-md:gap-1" onMouseLeave={() => setActiveBar(null)}>
            {bars.map((bar, index) => (
              <div key={bar.label} className="flex flex-1 flex-col items-center gap-2 h-full min-w-0" onMouseEnter={() => setActiveBar(index)}>
                <div className="flex flex-1 items-end w-full min-h-0">
                  <div className={`w-full rounded-t-md transition-all ${activeBar === null || activeBar === index ? "bg-primary" : "bg-primary/30"}`} style={{ height: `${(bar.value / maxBar) * 100}%` }} />
                </div>
                <p className="text-style-xs text-muted-foreground">{bar.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full max-w-[1080px] mx-auto px-10 pb-24 max-md:grid-cols-1 max-md:px-4 max-md:pb-12">
        <div className="w-full *:w-full cursor-pointer" onClick={() => setState("designTogether")}><Card title="Design together" description="One canvas for everyone" content="Everyone edits the same canvas, with comments right on the design." showFooter={false} /></div>
        <div className="w-full *:w-full cursor-pointer" onClick={() => setState("realCode")}><Card title="Real code" description="React and Tailwind" content="Every change is code you can open as a pull request." showFooter={false} /></div>
        <div className="w-full *:w-full cursor-pointer" onClick={() => setState("askTheAgent")}><Card title="Ask the agent" description="Changes in plain words" content="Describe a change and the agent updates the design and the code." showFooter={false} />
        <Card title="Ask the agent" description="Changes in plain words" content="Describe a change and the agent updates the design and the code." showFooter={false} /></div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full px-10 py-20 bg-muted text-center max-md:px-4 max-md:py-12">
        <p className="text-style-3xl font-semibold tracking-tight text-foreground max-md:text-style-2xl">Ready to ship with your team?</p>
        <p className="text-style-base text-foreground">Start free. Invite your team when you're ready.</p>
        <div className="w-auto max-md:w-full *:w-auto max-md:*:w-full" onClick={() => window.location.assign("/sign-up")}><Button label="Get started" initialState="variantDefaultSizeLarge" /></div>
      </div>
      <div className="w-full *:w-full"><Footer /></div>
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setState("default")}>
          <div className="w-auto max-w-full *:max-w-full" onClick={(e) => { e.stopPropagation(); if ((e.target as HTMLElement).closest("button")) setState("default"); }}><AlertDialog title={popup.title} description={popup.description} /></div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
