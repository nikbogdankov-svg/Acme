export function InputOTP() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <div className="flex size-9 items-center justify-center border-y border-r border-input text-style-sm text-foreground shadow-xs rounded-l-md border-l">
          <p>4</p>
        </div>
        <div className="flex size-9 items-center justify-center border-y border-r border-input text-style-sm text-foreground shadow-xs">
          <p>2</p>
        </div>
        <div className="flex size-9 items-center justify-center border-y border-r border-input text-style-sm text-foreground shadow-xs rounded-r-md z-10 border-ring ring-[3px] ring-ring/50" />
      </div>
      <svg className="size-4 text-muted-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>
      <div className="flex items-center">
        <div className="flex size-9 items-center justify-center border-y border-r border-input text-style-sm text-foreground shadow-xs rounded-l-md border-l" />
        <div className="flex size-9 items-center justify-center border-y border-r border-input text-style-sm text-foreground shadow-xs" />
        <div className="flex size-9 items-center justify-center border-y border-r border-input text-style-sm text-foreground shadow-xs rounded-r-md" />
      </div>
    </div>
  );
}

export default InputOTP;
