export function InputGroup({ addon = "12 results" }: { addon?: string } = {}) {
  return (
    <div className="flex h-9 w-[300px] items-center rounded-md border border-input bg-background shadow-xs">
      <svg className="ml-3 size-4 shrink-0 text-muted-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
      <input className="h-full min-w-0 flex-1 bg-transparent px-2 text-style-sm text-foreground outline-none placeholder:text-muted-foreground" type="text" placeholder="Search..." />
      <p className="pr-3 text-style-sm text-muted-foreground">{addon}</p>
    </div>
  );
}

export default InputGroup;
