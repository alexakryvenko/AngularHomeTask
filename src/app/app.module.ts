import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { InjectionToken } from "@angular/core";

import { ProductModule } from "./product/product.module";
import { CartModule } from "./cart/cart.module";

import { AppComponent } from "./app.component";
import { BorderClickDirective } from "./directives/border-click.directive";

import { ProductStorageService, CartStorageService, LocalStorageService, ConfigOptionsService,
  APP_CONFIG,
  CONST_CONFIG,
  generatorProvider,
  } from "./services";

@NgModule({
  declarations: [
    AppComponent,
    BorderClickDirective,
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule,
  ],
  providers: [
    CartStorageService,
    ProductStorageService,
    LocalStorageService,
    { provide: APP_CONFIG, useValue: CONST_CONFIG },
    ConfigOptionsService,
    generatorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
