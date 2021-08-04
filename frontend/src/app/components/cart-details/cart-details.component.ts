import { Component, OnInit } from '@angular/core';
import { IItem } from 'app/models/item.model';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems: IItem[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.GetCartItems().subscribe({
      next: response => {
          this.cartItems = response
      }, error: err =>
          console.log(err)
  });

  }
  deleteItemFromCart(id: string) {
    console.log(id)
    this.cartService.DeleteItemFromCart(id).subscribe({
        next: response => {
            let itemIndex = this.cartItems.findIndex(i => i._id == id)
            this.cartItems.splice(itemIndex, 1)
            
            console.log(response.cartItems)
        }, error: err =>
            console.log(err)
    });
  }
  increaseQuantity(id: string){
    console.log('increase')
    //get item index
    let itemIndex = this.cartItems.findIndex(i => i._id == id)
    this.cartService.AddItemToCart(id, 1).subscribe({next: response =>{
      console.log(response)
      this.cartItems[itemIndex].qty++;

    }});
  }
  decreaseQuantity(id: string){
    console.log('decrease')
    //get item index
    let itemIndex = this.cartItems.findIndex(i => i._id == id)
    if(this.cartItems[itemIndex].qty>1)
      this.cartService.AddItemToCart(id, -1).subscribe({next: response =>{
        this.cartItems[itemIndex].qty--;
        console.log(response)
      }});
    else
      this.deleteItemFromCart(id)
  }

}
