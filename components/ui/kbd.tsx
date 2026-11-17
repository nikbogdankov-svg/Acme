export function Kbd({ keys = "⌘K" }: { keys?: string } = {}) {
  return (
    <p className="inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-style-xs font-medium text-muted-foreground">{keys}</p>
  );
}

export default Kbd;
