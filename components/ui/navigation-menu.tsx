import { useEffect, useState } from "react";

export type NavigationMenuState = "default" | "closed";

export function NavigationMenu({ initialState = "default" }: { initialState?: NavigationMenuState }) {
  const [state, setState] = useState<NavigationMenuState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "closed") {
    return (
      <div className="flex w-fit flex-col items-start gap-1.5">
        <div className="flex items-center gap-1">
          <button className="inline-flex h-9 w-max items-center justify-center gap-1 rounded-md bg-background px-4 py-2 text-style-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground bg-accent/50" type="button" onClick={() => setState("default")}>
            <span>Getting started</span>
            <svg className="size-3 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <button className="inline-flex h-9 w-max items-center justify-center gap-1 rounded-md bg-background px-4 py-2 text-style-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground" type="button">
            <span>Components</span>
            <svg className="size-3 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <button className="inline-flex h-9 w-max items-center justify-center gap-1 rounded-md bg-background px-4 py-2 text-style-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground" type="button">Docs</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-fit flex-col items-start gap-1.5">
      <div className="flex items-center gap-1">
        <button className="inline-flex h-9 w-max items-center justify-center gap-1 rounded-md bg-background px-4 py-2 text-style-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground bg-accent/50" type="button" onClick={() => setState("closed")}>
          <span>Getting started</span>
          <svg className="size-3 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        <button className="inline-flex h-9 w-max items-center justify-center gap-1 rounded-md bg-background px-4 py-2 text-style-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground" type="button">
          <span>Components</span>
          <svg className="size-3 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        <button className="inline-flex h-9 w-max items-center justify-center gap-1 rounded-md bg-background px-4 py-2 text-style-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground" type="button">Docs</button>
      </div>
      <div className="grid w-[400px] gap-1 p-2 rounded-md border border-border bg-popover text-popover-foreground shadow-md">
        <div className="flex flex-col gap-1 rounded-sm p-2 hover:bg-accent">
          <p className="text-style-sm leading-none font-medium">Introduction</p>
          <p className="text-style-sm leading-snug text-muted-foreground">What the components are and how they fit together.</p>
        </div>
        <div className="flex flex-col gap-1 rounded-sm p-2 hover:bg-accent">
          <p className="text-style-sm leading-none font-medium">Installation</p>
          <p className="text-style-sm leading-snug text-muted-foreground">How to add them to your app and set up its styles.</p>
        </div>
        <div className="flex flex-col gap-1 rounded-sm p-2 hover:bg-accent">
          <p className="text-style-sm leading-none font-medium">Typography</p>
          <p className="text-style-sm leading-snug text-muted-foreground">Headings, paragraphs, lists and the rest of the text.</p>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
