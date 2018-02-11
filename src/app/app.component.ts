import { Component, HostListener } from "@angular/core";
import { Product } from "./product";
import { CartStorageService } from "./services/cartStorage.service";
import { ProductStorageService } from "./services/ProductStorage.service";
import { CartEvent, CartAction } from "./cart/models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor(private cartStorage: CartStorageService,
              private productStorage: ProductStorageService) {
  }

  @HostListener("wheel") onWheel() {
    console.log("WHEEEEEEELLL");
  }

  get cartItems() {
    return this.cartStorage.getCurrentCart();
  }

  get products() {
    return this.productStorage.getProducts();
  }

  onBuyProduct(p: Product) {
    this.cartStorage.addProduct(p);
    this.productStorage.updateProductAmount(p.id, -1);
  }

  onCartChanges(event: CartEvent) {
    switch (event.action) {
        case CartAction.IncreaseAmount: this.onBuyProduct(event.product);
      break;
        case CartAction.DecreaseAmount: {
          this.cartStorage.updateAmount(event.product.id, -1);
          this.productStorage.updateProductAmount(event.product.id, +1);
        }
      break;
        case CartAction.RemoveFromCart: {
          this.cartStorage.removeProduct(event.product.id);
          this.productStorage.updateProductAmount(event.product.id, event.product.amount);
      }
      break;
    }
  }
}
