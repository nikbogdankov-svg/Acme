import { useEffect, useState } from "react";

export type ContextMenuState = "default" | "closed";

export function ContextMenu({ initialState = "default" }: { initialState?: ContextMenuState }) {
  const [state, setState] = useState<ContextMenuState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "closed") {
    return (
      <div className="flex w-fit items-start gap-2">
        <button className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-style-sm text-foreground" type="button" onClick={() => setState("default")}>Right click here</button>
      </div>
    );
  }

  return (
    <div className="flex w-fit items-start gap-2">
      <button className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-style-sm text-foreground" type="button" onClick={() => setState("closed")}>Right click here</button>
      <div className="flex w-52 flex-col p-1 rounded-md border border-border bg-popover text-popover-foreground shadow-md" role="menu">
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("closed")}>
          <p>Back</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘[</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("closed")}>
          <p>Forward</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘]</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" onClick={() => setState("closed")}>
          <p>Reload</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘R</p>
        </div>
        <div className="-mx-1 my-1 h-px bg-border" />
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitemcheckbox" aria-checked="true" onClick={() => setState("closed")}>
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
          <p>Show Bookmarks</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground pl-8" role="menuitemcheckbox" aria-checked="false" onClick={() => setState("closed")}>
          <p>Show Full URLs</p>
        </div>
      </div>
    </div>
  );
}

export default ContextMenu;
