import { useEffect, useState } from "react";

export type PopoverState = "default" | "closed";

export function Popover({ initialState = "default" }: { initialState?: PopoverState }) {
  const [state, setState] = useState<PopoverState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "closed") {
    return (
      <div className="flex w-fit flex-col items-start gap-1">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("default")}>Open popover</button>
      </div>
    );
  }

  return (
    <div className="flex w-fit flex-col items-start gap-1">
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("closed")}>Open popover</button>
      <div className="flex w-72 flex-col gap-2 p-4 rounded-md border border-border bg-popover text-popover-foreground shadow-md">
        <p className="text-style-sm leading-none font-medium">Dimensions</p>
        <p className="text-style-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
    </div>
  );
}

export default Popover;
