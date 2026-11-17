import { useEffect, useState } from "react";

export type FieldState = "default" | "invalid";

export function Field({ initialState = "default", label = "Username", placeholder = "shadcn", type = "text", description = "Choose a unique username for your account.", error = "This username is already taken." }: { initialState?: FieldState; label?: string; placeholder?: string; type?: string; description?: string; error?: string }) {
  const [state, setState] = useState<FieldState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "invalid") {
    return (
      <div className="flex w-[320px] flex-col gap-3">
        <p className="text-style-sm leading-none font-medium text-foreground text-destructive">{label}</p>
        <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-style-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50" type={type} placeholder={placeholder} aria-invalid="true" />
        <p className="text-style-sm text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex w-[320px] flex-col gap-3">
      <p className="text-style-sm leading-none font-medium text-foreground">{label}</p>
      <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-style-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50" type={type} placeholder={placeholder} onInvalid={(e) => e.currentTarget.setAttribute("aria-invalid", "true")} onBlur={(e) => { const field = e.target as HTMLInputElement; if (field.validity) e.currentTarget.setAttribute("aria-invalid", String(!field.validity.valid)); }} onInput={(e) => { const field = e.target as HTMLInputElement; if (field.validity?.valid) e.currentTarget.setAttribute("aria-invalid", "false"); }} />
      <p className="text-style-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default Field;
