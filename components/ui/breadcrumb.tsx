export function Breadcrumb({ link1 = "Home", link2 = "Components", page = "Breadcrumb" }: { link1?: string; link2?: string; page?: string } = {}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 text-style-sm text-muted-foreground" aria-label="breadcrumb">
      <p className="transition-colors hover:text-foreground">{link1}</p>
      <svg className="size-3.5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <p className="transition-colors hover:text-foreground">{link2}</p>
      <svg className="size-3.5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <p className="font-normal text-foreground">{page}</p>
    </div>
  );
}

export default Breadcrumb;
