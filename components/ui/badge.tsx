import { useEffect, useState } from "react";

export type BadgeState = "default" | "secondary" | "destructive" | "outline";

export function Badge({ initialState = "default", label = "Badge" }: { initialState?: BadgeState; label?: string }) {
  const [state, setState] = useState<BadgeState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "secondary") {
    return (
      <p className="inline-flex w-fit items-center justify-center rounded-md border px-2 py-0.5 text-style-xs font-medium whitespace-nowrap border-transparent bg-secondary text-secondary-foreground">{label}</p>
    );
  }

  if (state === "destructive") {
    return (
      <p className="inline-flex w-fit items-center justify-center rounded-md border px-2 py-0.5 text-style-xs font-medium whitespace-nowrap border-transparent bg-destructive text-white">{label}</p>
    );
  }

  if (state === "outline") {
    return (
      <p className="inline-flex w-fit items-center justify-center rounded-md border px-2 py-0.5 text-style-xs font-medium whitespace-nowrap border-border text-foreground">{label}</p>
    );
  }

  return (
    <p className="inline-flex w-fit items-center justify-center rounded-md border px-2 py-0.5 text-style-xs font-medium whitespace-nowrap border-transparent bg-primary text-primary-foreground">{label}</p>
  );
}

export default Badge;
