import Button from "./button";

export function Empty({ title = "No messages yet", description = "Nothing has arrived so far. New messages will show up here.", showAction = true }: { title?: string; description?: string; showAction?: boolean } = {}) {
  return (
    <div className="flex w-[400px] flex-col items-center gap-6 rounded-lg border border-dashed border-border p-12 text-center">
      <div className="flex flex-col items-center gap-2">
        <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
          <svg className="size-6 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
        </div>
        <p className="text-style-lg font-medium tracking-tight text-foreground">{title}</p>
        <p className="text-style-sm text-muted-foreground">{description}</p>
      </div>
      {showAction && (
        <div className="w-auto *:w-auto"><Button label="New message" /></div>
      )}
    </div>
  );
}

export default Empty;
