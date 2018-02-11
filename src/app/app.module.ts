import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ProductModule } from "./product/product.module";
import { CartModule } from "./cart/cart.module";

import { AppComponent } from "./app.component";
import { ProductStorageService } from "./services/ProductStorage.service";
import { CartStorageService } from "./services/cartStorage.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule
  ],
  providers: [CartStorageService, ProductStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
