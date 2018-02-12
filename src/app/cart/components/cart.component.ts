import { Component, OnInit, EventEmitter, Output, Input, ViewChild, AfterViewInit, ViewChildren, QueryList } from "@angular/core";
import { CartService } from "../services/index";
import { Product } from "../../product";
import { CartEvent, CartAction } from "../models";
import { CartItemComponent } from "./cart-item/cart-item.component";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements AfterViewInit {
  constructor(private cartService: CartService) {}

  @Output() itemChanged = new EventEmitter <CartEvent> ();
  @Input() items: Product[];

  @ViewChild(CartItemComponent) childItem: CartItemComponent;
  @ViewChildren(CartItemComponent) viewChildren: QueryList <CartItemComponent> ;

  ngAfterViewInit() {
    console.log(this.childItem);
    this.viewChildren.changes.subscribe((r) => {
      this.childrenLog(r.filter(i => i.selected));
    });
  }

  get isAny(): boolean {
    return this.items && this.items.length > 0;
  }

  get total(): number {
    return this.cartService.calculateTotalPrice(this.items);
  }

  get totalCount(): number {
    return this.cartService.calculateTotalAmount(this.items);
  }

  addAmount(p: Product) {
    this.itemChanged.emit({
      product: p,
      action: CartAction.IncreaseAmount
    });
  }

  removeAmount(p: Product) {
    if (p.amount === 1) {
      this.removeProduct(p);
    } else {
      this.itemChanged.emit({
        product: p,
        action: CartAction.DecreaseAmount
      });
    }
  }

  removeProduct(p: Product) {
    this.itemChanged.emit({
      product: p,
      action: CartAction.RemoveFromCart
    });
  }

  onClearCart() {
    this.itemChanged.emit({ product: null, action: CartAction.ClearCart});
  }

  childrenLog(r: any) {
    setTimeout(() => {
      console.log("Selected items:" + r.map(i => i.product.name).join(", "));
    }, 0);
  }
}

