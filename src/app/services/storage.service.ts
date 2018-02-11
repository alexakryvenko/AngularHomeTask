import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Product } from "../product";
import { ProductCategory } from "../enums/index";

const products = [new Product(1, "Book1", "book descr", 500, ProductCategory.Books, 1000, null, ["Book2", "Book3"]),
new Product(2, "Book2", "book5424", 500, ProductCategory.Books, 548, null, ["Book1", "Book3"]),
new Product(3, "Book3", "book", 500, ProductCategory.Books, 506, null, ["Book2", "Book1"]),
new Product(4, "Potato", "descr 3", 6, ProductCategory.Food, 47, ["potato", "salt", "oil"], null),
new Product(5, "Water", "water descr", 500, ProductCategory.Drinks, 12, null, ["water"])];

const productsPromise = Promise.resolve(products);

@Injectable()
export class ProductStorageService {

  getProducts(): Promise<Product[]> {
    return productsPromise;
  }

  // getProduct(id: number | string): Promise<Product> {
  //   return this.getProducts()
  //     .then(Products => Products.find(p => p.id === id))
  //     .catch(() => Promise.reject("Error"));
  // }

  // addProduct(product: Product): void {
  //   products.push(product);
  // }

  // updateProduct(product: Product): void {
  //   const i = products.findIndex(t => t.id === product.id);
  //   if (i > -1) {
  //     products.splice(i, 1, product);
  //   }
  // }

  updateProductAmount(productId: number, amountDelta: number): void {
    const i = products.findIndex(p => p.id === productId);
    if (i > -1) {
      products[i].amount += amountDelta;
    }
  }
}
