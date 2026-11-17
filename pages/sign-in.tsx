import Navbar from "../components/navbar";
import Input from "../components/ui/input";
import Checkbox from "../components/ui/checkbox";
import Button from "../components/ui/button";
import Alert from "../components/ui/alert";
import { useEffect, useState } from "react";

export type SignInPageState = "default" | "error";

export function SignInPage({ initialState = "default" }: { initialState?: SignInPageState }) {
  const [state, setState] = useState<SignInPageState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "error") {
    return (
      <div className="relative w-full min-h-screen flex flex-col bg-background">
        <div className="w-full *:w-full"><Navbar /></div>
        <div className="flex flex-1 items-center justify-center px-10 py-20 max-md:items-start max-md:px-4 max-md:py-8">
          <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm gap-6 w-[400px] p-6 max-md:w-full">
            <div className="flex flex-col gap-1">
              <p className="text-style-2xl font-semibold tracking-tight text-foreground">Welcome back</p>
              <p className="text-style-sm text-muted-foreground">Sign in to continue to your workspace.</p>
            </div>
            <div className="w-full *:w-full"><Alert title="Couldn't sign you in" description="Wrong email or password. Try again or reset your password." initialState="destructive" /></div>
            <div className="w-full *:w-full"><Input label="Email" type="email" placeholder="you@company.com" initialState="invalid" /></div>
            <div className="w-full *:w-full"><Input label="Password" type="password" placeholder="Your password" initialState="invalid" /></div>
            <div className="flex items-center justify-between gap-4">
              <div className="w-auto *:w-auto"><Checkbox label="Remember me" /></div>
              <p className="text-style-sm text-muted-foreground underline-offset-4 hover:underline">Forgot password?</p>
            </div>
            <div className="w-full *:w-full"><Button label="Sign in" /></div>
            <a className="text-center text-style-sm text-muted-foreground underline-offset-4 hover:underline" href="/sign-up">New to Acme? Create an account</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background">
      <div className="w-full *:w-full"><Navbar /></div>
      <div className="flex flex-1 items-center justify-center px-10 py-20 max-md:items-start max-md:px-4 max-md:py-8">
        <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm gap-6 w-[400px] p-6 max-md:w-full">
          <div className="flex flex-col gap-1">
            <p className="text-style-2xl font-semibold tracking-tight text-foreground">Welcome back</p>
            <p className="text-style-sm text-muted-foreground">Sign in to continue to your workspace.</p>
          </div>
          <div className="w-full *:w-full"><Input label="Email" type="email" placeholder="you@company.com" /></div>
          <div className="w-full *:w-full"><Input label="Password" type="password" placeholder="Your password" /></div>
          <div className="flex items-center justify-between gap-4">
            <div className="w-auto *:w-auto"><Checkbox label="Remember me" /></div>
            <p className="text-style-sm text-muted-foreground underline-offset-4 hover:underline">Forgot password?</p>
          </div>
          <div className="w-full *:w-full" onClick={() => setState("error")}><Button label="Sign in" /></div>
          <a className="text-center text-style-sm text-muted-foreground underline-offset-4 hover:underline" href="/sign-up">New to Acme? Create an account</a>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
