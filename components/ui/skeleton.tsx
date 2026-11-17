export function Skeleton() {
  return (
    <div className="flex items-center gap-4">
      <div className="size-12 shrink-0 animate-pulse rounded-full bg-accent" />
      <div className="flex flex-col gap-2">
        <div className="h-4 w-[250px] animate-pulse rounded-md bg-accent" />
        <div className="h-4 w-[200px] animate-pulse rounded-md bg-accent" />
      </div>
    </div>
  );
}

export default Skeleton;
