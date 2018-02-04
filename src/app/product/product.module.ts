import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductService } from "./services/product.service";

@NgModule({
  imports: [BrowserModule],
  exports: [ProductComponent, ProductListComponent],
  declarations: [ProductComponent, ProductListComponent],
  providers: [ProductService],
})
export class ProductModule { }
