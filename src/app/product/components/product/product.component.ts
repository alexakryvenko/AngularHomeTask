import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../../product";
import { ProductCategory } from "../../../enums/index";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {

  private productCategoryMapping = {
    [ProductCategory.Books]: "books",
    [ProductCategory.Drinks]: "drinks",
    [ProductCategory.Food]: "tasty food",
  };
  @Input() product: Product;

  ngOnInit() {
  }

  get isAvailable() {
    return this.product.amount && this.product.amount > 0;
  }

  getCategory(category: ProductCategory) {
    return this.productCategoryMapping[category];
  }

}
