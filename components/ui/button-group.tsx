export function ButtonGroup({ button1 = "Archive", button2 = "Report", button3 = "Snooze" }: { button1?: string; button2?: string; button3?: string } = {}) {
  return (
    <div className="flex w-fit items-stretch" role="group">
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground rounded-l-md" type="button">{button1}</button>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground -ml-px" type="button">{button2}</button>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground -ml-px rounded-r-md" type="button">{button3}</button>
    </div>
  );
}

export default ButtonGroup;
