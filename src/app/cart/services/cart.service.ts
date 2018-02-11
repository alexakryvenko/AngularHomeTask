import { Injectable } from "@angular/core";
import { Product } from "../../product";
import { ProductCategory } from "../../enums/index";

@Injectable()
export class CartService {

  constructor() { }

  getProductsInCart(): Product[] {
    return [new Product(1, "Book1", "book descr", 500, ProductCategory.Books, 1000, null, ["Book2", "Book3"]),
            new Product(2, "Water", "water descr", 500, ProductCategory.Drinks, 12, null, ["water"])];
  }

}
