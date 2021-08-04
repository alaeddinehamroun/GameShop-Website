import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IItem } from 'app/models/item.model';
import { CartService } from 'app/services/cart.service';
@Component({
    selector: 'cart-model-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Your Cart</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body" *ngIf="numberOfItems==0">
        Your cart is empty
    </div>
    <div *ngIf="numberOfItems>0">
    <div class="modal-body">
        <div class="table-responsive" style=" overflow:scroll-vertical;
        height:300px;">
            <table class=" table table-shopping" >
                <tbody>
                    <tr *ngFor="let item of cartItems">
                        <a class="btn-danger" (click)="deleteItemFronCart(item._id)"><i class="fa fa-close"></i></a>
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
                <small>{{numberOfItems}} Item(s) selected</small>
                <h5>TOTAL : {{total | currency:'USD'}}</h5>
        </div>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <a type="button" class="btn btn-default btn-link" routerLink="/checkout">Checkout</a>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <a type="button" class="btn btn-danger btn-link" routerLink="/checkout">View Cart</a>
        </div>
    </div>
    </div>
    `
})
export class CartModalContent implements OnInit {
    cartItems: IItem[]
    numberOfItems: number;
    total: number;
    constructor(public activeModal: NgbActiveModal, private cartService: CartService) { }
    ngOnInit(): void {
        this.cartService.GetCartItems().subscribe({
            next: response => {
                this.cartItems = response
                console.log(this.cartItems)
                this.numberOfItems = this.cartItems.length
                this.total = 0 ;
                this.cartItems.forEach(item => {
                    this.total += item.price * item.qty
                });
            }, error: err =>
                console.log(err)
        });
    }


    deleteItemFronCart(id: string) {
        console.log(id)
        this.cartService.DeleteItemFromCart(id).subscribe({
            next: response => {
                let itemIndex = this.cartItems.findIndex(i => i._id == id)
                this.cartItems.splice(itemIndex, 1)
                this.numberOfItems = this.cartItems.length
                this.total = 0;
                this.cartItems.forEach(item => {
                    this.total += item.price * item.qty
                });
                console.log(response.cartItems)
            }, error: err =>
                console.log(err)
        });
    }
}
@Component({
    selector: 'app-modal-component',
    templateUrl: './cart.component.html'
})
export class CartModalComponent {

    constructor(private modalService: NgbModal) { }

    open() {
        this.modalService.open(CartModalContent);


    }
}
