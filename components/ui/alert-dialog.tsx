import Button from "./button";

export function AlertDialog({ title = "Are you absolutely sure?", description = "This can't be undone. Your account and its data will be deleted for good." }: { title?: string; description?: string } = {}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-background p-6 shadow-lg w-[512px]" role="alertdialog">
      <div className="flex flex-col gap-2">
        <p className="text-style-lg leading-none font-semibold text-foreground">{title}</p>
        <p className="text-style-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex justify-end gap-2">
        <div className="w-auto *:w-auto"><Button label="Cancel" initialState="variantOutlineSizeDefault" /></div>
        <div className="w-auto *:w-auto"><Button label="Continue" /></div>
      </div>
    </div>
  );
}

export default AlertDialog;
