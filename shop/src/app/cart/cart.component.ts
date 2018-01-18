import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core/src/metadata/directives";
import { CartService } from "../services/index";
import { Product } from "../models/product";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getProductsInCart();
  }

  get isAny(): boolean {
    return this.products && this.products.length > 0;
  }

}
