import { Product } from "../product";

export interface CartEvent {
  product: Product;
  action: CartAction;
}

export enum CartAction {
  IncreaseAmount,
  DecreaseAmount,
  RemoveFromCart
}
