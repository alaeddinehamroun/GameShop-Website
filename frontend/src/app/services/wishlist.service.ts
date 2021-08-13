import { Injectable } from "@angular/core";
import { WishlistModel } from "app/models/item.model";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})



export class WishlistService {
    
    wishlist: WishlistModel[] = []
    wishlist$ = new BehaviorSubject<WishlistModel[]>(this.wishlist);

    constructor() {

        let info: WishlistModel[]
        let data = localStorage.getItem('wishlist');
        console.log(data)
        if (data !== null) {
            info = JSON.parse(data)
            console.log(info)
            this.wishlist = info
        }
        else {
            info = null
            this.wishlist = []
        }
        this.wishlist$.next(this.wishlist);

    }

    AddProductToWishlist(id: string, title: string) {
        this.wishlist.push({ id: id, title: title })
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
        this.wishlist$.next(this.wishlist);

    }
    RemoveProductFromWishList(id: string) {
        let index = this.wishlist.findIndex(p => p.id == id)
        if (index > -1)
            this.wishlist.splice(index, 1)
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
        this.wishlist$.next(this.wishlist);

    }
    userHasLiked(id: string) {
        if (this.wishlist) {
            let index = this.wishlist.findIndex(p => p.id == id)
            if (index > -1)
                return true
        }
        return false
    }
}