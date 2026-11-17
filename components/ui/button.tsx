import { useEffect, useState } from "react";

export type ButtonState = "default" | "variantDefaultSizeSmall" | "variantDefaultSizeLarge" | "variantSecondarySizeDefault" | "variantSecondarySizeSmall" | "variantSecondarySizeLarge" | "variantOutlineSizeDefault" | "variantOutlineSizeSmall" | "variantOutlineSizeLarge" | "variantDestructiveSizeDefault" | "variantDestructiveSizeSmall" | "variantDestructiveSizeLarge" | "variantGhostSizeDefault" | "variantGhostSizeSmall" | "variantGhostSizeLarge" | "variantLinkSizeDefault" | "variantLinkSizeSmall" | "variantLinkSizeLarge";

export function Button({ initialState = "default", label = "Button" }: { initialState?: ButtonState; label?: string }) {
  const [state, setState] = useState<ButtonState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "variantDefaultSizeSmall") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-8 gap-1.5 px-3 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90" type="button">{label}</button>
    );
  }

  if (state === "variantDefaultSizeLarge") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-10 px-6 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90" type="button">{label}</button>
    );
  }

  if (state === "variantSecondarySizeDefault") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80" type="button">{label}</button>
    );
  }

  if (state === "variantSecondarySizeSmall") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-8 gap-1.5 px-3 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80" type="button">{label}</button>
    );
  }

  if (state === "variantSecondarySizeLarge") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-10 px-6 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80" type="button">{label}</button>
    );
  }

  if (state === "variantOutlineSizeDefault") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button">{label}</button>
    );
  }

  if (state === "variantOutlineSizeSmall") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-8 gap-1.5 px-3 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button">{label}</button>
    );
  }

  if (state === "variantOutlineSizeLarge") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-10 px-6 border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground" type="button">{label}</button>
    );
  }

  if (state === "variantDestructiveSizeDefault") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 bg-destructive text-white shadow-xs hover:bg-destructive/90" type="button">{label}</button>
    );
  }

  if (state === "variantDestructiveSizeSmall") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-8 gap-1.5 px-3 bg-destructive text-white shadow-xs hover:bg-destructive/90" type="button">{label}</button>
    );
  }

  if (state === "variantDestructiveSizeLarge") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-10 px-6 bg-destructive text-white shadow-xs hover:bg-destructive/90" type="button">{label}</button>
    );
  }

  if (state === "variantGhostSizeDefault") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">{label}</button>
    );
  }

  if (state === "variantGhostSizeSmall") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-8 gap-1.5 px-3 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">{label}</button>
    );
  }

  if (state === "variantGhostSizeLarge") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-10 px-6 text-foreground hover:bg-accent hover:text-accent-foreground" type="button">{label}</button>
    );
  }

  if (state === "variantLinkSizeDefault") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 text-primary underline-offset-4 hover:underline" type="button">{label}</button>
    );
  }

  if (state === "variantLinkSizeSmall") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-8 gap-1.5 px-3 text-primary underline-offset-4 hover:underline" type="button">{label}</button>
    );
  }

  if (state === "variantLinkSizeLarge") {
    return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-10 px-6 text-primary underline-offset-4 hover:underline" type="button">{label}</button>
    );
  }

  return (
    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-style-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 h-9 px-4 py-2 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90" type="button">{label}</button>
  );
}

export default Button;
