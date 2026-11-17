import { useEffect, useState } from "react";

export type InputState = "default" | "invalid" | "disabled";

export function Input({ initialState = "default", label = "Email", placeholder = "Email", type = "email", showLabel = true }: { initialState?: InputState; label?: string; placeholder?: string; type?: string; showLabel?: boolean }) {
  const [state, setState] = useState<InputState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "invalid") {
    return (
      <div className="grid w-full gap-2">
        {showLabel && (
          <p className="text-style-sm leading-none font-medium text-foreground text-destructive">{label}</p>
        )}
        <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-style-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50" type={type} placeholder={placeholder} aria-invalid="true" />
      </div>
    );
  }

  if (state === "disabled") {
    return (
      <div className="grid w-full gap-2">
        {showLabel && (
          <p className="text-style-sm leading-none font-medium text-foreground opacity-50">{label}</p>
        )}
        <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-style-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50" type={type} placeholder={placeholder} disabled onInvalid={(e) => e.currentTarget.setAttribute("aria-invalid", "true")} onBlur={(e) => { const field = e.target as HTMLInputElement; if (field.validity) e.currentTarget.setAttribute("aria-invalid", String(!field.validity.valid)); }} onInput={(e) => { const field = e.target as HTMLInputElement; if (field.validity?.valid) e.currentTarget.setAttribute("aria-invalid", "false"); }} />
      </div>
    );
  }

  return (
    <div className="grid w-full gap-2">
      {showLabel && (
        <p className="text-style-sm leading-none font-medium text-foreground">{label}</p>
      )}
      <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-style-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50" type={type} placeholder={placeholder} onInvalid={(e) => e.currentTarget.setAttribute("aria-invalid", "true")} onBlur={(e) => { const field = e.target as HTMLInputElement; if (field.validity) e.currentTarget.setAttribute("aria-invalid", String(!field.validity.valid)); }} onInput={(e) => { const field = e.target as HTMLInputElement; if (field.validity?.valid) e.currentTarget.setAttribute("aria-invalid", "false"); }} />
    </div>
  );
}

export default Input;
