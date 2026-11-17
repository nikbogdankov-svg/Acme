import { useEffect, useState } from "react";

export type ToggleGroupState = "default" | "italic" | "underline";

export function ToggleGroup({ initialState = "default" }: { initialState?: ToggleGroupState }) {
  const [state, setState] = useState<ToggleGroupState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "italic") {
    return (
      <div className="flex w-fit items-center rounded-md shadow-xs" role="group">
        <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium rounded-l-md bg-transparent hover:bg-muted hover:text-muted-foreground" type="button" aria-pressed="false" aria-label="Toggle bold" onClick={() => setState("default")}>
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" /></svg>
        </button>
        <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium -ml-px bg-accent text-accent-foreground" type="button" aria-pressed="true" aria-label="Toggle italic">
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" /></svg>
        </button>
        <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium -ml-px rounded-r-md bg-transparent hover:bg-muted hover:text-muted-foreground" type="button" aria-pressed="false" aria-label="Toggle underline" onClick={() => setState("underline")}>
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 4v6a6 6 0 0 0 12 0V4" /><line x1="4" x2="20" y1="20" y2="20" /></svg>
        </button>
      </div>
    );
  }

  if (state === "underline") {
    return (
      <div className="flex w-fit items-center rounded-md shadow-xs" role="group">
        <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium rounded-l-md bg-transparent hover:bg-muted hover:text-muted-foreground" type="button" aria-pressed="false" aria-label="Toggle bold" onClick={() => setState("default")}>
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" /></svg>
        </button>
        <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium -ml-px bg-transparent hover:bg-muted hover:text-muted-foreground" type="button" aria-pressed="false" aria-label="Toggle italic" onClick={() => setState("italic")}>
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" /></svg>
        </button>
        <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium -ml-px rounded-r-md bg-accent text-accent-foreground" type="button" aria-pressed="true" aria-label="Toggle underline">
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 4v6a6 6 0 0 0 12 0V4" /><line x1="4" x2="20" y1="20" y2="20" /></svg>
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-fit items-center rounded-md shadow-xs" role="group">
      <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium rounded-l-md bg-accent text-accent-foreground" type="button" aria-pressed="true" aria-label="Toggle bold">
        <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" /></svg>
      </button>
      <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium -ml-px bg-transparent hover:bg-muted hover:text-muted-foreground" type="button" aria-pressed="false" aria-label="Toggle italic" onClick={() => setState("italic")}>
        <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" /></svg>
      </button>
      <button className="inline-flex h-9 min-w-9 items-center justify-center border border-input px-2.5 text-style-sm font-medium -ml-px rounded-r-md bg-transparent hover:bg-muted hover:text-muted-foreground" type="button" aria-pressed="false" aria-label="Toggle underline" onClick={() => setState("underline")}>
        <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 4v6a6 6 0 0 0 12 0V4" /><line x1="4" x2="20" y1="20" y2="20" /></svg>
      </button>
    </div>
  );
}

export default ToggleGroup;
