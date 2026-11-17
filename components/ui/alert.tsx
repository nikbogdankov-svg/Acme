import { useEffect, useState } from "react";

export type AlertState = "default" | "destructive";

export function Alert({ initialState = "default", title = "Heads up!", description = "You can add components to your app using the cli.", showIcon = true }: { initialState?: AlertState; title?: string; description?: string; showIcon?: boolean }) {
  const [state, setState] = useState<AlertState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "destructive") {
    return (
      <div className="flex w-[400px] items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-style-sm text-destructive" role="alert">
        {showIcon && (
          <svg className="mt-0.5 size-4 shrink-0 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
        )}
        <div className="flex flex-col gap-0.5">
          <p className="text-style-sm font-medium">{title}</p>
          <p className="text-destructive/90">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-[400px] items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-style-sm text-foreground" role="alert">
      {showIcon && (
        <svg className="mt-0.5 size-4 shrink-0 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
      )}
      <div className="flex flex-col gap-0.5">
        <p className="text-style-sm font-medium">{title}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default Alert;
