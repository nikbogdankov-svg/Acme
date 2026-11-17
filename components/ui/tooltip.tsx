import { useEffect, useState } from "react";

export type TooltipState = "default" | "closed";

export function Tooltip({ initialState = "default" }: { initialState?: TooltipState }) {
  const [state, setState] = useState<TooltipState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "closed") {
    return (
      <div className="flex w-fit flex-col items-center gap-1">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("default")}>Hover</button>
      </div>
    );
  }

  return (
    <div className="flex w-fit flex-col items-center gap-1">
      <p className="w-fit rounded-md bg-foreground px-3 py-1.5 text-style-xs text-background">Add to library</p>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("closed")}>Hover</button>
    </div>
  );
}

export default Tooltip;
