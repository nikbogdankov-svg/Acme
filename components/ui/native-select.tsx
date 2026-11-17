export function NativeSelect({ value = "Apple" }: { value?: string } = {}) {
  return (
    <div className="flex h-9 w-[180px] items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-style-sm whitespace-nowrap shadow-xs">
      <p className="text-foreground">{value}</p>
      <svg className="size-4 opacity-50 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
    </div>
  );
}

export default NativeSelect;
