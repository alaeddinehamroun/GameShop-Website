import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IItem } from 'app/models/item.model';
import { CartService } from 'app/services/cart.service';
import { Location } from '@angular/common';
import { AuthService } from 'app/services/auth.service';


@Component({
    selector: 'cart-model-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Your Cart</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body" *ngIf="this.cartService.numberOfItems==0">
        Your cart is empty
    </div>
    <div *ngIf="this.cartService.numberOfItems>0">
    <div class="modal-body">
        <div class="table-responsive" style=" overflow:scroll-vertical;
        height:300px;">
            <table class=" table table-shopping" >
                <tbody>
                    <tr *ngFor="let item of this.cartItems">
                        <a class="btn-danger" (click)="deleteItemFromCart(item._id)"><i class="fa fa-close"></i></a>
                        <td>
                            <div class=" img-container">
                            <img
                                alt="{{item.title}}"
                                src="{{item.image}}"
                                style="width: 100px;
                                height: 80px;"
                            />
                            </div>
                        </td>
                        <td class="td-name">
                            <tr>
                                <h5> {{item.title}} </h5> 
                            </tr>
                            <tr>
                                <small>{{item.qty}} x {{item.price | currency: "USD"}} </small>
                            </tr>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>    
        <div class="cart-summary mt-4">
                <small>{{this.cartService.numberOfItems}} Item(s) selected</small>
                <h5>TOTAL : {{this.cartService.total | currency:'USD'}}</h5>
        </div>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <a type="button" class="btn btn-default btn-link" (click)="activeModal.dismiss('Cross click')" routerLink="/checkout">Checkout</a>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <a type="button" class="btn btn-danger btn-link" (click)="activeModal.dismiss('Cross click')" routerLink="/cart">View Cart</a>
        </div>
    </div>
    </div>
    `
})
export class CartModalContent implements OnInit {
    cartItems: IItem[] = []
    constructor(public activeModal: NgbActiveModal, private cartService: CartService, public location: Location, private authService: AuthService) {

    }
    ngOnInit(): void {
        if (this.authService.isLoggedIn())
            this.cartService.cartItems$.subscribe(cartItems => this.cartItems = cartItems)
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
}
@Component({
    selector: 'app-modal-component',
    templateUrl: './cart.component.html'
})
export class CartModalComponent implements OnInit {
    constructor(private modalService: NgbModal, private cartService: CartService, private authService: AuthService) { }
    ngOnInit(): void {
        if (this.authService.isLoggedIn()) {
            this.cartService.FetchCartItems().subscribe({
                next: response => {
                    this.cartService.SetCartItems(response)
                    this.cartService.numberOfItems = response.length
                    response.forEach(item => {
                        this.cartService.total += item.price * item.qty
                    });
                }, error: err =>
                    console.log(err)
            });
        }
    }
    open() {
        this.modalService.open(CartModalContent);
    }

}