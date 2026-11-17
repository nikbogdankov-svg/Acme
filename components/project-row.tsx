import Badge from "./ui/badge";
import { useEffect, useState } from "react";

export type ProjectRowState = "default" | "done" | "blocked";

export function ProjectRow({ initialState = "default", name = "Website redesign", updated = "Updated 2 hours ago" }: { initialState?: ProjectRowState; name?: string; updated?: string }) {
  const [state, setState] = useState<ProjectRowState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "done") {
    return (
      <div className="flex items-center justify-between gap-4 w-[480px] px-6 py-3 border-t border-border">
        <div className="flex flex-col gap-0.5">
          <p className="text-style-sm font-medium text-foreground">{name}</p>
          <p className="text-style-xs text-muted-foreground">{updated}</p>
        </div>
        <div className="w-auto *:w-auto"><Badge label="Done" /></div>
      </div>
    );
  }

  if (state === "blocked") {
    return (
      <div className="flex items-center justify-between gap-4 w-[480px] px-6 py-3 border-t border-border">
        <div className="flex flex-col gap-0.5">
          <p className="text-style-sm font-medium text-foreground">{name}</p>
          <p className="text-style-xs text-muted-foreground">{updated}</p>
        </div>
        <div className="w-auto *:w-auto"><Badge label="Blocked" initialState="destructive" /></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 w-[480px] px-6 py-3 border-t border-border">
      <div className="flex flex-col gap-0.5">
        <p className="text-style-sm font-medium text-foreground">{name}</p>
        <p className="text-style-xs text-muted-foreground">{updated}</p>
      </div>
      <div className="w-auto *:w-auto"><Badge label="In progress" initialState="secondary" /></div>
    </div>
  );
}

export default ProjectRow;
