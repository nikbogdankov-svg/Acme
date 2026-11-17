import AppHeader from "../components/app-header";
import Tabs from "../components/ui/tabs";
import Avatar from "../components/ui/avatar";
import Button from "../components/ui/button";
import Field from "../components/ui/field";
import Switch from "../components/ui/switch";
import Separator from "../components/ui/separator";
import Alert from "../components/ui/alert";
import { useEffect, useState } from "react";

export type SettingsPageState = "default" | "saved";

export function SettingsPage({ initialState = "default" }: { initialState?: SettingsPageState }) {
  const [state, setState] = useState<SettingsPageState>(initialState);
  // Follow the state the parent shows it in (e.g. a field turning to "error" with its page).
  useEffect(() => setState(initialState), [initialState]);

  if (state === "saved") {
    return (
      <div className="relative w-full min-h-screen flex flex-col bg-background">
        <div className="w-full *:w-full"><AppHeader initialState="settings" /></div>
        <div className="flex flex-col gap-6 w-full max-w-[720px] mx-auto px-10 py-10 max-md:px-4 max-md:py-6">
          <div className="flex flex-col gap-1">
            <p className="text-style-3xl font-semibold tracking-tight text-foreground max-md:text-style-2xl">Settings</p>
            <p className="text-style-sm text-muted-foreground">Your profile, and how Acme keeps you posted.</p>
          </div>
          <div className="w-fit *:w-fit"><Tabs tab1="Profile" tab2="Notifications" tab3="Billing" /></div>
          <div className="w-full *:w-full"><Alert title="Changes saved" description="Your team sees your new name and email now." /></div>
          <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm gap-6 p-6 max-md:p-4">
            <div className="flex flex-col gap-1">
              <p className="text-style-base font-semibold tracking-tight text-foreground">Profile</p>
              <p className="text-style-sm text-muted-foreground">This is how your team sees you.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="shrink-0"><Avatar initials="JD" /></div>
              <div className="w-auto *:w-auto"><Button label="Change photo" initialState="variantOutlineSizeSmall" /></div>
            </div>
            <div className="w-full *:w-full"><Field label="Name" type="text" placeholder="Jamie Doe" description="Your full name." /></div>
            <div className="w-full *:w-full"><Field label="Email" type="email" placeholder="jamie@acme.test" description="Where sign-in links and notices go." /></div>
          </div>
          <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm gap-6 p-6 max-md:p-4">
            <div className="flex flex-col gap-1">
              <p className="text-style-base font-semibold tracking-tight text-foreground">Notifications</p>
              <p className="text-style-sm text-muted-foreground">What Acme tells you about, by email.</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-0.5">
                <p className="text-style-sm font-medium text-foreground">Comments</p>
                <p className="text-style-sm text-muted-foreground">When someone comments on your designs.</p>
              </div>
              <div className="shrink-0"><Switch initialState="on" /></div>
            </div>
            <div className="w-full *:w-full"><Separator /></div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-0.5">
                <p className="text-style-sm font-medium text-foreground">Agent changes</p>
                <p className="text-style-sm text-muted-foreground">When the agent finishes a change you asked for.</p>
              </div>
              <div className="shrink-0"><Switch initialState="on" /></div>
            </div>
            <div className="w-full *:w-full"><Separator /></div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-0.5">
                <p className="text-style-sm font-medium text-foreground">Weekly summary</p>
                <p className="text-style-sm text-muted-foreground">Your team's work, every Monday.</p>
              </div>
              <div className="shrink-0"><Switch /></div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <div className="w-auto *:w-auto"><Button label="Cancel" initialState="variantOutlineSizeDefault" /></div>
            <div className="w-auto *:w-auto"><Button label="Save changes" /></div>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-xl border border-destructive/40 p-6 max-md:flex-col max-md:items-start max-md:p-4">
            <div className="flex flex-col gap-1">
              <p className="text-style-base font-semibold tracking-tight text-foreground">Delete account</p>
              <p className="text-style-sm text-muted-foreground">Your projects and comments are deleted with it.</p>
            </div>
            <div className="w-auto *:w-auto"><Button label="Delete account" initialState="variantDestructiveSizeDefault" /></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background">
      <div className="w-full *:w-full"><AppHeader initialState="settings" /></div>
      <div className="flex flex-col gap-6 w-full max-w-[720px] mx-auto px-10 py-10 max-md:px-4 max-md:py-6">
        <div className="flex flex-col gap-1">
          <p className="text-style-3xl font-semibold tracking-tight text-foreground max-md:text-style-2xl">Settings</p>
          <p className="text-style-sm text-muted-foreground">Your profile, and how Acme keeps you posted.</p>
        </div>
        <div className="w-fit *:w-fit"><Tabs tab1="Profile" tab2="Notifications" tab3="Billing" /></div>
        <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm gap-6 p-6 max-md:p-4">
          <div className="flex flex-col gap-1">
            <p className="text-style-base font-semibold tracking-tight text-foreground">Profile</p>
            <p className="text-style-sm text-muted-foreground">This is how your team sees you.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="shrink-0"><Avatar initials="JD" /></div>
            <div className="w-auto *:w-auto"><Button label="Change photo" initialState="variantOutlineSizeSmall" /></div>
          </div>
          <div className="w-full *:w-full"><Field label="Name" type="text" placeholder="Jamie Doe" description="Your full name." /></div>
          <div className="w-full *:w-full"><Field label="Email" type="email" placeholder="jamie@acme.test" description="Where sign-in links and notices go." /></div>
        </div>
        <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm gap-6 p-6 max-md:p-4">
          <div className="flex flex-col gap-1">
            <p className="text-style-base font-semibold tracking-tight text-foreground">Notifications</p>
            <p className="text-style-sm text-muted-foreground">What Acme tells you about, by email.</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-style-sm font-medium text-foreground">Comments</p>
              <p className="text-style-sm text-muted-foreground">When someone comments on your designs.</p>
            </div>
            <div className="shrink-0"><Switch initialState="on" /></div>
          </div>
          <div className="w-full *:w-full"><Separator /></div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-style-sm font-medium text-foreground">Agent changes</p>
              <p className="text-style-sm text-muted-foreground">When the agent finishes a change you asked for.</p>
            </div>
            <div className="shrink-0"><Switch initialState="on" /></div>
          </div>
          <div className="w-full *:w-full"><Separator /></div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-style-sm font-medium text-foreground">Weekly summary</p>
              <p className="text-style-sm text-muted-foreground">Your team's work, every Monday.</p>
            </div>
            <div className="shrink-0"><Switch /></div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="w-auto *:w-auto"><Button label="Cancel" initialState="variantOutlineSizeDefault" /></div>
          <div className="w-auto *:w-auto" onClick={() => setState("saved")}><Button label="Save changes" /></div>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-xl border border-destructive/40 p-6 max-md:flex-col max-md:items-start max-md:p-4">
          <div className="flex flex-col gap-1">
            <p className="text-style-base font-semibold tracking-tight text-foreground">Delete account</p>
            <p className="text-style-sm text-muted-foreground">Your projects and comments are deleted with it.</p>
          </div>
          <div className="w-auto *:w-auto"><Button label="Delete account" initialState="variantDestructiveSizeDefault" /></div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
