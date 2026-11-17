import { useEffect, useState } from "react";

export type PaginationState = "default" | "page2" | "page3";

export function Pagination({ initialState = "default" }: { initialState?: PaginationState }) {
  const [state, setState] = useState<PaginationState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "page2") {
    return (
      <div className="flex items-center gap-1" role="navigation" aria-label="pagination">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 gap-1 px-2.5 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
          <span>Previous</span>
        </button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 text-foreground hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("default")}>1</button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" aria-current="page">2</button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 text-foreground hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("page3")}>3</button>
        <div className="flex size-9 items-center justify-center text-foreground">
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 gap-1 px-2.5 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">
          <span>Next</span>
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    );
  }

  if (state === "page3") {
    return (
      <div className="flex items-center gap-1" role="navigation" aria-label="pagination">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 gap-1 px-2.5 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
          <span>Previous</span>
        </button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 text-foreground hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("default")}>1</button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 text-foreground hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("page2")}>2</button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" aria-current="page">3</button>
        <div className="flex size-9 items-center justify-center text-foreground">
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 gap-1 px-2.5 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">
          <span>Next</span>
          <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1" role="navigation" aria-label="pagination">
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 gap-1 px-2.5 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">
        <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
        <span>Previous</span>
      </button>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button" aria-current="page">1</button>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 text-foreground hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("page2")}>2</button>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 text-foreground hover:bg-accent hover:text-accent-foreground" type="button" onClick={() => setState("page3")}>3</button>
      <div className="flex size-9 items-center justify-center text-foreground">
        <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
      </div>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 gap-1 px-2.5 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">
        <span>Next</span>
        <svg className="size-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </div>
  );
}

export default Pagination;
