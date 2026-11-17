export function AspectRatio() {
  return (
    <div className="flex aspect-video w-[450px] items-center justify-center overflow-hidden rounded-lg bg-muted">
      <svg className="size-10 text-muted-foreground fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
    </div>
  );
}

export default AspectRatio;
