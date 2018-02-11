import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CartService } from "../services/index";
import { Product } from "../../product";
import { CartEvent, CartAction } from "../cartEvent";
import { Predicate } from "@angular/core/src/debug/debug_node";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Output() itemChanged = new EventEmitter<CartEvent>();
  @Input() items: Product[];

  ngOnInit() {
  }

  get isAny(): boolean {
    return this.items && this.items.length > 0;
  }

  addAmount(p: Product) {
    this.itemChanged.emit({product: p, action: CartAction.IncreaseAmount});
  }

  removeAmount(p: Product) {
    if (p.amount === 1) {
      this.removeProduct(p);
    } else {
      this.itemChanged.emit({product: p, action: CartAction.DecreaseAmount});
    }
  }

  removeProduct(p: Product) {
    this.itemChanged.emit({product: p, action: CartAction.RemoveFromCart});
  }

}
