import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'app/services/wishlist.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() id: string
  @Input() title: string
  constructor( private wishlistService: WishlistService ) {
   }

  ngOnInit(): void {
  }
  like(id: string, title: string){
    this.wishlistService.AddProductToWishlist(id,title)
  }
  unlike(id: string){
    this.wishlistService.RemoveProductFromWishList(id)
  }
  onClick(id: string, title: string ) {
    if(this.wishlistService.userHasLiked(id))
      this.unlike(id)
    else
      this.like(id, title)
  }
}
