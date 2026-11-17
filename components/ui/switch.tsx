import { useEffect, useState } from "react";

export type SwitchState = "default" | "on";

export function Switch({ initialState = "default" }: { initialState?: SwitchState }) {
  const [state, setState] = useState<SwitchState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "on") {
    return (
      <button className="inline-flex h-[18px] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 bg-primary" type="button" role="switch" aria-checked="true" onClick={() => setState("default")}>
        <div className="block size-4 rounded-full bg-background shadow-sm transition-transform translate-x-[14px]" />
      </button>
    );
  }

  return (
    <button className="inline-flex h-[18px] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 bg-input" type="button" role="switch" aria-checked="false" onClick={() => setState("on")}>
      <div className="block size-4 rounded-full bg-background shadow-sm transition-transform translate-x-0" />
    </button>
  );
}

export default Switch;
