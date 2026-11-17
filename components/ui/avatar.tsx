export function Avatar({ initials = "CN" }: { initials?: string } = {}) {
  return (
    <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted">
      <p className="text-style-sm font-medium text-foreground">{initials}</p>
    </div>
  );
}

export default Avatar;
