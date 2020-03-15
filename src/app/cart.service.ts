import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  amount = 0;
  addToCart(product) {
    this.amount+=product.price;
    var f = true;
    for (var i = this.items.length - 1; i >= 0; i--) {
      if(this.items[i].product==product){
       this.items[i].count++;
       f = false;
      }
    }
    if(f){
      this.items.push({count:1,product:product});
    }
  }

  getItems() {
    return this.items;
  }

  getAmount() {
    return this.amount;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }
}
