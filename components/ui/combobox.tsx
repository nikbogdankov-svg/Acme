import { useEffect, useState } from "react";

export type ComboboxState = "default" | "open";

export function Combobox({ initialState = "default" }: { initialState?: ComboboxState }) {
  const [state, setState] = useState<ComboboxState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "open") {
    return (
      <div className="flex w-fit flex-col gap-1">
        <button className="inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 w-[200px] px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" role="combobox" onClick={() => setState("default")}>
          <span>Select framework...</span>
          <svg className="size-4 shrink-0 opacity-50 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
        </button>
        <div className="flex w-[200px] flex-col overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md">
          <div className="flex h-9 items-center gap-2 border-b border-border px-3">
            <svg className="size-4 shrink-0 opacity-50 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input className="flex h-10 w-full bg-transparent py-3 text-style-sm outline-none placeholder:text-muted-foreground" type="text" placeholder="Search framework..." />
          </div>
          <div className="flex flex-col p-1" role="listbox">
            <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground bg-accent text-accent-foreground" role="menuitem" onClick={() => setState("default")}>
              <p>Next.js</p>
            </div>
            <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("default")}>
              <p>SvelteKit</p>
            </div>
            <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("default")}>
              <p>Nuxt.js</p>
            </div>
            <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("default")}>
              <p>Remix</p>
            </div>
            <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("default")}>
              <p>Astro</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-fit flex-col gap-1">
      <button className="inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 w-[200px] px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" role="combobox" onClick={() => setState("open")}>
        <span>Select framework...</span>
        <svg className="size-4 shrink-0 opacity-50 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
      </button>
    </div>
  );
}

export default Combobox;
