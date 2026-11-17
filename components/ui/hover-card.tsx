import { useEffect, useState } from "react";

export type HoverCardState = "default" | "closed";

export function HoverCard({ initialState = "default" }: { initialState?: HoverCardState }) {
  const [state, setState] = useState<HoverCardState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "closed") {
    return (
      <div className="flex w-fit flex-col items-start gap-1">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 text-primary underline-offset-4 hover:underline" type="button" onClick={() => setState("default")}>@nextjs</button>
      </div>
    );
  }

  return (
    <div className="flex w-fit flex-col items-start gap-1">
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 text-primary underline-offset-4 hover:underline" type="button" onClick={() => setState("closed")}>@nextjs</button>
      <div className="flex w-80 gap-4 p-4 rounded-md border border-border bg-popover text-popover-foreground shadow-md">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
          <p className="text-style-sm font-medium text-foreground">N</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-style-sm font-semibold">@nextjs</p>
          <p className="text-style-sm">The React framework for the web.</p>
          <p className="text-style-xs text-muted-foreground">Joined December 2021</p>
        </div>
      </div>
    </div>
  );
}

export default HoverCard;
