import Button from "./ui/button";
import Badge from "./ui/badge";
import { useEffect, useState } from "react";

export type PlanCardState = "default" | "popular";

export function PlanCard({ initialState = "default", name = "Pro", price = "$29", period = "/ month", description = "For small teams shipping every week.", feature1 = "Unlimited projects", feature2 = "Up to 20 people", feature3 = "Pull requests to GitHub" }: { initialState?: PlanCardState; name?: string; price?: string; period?: string; description?: string; feature1?: string; feature2?: string; feature3?: string }) {
  const [state, setState] = useState<PlanCardState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "popular") {
    return (
      <div className="flex flex-col gap-6 w-[300px] rounded-xl border bg-card py-6 text-card-foreground shadow-sm border-primary">
        <div className="flex items-center justify-between gap-2 px-6">
          <p className="text-style-lg font-semibold text-foreground">{name}</p>
          <div className="w-auto *:w-auto"><Badge label="Popular" /></div>
        </div>
        <div className="flex items-end gap-1 px-6">
          <p className="text-style-4xl font-bold tracking-tight text-foreground">{price}</p>
          <p className="pb-1 text-style-sm text-muted-foreground">{period}</p>
        </div>
        <p className="px-6 text-style-sm text-muted-foreground">{description}</p>
        <div className="flex flex-col gap-2 px-6">
          <div className="flex items-center gap-2">
            <svg className="size-4 shrink-0 text-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
            <p className="text-style-sm text-foreground">{feature1}</p>
          </div>
          <div className="flex items-center gap-2">
            <svg className="size-4 shrink-0 text-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
            <p className="text-style-sm text-foreground">{feature2}</p>
          </div>
          <div className="flex items-center gap-2">
            <svg className="size-4 shrink-0 text-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
            <p className="text-style-sm text-foreground">{feature3}</p>
          </div>
        </div>
        <div className="mt-auto px-6">
          <div className="w-full *:w-full" onClick={() => window.location.assign("/sign-up")}><Button label="Choose plan" /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-[300px] rounded-xl border bg-card py-6 text-card-foreground shadow-sm border-border">
      <div className="flex items-center justify-between gap-2 px-6">
        <p className="text-style-lg font-semibold text-foreground">{name}</p>
      </div>
      <div className="flex items-end gap-1 px-6">
        <p className="text-style-4xl font-bold tracking-tight text-foreground">{price}</p>
        <p className="pb-1 text-style-sm text-muted-foreground">{period}</p>
      </div>
      <p className="px-6 text-style-sm text-muted-foreground">{description}</p>
      <div className="flex flex-col gap-2 px-6">
        <div className="flex items-center gap-2">
          <svg className="size-4 shrink-0 text-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
          <p className="text-style-sm text-foreground">{feature1}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg className="size-4 shrink-0 text-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
          <p className="text-style-sm text-foreground">{feature2}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg className="size-4 shrink-0 text-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
          <p className="text-style-sm text-foreground">{feature3}</p>
        </div>
      </div>
      <div className="mt-auto px-6">
        <div className="w-full *:w-full" onClick={() => window.location.assign("/sign-up")}><Button label="Choose plan" initialState="variantOutlineSizeDefault" /></div>
      </div>
    </div>
  );
}

export default PlanCard;
