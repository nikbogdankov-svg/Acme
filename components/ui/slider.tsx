export function Slider() {
  return (
    <div className="flex h-4 w-[240px] items-center" role="slider">
      <div className="h-1.5 w-1/2 rounded-l-full bg-primary" />
      <div className="z-10 -mx-2 size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm" />
      <div className="h-1.5 flex-1 rounded-r-full bg-muted" />
    </div>
  );
}

export default Slider;
