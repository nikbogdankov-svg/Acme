export function Progress() {
  return (
    <div className="h-2 w-[240px] overflow-hidden rounded-full bg-primary/20" role="progressbar">
      <div className="h-full w-3/5 bg-primary" />
    </div>
  );
}

export default Progress;
