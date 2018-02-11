import { Injectable } from "@angular/core";
import { Product } from "../../product";
import { ProductCategory } from "../../enums/index";

@Injectable()
export class CartService {

  constructor() { }

  calculateTotalAmount(products: Product[]): number {
    let sum = 0;
    products.forEach(p => {
      sum += p.amount;
    });
    return sum;
  }

  calculateTotalPrice(products: Product[]): number {
    let sum = 0;
    products.forEach(p => {
      sum += p.amount * p.price;
    });
    return sum;
  }
}
