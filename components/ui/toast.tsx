import Button from "./button";

export function Toast({ title = "Event has been created", description = "Sunday, December 03, 2023 at 9:00 AM", showAction = true }: { title?: string; description?: string; showAction?: boolean } = {}) {
  return (
    <div className="flex w-[356px] items-center gap-4 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg" role="status">
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-style-sm font-medium">{title}</p>
        <p className="text-style-sm text-muted-foreground">{description}</p>
      </div>
      {showAction && (
        <div className="w-auto *:w-auto"><Button label="Undo" initialState="variantDefaultSizeSmall" /></div>
      )}
    </div>
  );
}

export default Toast;
