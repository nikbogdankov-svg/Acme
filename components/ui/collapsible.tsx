import { useEffect, useState } from "react";

export type CollapsibleState = "default" | "open";

export function Collapsible({ initialState = "default", title = "@peduarte starred 3 repositories" }: { initialState?: CollapsibleState; title?: string }) {
  const [state, setState] = useState<CollapsibleState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "open") {
    return (
      <div className="flex w-[350px] flex-col gap-2">
        <div className="flex items-center justify-between gap-4 px-4">
          <p className="text-style-sm font-semibold text-foreground">{title}</p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-8 text-foreground hover:bg-accent hover:text-accent-foreground" type="button" aria-expanded="true" onClick={() => setState("default")}>
            <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
          </button>
        </div>
        <p className="rounded-md border border-border px-4 py-2 font-mono text-style-sm text-foreground">@radix-ui/primitives</p>
        <p className="rounded-md border border-border px-4 py-2 font-mono text-style-sm text-foreground">@radix-ui/colors</p>
        <p className="rounded-md border border-border px-4 py-2 font-mono text-style-sm text-foreground">@stitches/react</p>
      </div>
    );
  }

  return (
    <div className="flex w-[350px] flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-4">
        <p className="text-style-sm font-semibold text-foreground">{title}</p>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-8 text-foreground hover:bg-accent hover:text-accent-foreground" type="button" aria-expanded="false" onClick={() => setState("open")}>
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
        </button>
      </div>
      <p className="rounded-md border border-border px-4 py-2 font-mono text-style-sm text-foreground">@radix-ui/primitives</p>
    </div>
  );
}

export default Collapsible;
