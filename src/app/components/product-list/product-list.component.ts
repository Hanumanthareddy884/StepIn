import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = {
    name:"Samsung Galaxy m30s",
    model:2021,
    price: 15000,
    discount:5
  }
  getDiscount(){
    return this.products.price -((this.products.price*this.products.discount)/100)
  }
}
