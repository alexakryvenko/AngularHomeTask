import { Component, HostListener, OnInit, Inject, Optional } from "@angular/core";
import { Product } from "./product";
import { CartStorageService, ProductStorageService, LocalStorageService, APP_CONFIG, AppConfig,
  GeneratorService, ConfigOptionsService } from "./services";
import { CartEvent, CartAction } from "./cart/models";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  str =  "";
  modificationDate = new Date(2018, 2, 12);

  constructor(private cartStorage: CartStorageService,
    private productStorage: ProductStorageService,
    @Optional() private localStorageService: LocalStorageService,
    @Inject(APP_CONFIG) appConfig: AppConfig,
    @Optional() private generatorService: GeneratorService,
    @Optional() private configOptionsService: ConfigOptionsService,) {
      console.log(appConfig);
    }

  ngOnInit(): void {
    if (!this.localStorageService.getItem("A1")) {
      this.localStorageService.setItem("A1", "Type1");
      console.log("Set A1");
    }
    // this.localStorageService.removeItem("A1");
    this.str = this.generatorService.generate();
  }

  generateRandomStr() {
    this.str = this.generatorService.generate();
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
      case CartAction.ClearCart: {
        this.cartStorage.clearCart();
        this.localStorageService.removeItem("A1");
      }
      break;
    }
  }
}
