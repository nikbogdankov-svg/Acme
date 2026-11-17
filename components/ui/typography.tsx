export function Typography() {
  return (
    <div className="flex w-[600px] flex-col gap-6 text-foreground">
      <p className="text-style-4xl font-extrabold tracking-tight text-balance">The Quiet Art of Shipping</p>
      <p className="text-style-xl text-muted-foreground">Notes on building things people actually use.</p>
      <p className="border-b border-border pb-2 text-style-3xl font-semibold tracking-tight">Start small</p>
      <p className="text-style-2xl font-semibold tracking-tight">Ship every week</p>
      <p className="text-style-base leading-7">Pick one problem, solve it well, and put it in front of people before polishing the rest.</p>
      <p className="border-l-2 border-border pl-6 italic">“Done is a feature.”</p>
      <p className="text-style-sm text-muted-foreground">Last updated two days ago.</p>
    </div>
  );
}

export default Typography;
