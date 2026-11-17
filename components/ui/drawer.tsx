import Button from "./button";

export function Drawer({ title = "Move goal", description = "Set your daily activity goal." }: { title?: string; description?: string } = {}) {
  return (
    <div className="flex w-[600px] flex-col items-center rounded-t-lg border-t border-border bg-background" role="dialog">
      <div className="mt-4 h-2 w-[100px] shrink-0 rounded-full bg-muted" />
      <div className="flex w-full max-w-sm flex-col">
        <div className="flex flex-col gap-1.5 p-4 text-center">
          <p className="text-style-lg leading-none font-semibold text-foreground">{title}</p>
          <p className="text-style-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <p className="text-style-7xl font-bold tracking-tighter text-foreground">350</p>
          <p className="text-style-xs uppercase text-muted-foreground">Calories/day</p>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="w-auto *:w-auto"><Button label="Submit" /></div>
          <div className="w-auto *:w-auto"><Button label="Cancel" initialState="variantOutlineSizeDefault" /></div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
