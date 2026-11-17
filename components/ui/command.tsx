export function Command() {
  return (
    <div className="flex w-[450px] flex-col overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-md">
      <div className="flex h-12 items-center gap-2 border-b border-border px-3">
        <svg className="size-4 shrink-0 opacity-50 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        <input className="flex h-10 w-full bg-transparent py-3 text-style-sm outline-none placeholder:text-muted-foreground" type="text" placeholder="Type a command or search..." />
      </div>
      <div className="flex flex-col p-1" role="listbox">
        <p className="px-2 py-1.5 text-style-xs font-medium text-muted-foreground">Suggestions</p>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground bg-accent text-accent-foreground" role="menuitem">
          <p>Calendar</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>Search Emoji</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>Calculator</p>
        </div>
        <div className="-mx-1 my-1 h-px bg-border" />
        <p className="px-2 py-1.5 text-style-xs font-medium text-muted-foreground">Settings</p>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>Profile</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘P</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>Billing</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘B</p>
        </div>
        <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-style-sm hover:bg-accent hover:text-accent-foreground" role="menuitem">
          <p>Settings</p>
          <p className="ml-auto text-style-xs tracking-widest text-muted-foreground">⌘S</p>
        </div>
      </div>
    </div>
  );
}

export default Command;
