import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Product } from "../../../product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor() { }

  orderStr = "name";

  @Input()
  products: Product[] = [];

  @Output() buyProduct = new EventEmitter<Product>();

  ngOnInit(): void {
  }

  addToCart(p: Product) {
    const event = new Product(p.id, p.name, p.description, p.price, p.category, 1, null, null);
    this.buyProduct.emit(event);
  }

  orderBy(field: string) {
    this.orderStr = field;
  }
}
