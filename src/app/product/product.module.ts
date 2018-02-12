import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

import { OrderPipe } from "./pipes/order.pipe";

@NgModule({
  imports: [BrowserModule],
  exports: [ProductComponent, ProductListComponent],
  declarations: [ProductComponent, ProductListComponent, OrderPipe],
  providers: [],
})
export class ProductModule { }
