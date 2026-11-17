import Button from "./ui/button";
import Avatar from "./ui/avatar";
import { useEffect, useState } from "react";

export type AppHeaderState = "default" | "settings";

export function AppHeader({ initialState = "default" }: { initialState?: AppHeaderState }) {
  const [state, setState] = useState<AppHeaderState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "settings") {
    return (
      <div className="flex items-center justify-between w-full h-16 px-6 bg-background border-b border-border max-md:px-4">
        <div className="flex items-center gap-6 max-md:gap-3">
          <a className="text-style-xl font-bold tracking-tight text-foreground" href="/">Acme</a>
          <div className="flex items-center gap-1">
            <div className="w-auto *:w-auto" onClick={() => window.location.assign("/dashboard")}><Button label="Dashboard" initialState="variantGhostSizeSmall" /></div>
            <div className="w-auto *:w-auto" onClick={() => window.location.assign("/settings")}><Button label="Settings" initialState="variantSecondarySizeSmall" /></div>
          </div>
        </div>
        <div className="shrink-0"><Avatar initials="JD" /></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between w-full h-16 px-6 bg-background border-b border-border max-md:px-4">
      <div className="flex items-center gap-6 max-md:gap-3">
        <a className="text-style-xl font-bold tracking-tight text-foreground" href="/">Acme</a>
        <div className="flex items-center gap-1">
          <div className="w-auto *:w-auto" onClick={() => window.location.assign("/dashboard")}><Button label="Dashboard" initialState="variantSecondarySizeSmall" /></div>
          <div className="w-auto *:w-auto" onClick={() => window.location.assign("/settings")}><Button label="Settings" initialState="variantGhostSizeSmall" /></div>
        </div>
      </div>
      <div className="shrink-0"><Avatar initials="JD" /></div>
    </div>
  );
}

export default AppHeader;
