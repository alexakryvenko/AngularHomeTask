import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Product } from "../product";
import { ProductCategory } from "../enums/index";

const cartItems: Array<Product> = [new Product(5, "Water", "water descr", 500, ProductCategory.Drinks, 1, null, ["water"])];

const cartItemsPromise = Promise.resolve(cartItems);

@Injectable()
export class CartStorageService {

  getCurrentCart(): Promise<Product[]> {
    return cartItemsPromise;
  }

  // getCartItem(id: number | string): Promise<Product> {
  //   return this.getCurrentCart()
  //     .then(items => items.find(p => p.id === id))
  //     .catch(() => Promise.reject("Error"));
  // }

  addProduct(product: Product): void {
    const i = cartItems.findIndex(t => t.id === product.id);
    if (i > -1) {
      cartItems[i].amount++;
    } else {
      cartItems.push(product);
    }
  }

  removeProduct(productId: number): void {
    const i = cartItems.findIndex(t => t.id === productId);
    if (i > -1) {
      cartItems.splice(i, 1);
    }
  }

  updateAmount(productId: number,  amountDelta: number): void {
    const i = cartItems.findIndex(p => p.id === productId);
    if (i > -1) {
      cartItems[i].amount += amountDelta;
    }
  }
}
