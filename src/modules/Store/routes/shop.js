import { Products, Product, Cart } from "../views";
import { Home, Product as ProductLayout } from "../layouts";

export const shop = [
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
    route: "/shop",
    layout: ProductLayout,
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
