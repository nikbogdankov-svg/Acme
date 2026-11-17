import Button from "./button";

export function Item({ title = "Basic item", description = "A simple item with a title and a description.", showAction = true }: { title?: string; description?: string; showAction?: boolean } = {}) {
  return (
    <div className="flex w-[400px] items-center gap-4 rounded-md border border-border p-4">
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-style-sm leading-snug font-medium text-foreground">{title}</p>
        <p className="text-style-sm text-muted-foreground">{description}</p>
      </div>
      {showAction && (
        <div className="w-auto *:w-auto"><Button label="Action" initialState="variantOutlineSizeSmall" /></div>
      )}
    </div>
  );
}

export default Item;
