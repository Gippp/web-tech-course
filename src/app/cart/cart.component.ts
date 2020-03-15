import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  amount;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  	this.items = this.cartService.getItems();
  	this.amount = this.cartService.getAmount();
  }

}
