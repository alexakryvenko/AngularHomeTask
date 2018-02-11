import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CartComponent } from "./components/cart.component";
import { CartService } from "./services/cart.service";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { OrderPipe } from "./pipes/order.pipe";

@NgModule({
  imports: [BrowserModule],
  exports: [CartComponent],
  declarations: [CartComponent, CartItemComponent, OrderPipe],
  providers: [CartService],
})
export class CartModule { }
