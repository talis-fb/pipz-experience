import { Products, Table } from "../views";
import { Profile } from "../layouts";

export const profile = [
  {
    moduleId: "store",
    admin: true,
    authenticated: true,
    route: "/profile",
    layout: Profile,
    view: Products,
  },
  {
    moduleId: "store",
    admin: true,
    authenticated: true,
    route: "/profile/compras",
    layout: Profile,
    view: Table,
  },
];
