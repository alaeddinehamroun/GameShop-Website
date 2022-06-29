import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IItem } from 'app/models/item.model';
import { AuthService } from 'app/services/auth.service';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems: IItem[];
  constructor(private cartService: CartService, private authService: AuthService) { }
  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.cartService.cartItems$.subscribe(cartItems => this.cartItems = cartItems)

    }
  }
  deleteItemFromCart(id: string) {
    this.cartService.DeleteItemFromCart(id).subscribe({
        next: response => {
            let itemIndex = this.cartItems.findIndex(i => i._id == id)
            //update total and number of items
            this.cartService.numberOfItems -= 1
            this.cartService.total -= this.cartItems[itemIndex].price * this.cartItems[itemIndex].qty
            //delete item from component and service
            this.cartItems.splice(itemIndex, 1)
            this.cartService.SetCartItems(this.cartItems)
        }, error: err =>
            console.log(err)
    });
}
  increaseQuantity(id: string) {
    console.log('increase')
    //get item index
    let itemIndex = this.cartItems.findIndex(i => i._id == id)
    this.cartService.AddItemToCart(id, 1).subscribe({
      next: response => {
        console.log(response)
        this.cartItems[itemIndex].qty++;
        this.cartService.SetCartItems(this.cartItems)
        this.cartService.total += this.cartItems[itemIndex].price
    }});
  }
  decreaseQuantity(id: string) {
    console.log('decrease')
    //get item index
    let itemIndex = this.cartItems.findIndex(i => i._id == id)
    if (this.cartItems[itemIndex].qty > 1)
      this.cartService.AddItemToCart(id, -1).subscribe({
        next: response => {
          this.cartItems[itemIndex].qty--;
          this.cartService.SetCartItems(this.cartItems)
          this.cartService.total -= this.cartItems[itemIndex].price
          console.log(response)
        }
      });
    else
      this.deleteItemFromCart(id)
  }

}
