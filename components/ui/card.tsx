import Button from "./button";

export function Card({ title = "Card title", description = "Card description", content = "Card content goes here.", showFooter = true }: { title?: string; description?: string; content?: string; showFooter?: boolean } = {}) {
  return (
    <div className="flex flex-col gap-6 w-[360px] rounded-xl border border-border bg-card py-6 text-card-foreground shadow-sm">
      <div className="flex flex-col gap-1.5 px-6">
        <p className="text-style-base leading-none font-semibold">{title}</p>
        <p className="text-style-sm text-muted-foreground">{description}</p>
      </div>
      <div className="px-6">
        <p className="text-style-sm">{content}</p>
      </div>
      {showFooter && (
        <div className="flex items-center gap-2 px-6">
          <div className="w-auto *:w-auto"><Button label="Save" /></div>
          <div className="w-auto *:w-auto"><Button label="Cancel" initialState="variantOutlineSizeDefault" /></div>
        </div>
      )}
    </div>
  );
}

export default Card;
