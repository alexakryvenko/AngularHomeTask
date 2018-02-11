import { Injectable } from "@angular/core";
import { Product } from "../../product";
import { ProductCategory } from "../../enums/index";

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return [new Product(1, "Book1", "book descr", 500, ProductCategory.Books, 1000, null, ["Book2", "Book3"]),
    new Product(2, "Book2", "book5424", 500, ProductCategory.Books, 548, null, ["Book1", "Book3"]),
    new Product(3, "Book3", "book", 500, ProductCategory.Books, 506, null, ["Book2", "Book1"]),
    new Product(4, "Potato", "descr 3", 6, ProductCategory.Food, 47, ["potato", "salt", "oil"], null),
    new Product(5, "Water", "water descr", 500, ProductCategory.Drinks, 12, null, ["water"])];
  }
}
