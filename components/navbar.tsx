import Button from "./ui/button";

export function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-16 px-10 bg-background border-b border-border max-md:px-4">
      <a className="text-style-xl font-bold tracking-tight text-foreground" href="/">Acme</a>
      <div className="flex items-center gap-2 max-md:gap-1">
        <div className="w-auto max-md:hidden *:w-auto" onClick={() => window.location.assign("/")}><Button label="Home" initialState="variantGhostSizeDefault" /></div>
        <div className="w-auto max-md:hidden *:w-auto" onClick={() => window.location.assign("/pricing")}><Button label="Pricing" initialState="variantGhostSizeDefault" /></div>
        <div className="w-auto *:w-auto" onClick={() => window.location.assign("/sign-in")}><Button label="Sign in" initialState="variantGhostSizeDefault" /></div>
        <div className="w-auto *:w-auto" onClick={() => window.location.assign("/sign-up")}><Button label="Get started" /></div>
      </div>
    </div>
  );
}

export default Navbar;
