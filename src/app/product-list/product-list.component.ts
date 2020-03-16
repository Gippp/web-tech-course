import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../products';
import {Product} from '.././product';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //products = products;
  products: Product;
  
  constructor(private cartService: CartService,private http: HttpClient) { };
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/products/').subscribe((data:Product) => this.products=data);
    //this.http.get('http://127.0.0.1:8000/api/products/').subscribe(response => console.log(response);
  }

}
