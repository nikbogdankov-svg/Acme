import Navbar from "../components/navbar";
import Field from "../components/ui/field";
import Checkbox from "../components/ui/checkbox";
import Button from "../components/ui/button";

export function SignUpPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background">
      <div className="w-full *:w-full"><Navbar /></div>
      <div className="flex flex-1 items-center justify-center px-10 py-20 max-md:items-start max-md:px-4 max-md:py-8">
        <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm gap-6 w-[400px] p-6 max-md:w-full">
          <div className="flex flex-col gap-1">
            <p className="text-style-2xl font-semibold tracking-tight text-foreground">Create your account</p>
            <p className="text-style-sm text-muted-foreground">Start free. You can invite your team later.</p>
          </div>
          <div className="w-full *:w-full"><Field label="Name" type="text" placeholder="Jamie Doe" description="As your team will see it." /></div>
          <div className="w-full *:w-full"><Field label="Work email" type="email" placeholder="you@company.com" description="We'll send a link to confirm it." /></div>
          <div className="w-full *:w-full"><Field label="Password" type="password" placeholder="Your password" description="At least 8 characters." /></div>
          <div className="w-auto *:w-auto"><Checkbox label="I agree to the terms and privacy policy" /></div>
          <div className="w-full *:w-full" onClick={() => window.location.assign("/dashboard")}><Button label="Create account" /></div>
          <a className="text-center text-style-sm text-muted-foreground underline-offset-4 hover:underline" href="/sign-in">Already have an account? Sign in</a>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
