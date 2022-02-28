import { prepareInitialState } from "tomato";

import { profile, shop, home } from "./routes";
import { PRODUCTS } from "./constants";

let cart = JSON.parse(localStorage.getItem("cart") || "{}");

export const store = {
  id: "store",
  moduleId: "store",
  icon: "Cart",
  name: "Store",
  routes: [...profile, ...shop, ...home],
  initialState: prepareInitialState({
    user: { name: "seila" },
    cart,
    objs: PRODUCTS,
  }),
};
