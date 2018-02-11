import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CartComponent } from "./components/cart.component";
import { CartService } from "./services/cart.service";
import { CartItemComponent } from "./components/cart-item/cart-item.component";

@NgModule({
  imports: [BrowserModule],
  exports: [CartComponent],
  declarations: [CartComponent, CartItemComponent],
  providers: [CartService],
})
export class CartModule { }
