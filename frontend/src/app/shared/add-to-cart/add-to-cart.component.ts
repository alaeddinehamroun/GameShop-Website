import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() productId: string;
  @Input() disabled: boolean;
  @Input() isInStock: boolean;

  @Input() qty: number;
  @Input() productPrice: number



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
//add to cart
AddToCart() {
  this.cartService.AddItemToCart(this.productId, this.qty).subscribe({
    next: response => {
      this.cartService.FetchCartItems().subscribe({
        next: response => {
          this.cartService.SetCartItems(response)
          this.cartService.numberOfItems = response.length
          this.cartService.total += this.productPrice * this.qty

        }, error: err =>
          console.log(err)
      });
    }
  });
}
}
