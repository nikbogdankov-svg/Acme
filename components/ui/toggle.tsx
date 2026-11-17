import { useEffect, useState } from "react";

export type ToggleState = "default" | "on";

export function Toggle({ initialState = "default" }: { initialState?: ToggleState }) {
  const [state, setState] = useState<ToggleState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "on") {
    return (
      <button className="inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md px-2 text-style-sm font-medium transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 bg-accent text-accent-foreground" type="button" aria-pressed="true" aria-label="Toggle bold" onClick={() => setState("default")}>
        <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" /></svg>
      </button>
    );
  }

  return (
    <button className="inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md px-2 text-style-sm font-medium transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 hover:bg-muted hover:text-muted-foreground" type="button" aria-pressed="false" aria-label="Toggle bold" onClick={() => setState("on")}>
      <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" /></svg>
    </button>
  );
}

export default Toggle;
