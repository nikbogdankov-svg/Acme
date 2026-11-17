import { useEffect, useState } from "react";

export type AccordionState = "default" | "item2Open" | "item3Open" | "closed";

export function Accordion({ initialState = "default", item1 = "Product information", item2 = "Shipping details", item3 = "Return policy" }: { initialState?: AccordionState; item1?: string; item2?: string; item3?: string }) {
  const [state, setState] = useState<AccordionState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "item2Open") {
    return (
      <div className="flex w-[400px] flex-col">
        <div className="flex flex-col border-b border-border">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("default")}>
            <span>{item1}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
        <div className="flex flex-col border-b border-border">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="true" onClick={() => setState("closed")}>
            <span>{item2}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform rotate-180 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <p className="pb-4 text-style-sm text-foreground">Orders ship within two business days, worldwide.</p>
        </div>
        <div className="flex flex-col">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("item3Open")}>
            <span>{item3}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
      </div>
    );
  }

  if (state === "item3Open") {
    return (
      <div className="flex w-[400px] flex-col">
        <div className="flex flex-col border-b border-border">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("default")}>
            <span>{item1}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
        <div className="flex flex-col border-b border-border">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("item2Open")}>
            <span>{item2}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
        <div className="flex flex-col">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="true" onClick={() => setState("closed")}>
            <span>{item3}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform rotate-180 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <p className="pb-4 text-style-sm text-foreground">Changed your mind? Send it back within 30 days.</p>
        </div>
      </div>
    );
  }

  if (state === "closed") {
    return (
      <div className="flex w-[400px] flex-col">
        <div className="flex flex-col border-b border-border">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("default")}>
            <span>{item1}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
        <div className="flex flex-col border-b border-border">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("item2Open")}>
            <span>{item2}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
        <div className="flex flex-col">
          <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("item3Open")}>
            <span>{item3}</span>
            <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-[400px] flex-col">
      <div className="flex flex-col border-b border-border">
        <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="true" onClick={() => setState("closed")}>
          <span>{item1}</span>
          <svg className="size-4 shrink-0 text-muted-foreground transition-transform rotate-180 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        <p className="pb-4 text-style-sm text-foreground">Built to last, with a design that fits any space.</p>
      </div>
      <div className="flex flex-col border-b border-border">
        <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("item2Open")}>
          <span>{item2}</span>
          <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
        </button>
      </div>
      <div className="flex flex-col">
        <button className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-style-sm font-medium text-foreground transition-all hover:underline" type="button" aria-expanded="false" onClick={() => setState("item3Open")}>
          <span>{item3}</span>
          <svg className="size-4 shrink-0 text-muted-foreground transition-transform fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
        </button>
      </div>
    </div>
  );
}

export default Accordion;
