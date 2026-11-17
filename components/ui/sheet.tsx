import Button from "./button";

export function Sheet({ title = "Edit profile", description = "Make changes to your profile here. Click save when you're done." }: { title?: string; description?: string } = {}) {
  return (
    <div className="flex h-[600px] w-[384px] flex-col gap-4 border-l border-border bg-background shadow-lg" role="dialog">
      <div className="flex items-start justify-between gap-4 p-4">
        <div className="flex flex-col gap-1.5">
          <p className="text-style-lg leading-none font-semibold text-foreground">{title}</p>
          <p className="text-style-sm text-muted-foreground">{description}</p>
        </div>
        <svg className="size-4 shrink-0 opacity-70 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      </div>
      <div className="grid gap-6 px-4">
        <div className="grid gap-3">
          <p className="text-style-sm leading-none font-medium text-foreground">Name</p>
          <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-style-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Pedro Duarte" onInvalid={(e) => e.currentTarget.setAttribute("aria-invalid", "true")} onBlur={(e) => { const field = e.target as HTMLInputElement; if (field.validity) e.currentTarget.setAttribute("aria-invalid", String(!field.validity.valid)); }} onInput={(e) => { const field = e.target as HTMLInputElement; if (field.validity?.valid) e.currentTarget.setAttribute("aria-invalid", "false"); }} />
        </div>
        <div className="grid gap-3">
          <p className="text-style-sm leading-none font-medium text-foreground">Username</p>
          <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-style-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="@peduarte" onInvalid={(e) => e.currentTarget.setAttribute("aria-invalid", "true")} onBlur={(e) => { const field = e.target as HTMLInputElement; if (field.validity) e.currentTarget.setAttribute("aria-invalid", String(!field.validity.valid)); }} onInput={(e) => { const field = e.target as HTMLInputElement; if (field.validity?.valid) e.currentTarget.setAttribute("aria-invalid", "false"); }} />
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-2 p-4">
        <div className="w-auto *:w-auto"><Button label="Save changes" /></div>
        <div className="w-auto *:w-auto"><Button label="Close" initialState="variantOutlineSizeDefault" /></div>
      </div>
    </div>
  );
}

export default Sheet;
