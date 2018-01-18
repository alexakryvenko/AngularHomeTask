import { Component, OnInit, Input } from "@angular/core";
import { ProductCategory } from "../enums";
import { Product } from "../models/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponentComponent implements OnInit {

  @Input() product: Product;

  ngOnInit() {
  }

  get isAvailable() {
    return this.product.amount && this.product.amount > 0;
  }

}
