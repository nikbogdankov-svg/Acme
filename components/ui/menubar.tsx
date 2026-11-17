import { useEffect, useState } from "react";

export type MenubarState = "default" | "closed";

export function Menubar({ initialState = "default" }: { initialState?: MenubarState }) {
  const [state, setState] = useState<MenubarState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "closed") {
    return (
      <div className="flex w-fit flex-col items-start gap-1">
        <div className="flex h-9 items-center gap-1 rounded-md border border-border bg-background p-1 shadow-xs" role="menubar">
          <button className="flex items-center rounded-sm px-2 py-1 text-style-sm font-medium hover:bg-accent hover:text-accent-foreground bg-accent text-accent-foreground" type="button" onClick={() => setState("default")}>File</button>
          <button className="flex items-center rounded-sm px-2 py-1 text-style-sm font-medium hover:bg-accent hover:text-accent-foreground" type="button">Edit</button>
          <button className="flex items-center rounded-sm px-2 py-1 text-style-sm font-medium hover:bg-accent hover:text-accent-foreground" type="button">View</button>
          <button className="flex items-center rounded-sm px-2 py-1 text-style-sm font-medium hover:bg-accent hover:text-accent-foreground" type="button">Profiles</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-fit flex-col items-start gap-1">
      <div className="flex h-9 items-center gap-1 rounded-md border border-border bg-background p-1 shadow-xs" role="menubar">
        <button className="flex items-center rounded-sm px-2 py-1 text-style-sm font-medium hover:bg-accent hover:text-accent-foreground bg-accent text-accent-foreground" type="button" onClick={() => setState("closed")}>File</button>
        <button className="flex items-center rounded-sm px-2 py-1 text-style-sm font-medium hover:bg-accent hover:text-accent-foreground" type="button">Edit</button>
        <button className="flex items-center rounded-sm px-2 py-1 text-style-sm font-medium hover:bg-accent hover:text-accent-foreground" type="button">View</button>
        <button className="flex items-center rounded-sm px-2 py-1 text-style-sm font-medium hover:bg-accent hover:text-accent-foreground" type="button">Profiles</button>
      </div>
      <div className="flex w-48 flex-col p-1 rounded-md border border-border bg-popover text-popover-foreground shadow-md" role="menu">
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>New Tab</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘T</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>New Window</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘N</p>
        </div>
        <div className="-mx-1 my-1 h-px bg-border" />
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>Share</p>
        </div>
        <div className="-mx-1 my-1 h-px bg-border" />
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>Print...</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘P</p>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
