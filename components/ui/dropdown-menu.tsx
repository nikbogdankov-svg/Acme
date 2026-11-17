import { useEffect, useState } from "react";

export type DropdownMenuState = "default" | "closed";

export function DropdownMenu({ initialState = "default" }: { initialState?: DropdownMenuState }) {
  const [state, setState] = useState<DropdownMenuState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "closed") {
    return (
      <div className="flex w-fit flex-col items-start gap-1">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("default")}>Open</button>
      </div>
    );
  }

  return (
    <div className="flex w-fit flex-col items-start gap-1">
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("closed")}>Open</button>
      <div className="flex w-56 flex-col p-1 rounded-md border border-border bg-popover text-popover-foreground shadow-md" role="menu">
        <p className="px-2 py-1.5 text-style-sm font-medium">My Account</p>
        <div className="-mx-1 my-1 h-px bg-border" />
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("closed")}>
          <p>Profile</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⇧⌘P</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("closed")}>
          <p>Billing</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘B</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("closed")}>
          <p>Settings</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘S</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("closed")}>
          <p>Keyboard shortcuts</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘K</p>
        </div>
        <div className="-mx-1 my-1 h-px bg-border" />
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("closed")}>
          <p>Log out</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⇧⌘Q</p>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
