import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CartComponent } from "./components/cart.component";
import { CartService } from "./services/cart.service";

@NgModule({
  imports: [BrowserModule],
  exports: [CartComponent],
  declarations: [CartComponent],
  providers: [CartService],
})
export class CartModule { }
