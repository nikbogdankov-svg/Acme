import { useEffect, useState } from "react";

export type RadioGroupState = "default" | "comfortable" | "compact";

export function RadioGroup({ initialState = "default", option1 = "Default", option2 = "Comfortable", option3 = "Compact" }: { initialState?: RadioGroupState; option1?: string; option2?: string; option3?: string }) {
  const [state, setState] = useState<RadioGroupState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "comfortable") {
    return (
      <div className="grid gap-3" role="radiogroup">
        <div className="flex items-center gap-3">
          <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="false" onClick={() => setState("default")} />
          <p className="text-style-sm leading-none font-medium text-foreground">{option1}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="true">
            <div className="size-2 rounded-full bg-primary" />
          </button>
          <p className="text-style-sm leading-none font-medium text-foreground">{option2}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="false" onClick={() => setState("compact")} />
          <p className="text-style-sm leading-none font-medium text-foreground">{option3}</p>
        </div>
      </div>
    );
  }

  if (state === "compact") {
    return (
      <div className="grid gap-3" role="radiogroup">
        <div className="flex items-center gap-3">
          <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="false" onClick={() => setState("default")} />
          <p className="text-style-sm leading-none font-medium text-foreground">{option1}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="false" onClick={() => setState("comfortable")} />
          <p className="text-style-sm leading-none font-medium text-foreground">{option2}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="true">
            <div className="size-2 rounded-full bg-primary" />
          </button>
          <p className="text-style-sm leading-none font-medium text-foreground">{option3}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3" role="radiogroup">
      <div className="flex items-center gap-3">
        <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="true">
          <div className="size-2 rounded-full bg-primary" />
        </button>
        <p className="text-style-sm leading-none font-medium text-foreground">{option1}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="false" onClick={() => setState("comfortable")} />
        <p className="text-style-sm leading-none font-medium text-foreground">{option2}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="grid aspect-square size-4 shrink-0 place-items-center rounded-full border border-input bg-background shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" type="button" role="radio" aria-checked="false" onClick={() => setState("compact")} />
        <p className="text-style-sm leading-none font-medium text-foreground">{option3}</p>
      </div>
    </div>
  );
}

export default RadioGroup;
