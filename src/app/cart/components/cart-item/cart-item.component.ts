import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "../../../product";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent {
  @Input() product: Product;
}
