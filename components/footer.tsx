import Button from "./ui/button";

export function Footer() {
  return (
    <div className="flex items-center justify-between w-full px-10 py-8 bg-background border-t border-border max-md:flex-col max-md:items-start max-md:gap-4 max-md:px-4 max-md:py-6">
      <div className="flex flex-col gap-1">
        <a className="text-style-base font-bold tracking-tight text-foreground" href="/">Acme</a>
        <p className="text-style-sm text-muted-foreground">Designs, code and feedback in one place.</p>
      </div>
      <div className="flex items-center gap-1 max-md:-ml-3">
        <div className="w-auto *:w-auto" onClick={() => window.location.assign("/pricing")}><Button label="Pricing" initialState="variantGhostSizeSmall" /></div>
        <div className="w-auto *:w-auto" onClick={() => window.location.assign("/sign-in")}><Button label="Sign in" initialState="variantGhostSizeSmall" /></div>
        <div className="w-auto *:w-auto" onClick={() => window.location.assign("/sign-up")}><Button label="Sign up" initialState="variantGhostSizeSmall" /></div>
      </div>
    </div>
  );
}

export default Footer;
