import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ProductModule } from "./product/product.module";
import { CartModule } from "./cart/cart.module";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
