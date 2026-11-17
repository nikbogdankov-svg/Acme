import Navbar from "../components/navbar";
import Button from "../components/ui/button";
import PlanCard from "../components/plan-card";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export type PricingPageState = "default" | "yearly";

export function PricingPage({ initialState = "default" }: { initialState?: PricingPageState }) {
  const [state, setState] = useState<PricingPageState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "yearly") {
    return (
      <div className="relative w-full min-h-screen flex flex-col bg-background">
        <div className="w-full *:w-full"><Navbar /></div>
        <div className="flex flex-col items-center gap-4 px-10 pt-20 pb-10 text-center max-md:px-4 max-md:pt-12 max-md:pb-8">
          <p className="text-style-5xl font-extrabold tracking-tight text-foreground max-md:text-style-4xl">Simple pricing</p>
          <p className="text-style-lg text-muted-foreground max-md:text-style-base">Start free, upgrade when your team grows.</p>
          <div className="flex items-center gap-1 rounded-lg bg-muted p-[3px]">
            <div className="w-auto *:w-auto" onClick={() => setState("default")}><Button label="Monthly" initialState="variantGhostSizeSmall" /></div>
            <div className="w-auto *:w-auto"><Button label="Yearly · 2 months free" initialState="variantOutlineSizeSmall" /></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto px-10 pb-24 max-md:grid-cols-1 max-md:px-4 max-md:pb-12">
          <div className="w-full *:w-full"><PlanCard name="Starter" price="$90" period="/ year" description="For people trying Acme on their own." feature1="1 project" feature2="Up to 3 people" feature3="Comments and the agent" /></div>
          <div className="w-full *:w-full"><PlanCard name="Pro" price="$290" period="/ year" description="For small teams shipping every week." feature1="Unlimited projects" feature2="Up to 20 people" feature3="Pull requests to GitHub" initialState="popular" /></div>
          <div className="w-full *:w-full"><PlanCard name="Team" price="$790" period="/ year" description="For companies with many projects." feature1="Everything in Pro" feature2="Unlimited people" feature3="Single sign-on and audit log" /></div>
        </div>
        <div className="w-full *:w-full"><Footer /></div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background">
      <div className="w-full *:w-full"><Navbar /></div>
      <div className="flex flex-col items-center gap-4 px-10 pt-20 pb-10 text-center max-md:px-4 max-md:pt-12 max-md:pb-8">
        <p className="text-style-5xl font-extrabold tracking-tight text-foreground max-md:text-style-4xl">Simple pricing</p>
        <p className="text-style-lg text-muted-foreground max-md:text-style-base">Start free, upgrade when your team grows.</p>
        <div className="flex items-center gap-1 rounded-lg bg-muted p-[3px]">
          <div className="w-auto *:w-auto"><Button label="Monthly" initialState="variantOutlineSizeSmall" /></div>
          <div className="w-auto *:w-auto" onClick={() => setState("yearly")}><Button label="Yearly · 2 months free" initialState="variantGhostSizeSmall" /></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto px-10 pb-24 max-md:grid-cols-1 max-md:px-4 max-md:pb-12">
        <div className="w-full *:w-full"><PlanCard name="Starter" price="$9" period="/ month" description="For people trying Acme on their own." feature1="1 project" feature2="Up to 3 people" feature3="Comments and the agent" /></div>
        <div className="w-full *:w-full"><PlanCard name="Pro" price="$29" period="/ month" description="For small teams shipping every week." feature1="Unlimited projects" feature2="Up to 20 people" feature3="Pull requests to GitHub" initialState="popular" /></div>
        <div className="w-full *:w-full"><PlanCard name="Team" price="$79" period="/ month" description="For companies with many projects." feature1="Everything in Pro" feature2="Unlimited people" feature3="Single sign-on and audit log" /></div>
      </div>
      <div className="w-full *:w-full"><Footer /></div>
    </div>
  );
}

export default PricingPage;
