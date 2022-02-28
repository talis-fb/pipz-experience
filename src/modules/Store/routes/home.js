import { Products } from "../views";
import { Home } from "../layouts";

export const home = [
  {
    moduleId: "store",
    admin: true,
    authenticated: true,
    route: "/",
    layout: Home,
    view: Products,
  },
];
