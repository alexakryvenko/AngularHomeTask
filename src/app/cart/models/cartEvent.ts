import { Product } from "../../product";
import { CartAction } from "./cartAction";

export interface CartEvent {
  product: Product;
  action: CartAction;
}

