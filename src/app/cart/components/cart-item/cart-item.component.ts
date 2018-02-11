import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, HostListener, HostBinding } from "@angular/core";
import { Product } from "../../../product";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  selected: boolean;

  @HostBinding("class.expensive") get isExpensive(): boolean {return this.cost >= 1000; }
  @HostListener("click") onHover() {
    console.log("click "  + this.product.name);
    this.selected = !this.selected;
  }

  get selectedStyle(): string {
    return this.selected ? "red" : "black";
  }

  ngOnDestroy(): void {
    console.log(`CartItem destroy ${this.product.name}`);
  }
  ngOnInit(): void {
    console.log(`CartItem init ${this.product.name}`);
  }

  get cost(): number {
    return this.product.amount * this.product.price;
  }
}
