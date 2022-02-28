import { prepareInitialState } from "tomato";

import { Products, Product, Cart, Table } from "./views";
import { Home, Product as ProductLayout, Profile } from "./layouts";
import { PRODUCTS } from "./constants";

let cart = JSON.parse(localStorage.getItem("cart") || "{}");

const profile = [
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

const shop = [
  {
    moduleId: "store",
    admin: true,
    authenticated: true,
    route: "/cart",
    layout: ProductLayout,
    view: Cart,
  },
  {
    moduleId: "store",
    admin: true,
    authenticated: true,
    route: "/checkout",
    layout: Home,
    view: Products,
  },
  {
    moduleId: "store",
    admin: true,
    authenticated: true,
    route: "/product/:id",
    layout: ProductLayout,
    view: Product,
  },
];

const routes = [
  ...profile,
  ...shop,
  {
    moduleId: "store",
    admin: true,
    authenticated: true,
    route: "/",
    layout: Home,
    view: Products,
  },
];

export const store = {
  id: "store",
  moduleId: "store",
  icon: "Cart",
  name: "Store",
  routes,
  initialState: prepareInitialState({
    user: { name: "seila" },
    cart,
    objs: PRODUCTS,
  }),
};
