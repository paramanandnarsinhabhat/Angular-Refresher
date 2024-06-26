import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './products/product-list/product-list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,// other components declarations
  ],
  imports: [
    BrowserModule,
    // other modules you might be using like FormsModule, HttpClientModule...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
