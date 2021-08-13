import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WishlistModel } from 'app/models/item.model';
import { Location } from '@angular/common';
import { WishlistService } from 'app/services/wishlist.service';


@Component({
    selector: 'wishlist-model-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Your Wishlist</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div>
    <div class="modal-body">
        <div class="table-responsive" style=" overflow:scroll-vertical;
        height:300px;">
            <h5 *ngIf = "wishlist.length === 0">Your Wishlist is empty</h5>
            <table class=" table table-shopping" *ngIf = "wishlist.length !== 0">
                <tbody>
                    <tr *ngFor="let wish of this.wishlist">                        
                        <td class="td-name">
                            <tr>
                                <a [routerLink] = "['/product', wish.id]" (click)="activeModal.dismiss('Cross click')"><h5> {{wish.title}} </h5></a> 
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <app-like [id] = "wish.id" [title] = "wish.title"></app-like>
                            </tr>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>    
    </div>
    </div>
    `
})
export class WishlistModalContent implements OnInit {
    wishlist: WishlistModel[] = []
    constructor(public activeModal: NgbActiveModal,
        public location: Location,
        private wishlistService: WishlistService) { }
    ngOnInit(): void {
        this.wishlistService.wishlist$.subscribe((data: WishlistModel[]) => this.wishlist = data);
    }
}
@Component({
    selector: 'wishlist-modal-component',
    templateUrl: './wishlist.component.html'
})
export class wishlistModalComponent implements OnInit {
    numberOfWishes: number = 0
    constructor(private modalService: NgbModal,
        private wishlistService: WishlistService) {
        this.wishlistService.wishlist$.subscribe((data: WishlistModel[]) => this.numberOfWishes = data.length);
    }
    ngOnInit(): void {
    }
    open() {
        this.modalService.open(WishlistModalContent);
    }
}