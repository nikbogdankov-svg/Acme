import { useEffect, useState } from "react";

export type CheckboxState = "default" | "checked";

export function Checkbox({ initialState = "default", label = "Accept terms and conditions" }: { initialState?: CheckboxState; label?: string }) {
  const [state, setState] = useState<CheckboxState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "checked") {
    return (
      <div className="flex items-center gap-2">
        <button className="grid size-4 shrink-0 place-items-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 border-primary bg-primary text-primary-foreground" type="button" role="checkbox" aria-checked="true" onClick={() => setState("default")}>
          <svg className="size-3.5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
        </button>
        <p className="text-style-sm leading-none font-medium text-foreground">{label}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button className="grid size-4 shrink-0 place-items-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 border-input bg-background" type="button" role="checkbox" aria-checked="false" onClick={() => setState("checked")} />
      <p className="text-style-sm leading-none font-medium text-foreground">{label}</p>
    </div>
  );
}

export default Checkbox;
