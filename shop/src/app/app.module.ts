import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { ProductComponentComponent } from "./product/product.component";
import { CartComponent } from "./cart/cart.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartService, ProductService } from "./services";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    CartComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
