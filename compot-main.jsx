import "@tailwindcss/browser";
import { createRoot } from "react-dom/client";
import Page0 from "./pages/home";
import Page1 from "./pages/pricing";
import Page2 from "./pages/sign-in";
import Page3 from "./pages/sign-up";
import Page4 from "./pages/dashboard";
import Page5 from "./pages/settings";

/** Each page at its route ("/orders/:id" matches "/orders/7"). */
const routes = [
  ["^/$", Page0],
  ["^/pricing$", Page1],
  ["^/sign-in$", Page2],
  ["^/sign-up$", Page3],
  ["^/dashboard$", Page4],
  ["^/settings$", Page5],
];
const at = location.pathname.replace(new RegExp("/+$"), "") || "/";
const Page = routes.find(([route]) => new RegExp(route).test(at))?.[1];
createRoot(document.getElementById("root")).render(Page ? <Page /> : <p style={{ padding: 24, fontFamily: "system-ui" }}>There's no page at {at}.</p>);
