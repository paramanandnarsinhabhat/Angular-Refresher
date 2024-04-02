import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-list',

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit{
 
 products : Product[];

 constructor() {
  // Initialize with some dummy data
  this.products = [
    new Product(1, 'Product 1', 'Description 1', 99.99, true),
    new Product(2, 'Product 2', 'Description 2', 199.99, false),
    // ... more products
  ];
}


 ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
