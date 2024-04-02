import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';


const routes: Routes = [
    // Define your application routes here, for example:
    { path: 'products-list', component: ProductListComponent },
    // { path: 'products', component: ProductListComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }