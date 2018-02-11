import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Product } from "../product";
import { ProductCategory } from "../enums/index";

const products = [new Product(1, "Book1", "book descr", 500, ProductCategory.Books, 10, null, ["Book2", "Book3"]),
new Product(2, "Book2", "book5424", 500, ProductCategory.Books, 15, null, ["Book1", "Book3"]),
new Product(3, "Water", "water descr", 500.626, ProductCategory.Drinks, 0, null, ["water"]),
new Product(4, "Book3", "book", 500, ProductCategory.Books, 1, null, ["Book2", "Book1"]),
new Product(5, "Potato", "descr 3", 6.96, ProductCategory.Food, 50, ["potato", "salt", "oil"], null),
];

const productsPromise = Promise.resolve(products);

@Injectable()
export class ProductStorageService {

  getProducts(): Promise<Product[]> {
    return productsPromise;
  }

  updateProductAmount(productId: number, amountDelta: number): void {
    const i = products.findIndex(p => p.id === productId);
    if (i > -1) {
      products[i].amount += amountDelta;
    }
  }
}
