import { useEffect, useState } from "react";

export type TabsState = "default" | "password" | "settings";

export function Tabs({ initialState = "default", tab1 = "Account", tab2 = "Password", tab3 = "Settings" }: { initialState?: TabsState; tab1?: string; tab2?: string; tab3?: string }) {
  const [state, setState] = useState<TabsState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "password") {
    return (
      <div className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground" role="tablist">
        <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all text-muted-foreground hover:text-foreground" type="button" role="tab" aria-selected="false" onClick={() => setState("default")}>{tab1}</button>
        <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all bg-background text-foreground shadow-sm" type="button" role="tab" aria-selected="true">{tab2}</button>
        <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all text-muted-foreground hover:text-foreground" type="button" role="tab" aria-selected="false" onClick={() => setState("settings")}>{tab3}</button>
      </div>
    );
  }

  if (state === "settings") {
    return (
      <div className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground" role="tablist">
        <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all text-muted-foreground hover:text-foreground" type="button" role="tab" aria-selected="false" onClick={() => setState("default")}>{tab1}</button>
        <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all text-muted-foreground hover:text-foreground" type="button" role="tab" aria-selected="false" onClick={() => setState("password")}>{tab2}</button>
        <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all bg-background text-foreground shadow-sm" type="button" role="tab" aria-selected="true">{tab3}</button>
      </div>
    );
  }

  return (
    <div className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground" role="tablist">
      <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all bg-background text-foreground shadow-sm" type="button" role="tab" aria-selected="true">{tab1}</button>
      <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all text-muted-foreground hover:text-foreground" type="button" role="tab" aria-selected="false" onClick={() => setState("password")}>{tab2}</button>
      <button className="inline-flex h-full flex-1 items-center justify-center rounded-md border border-transparent px-3 py-1 text-style-sm font-medium whitespace-nowrap transition-all text-muted-foreground hover:text-foreground" type="button" role="tab" aria-selected="false" onClick={() => setState("settings")}>{tab3}</button>
    </div>
  );
}

export default Tabs;
