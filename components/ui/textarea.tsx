export function Textarea({ placeholder = "Type your message here." }: { placeholder?: string } = {}) {
  return (
    <div className="flex min-h-16 w-[320px] rounded-md border border-input bg-background px-3 py-2 shadow-xs">
      <p className="text-style-sm text-muted-foreground">{placeholder}</p>
    </div>
  );
}

export default Textarea;
