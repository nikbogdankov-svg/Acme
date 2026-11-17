import { useEffect, useState } from "react";

export type SelectState = "default" | "open";

export function Select({ initialState = "default" }: { initialState?: SelectState }) {
  const [state, setState] = useState<SelectState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "open") {
    return (
      <div className="flex w-fit flex-col gap-1">
        <button className="flex h-9 w-[180px] items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-style-sm whitespace-nowrap shadow-xs" type="button" role="combobox" onClick={() => setState("default")}>
          <span className="text-muted-foreground">Select a fruit</span>
          <svg className="size-4 opacity-50 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        <div className="flex w-[180px] flex-col p-1 rounded-md border border-border bg-popover text-popover-foreground shadow-md" role="listbox">
          <p className="px-2 py-1.5 text-style-xs font-medium text-muted-foreground">Fruits</p>
          <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground justify-between" role="option" onClick={() => setState("default")}>
            <p>Apple</p>
          </div>
          <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground justify-between bg-accent text-accent-foreground" role="option" onClick={() => setState("default")}>
            <p>Banana</p>
            <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
          </div>
          <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground justify-between" role="option" onClick={() => setState("default")}>
            <p>Blueberry</p>
          </div>
          <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground justify-between" role="option" onClick={() => setState("default")}>
            <p>Grapes</p>
          </div>
          <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground justify-between" role="option" onClick={() => setState("default")}>
            <p>Pineapple</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-fit flex-col gap-1">
      <button className="flex h-9 w-[180px] items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-style-sm whitespace-nowrap shadow-xs" type="button" role="combobox" onClick={() => setState("open")}>
        <span className="text-muted-foreground">Select a fruit</span>
        <svg className="size-4 opacity-50 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
      </button>
    </div>
  );
}

export default Select;
