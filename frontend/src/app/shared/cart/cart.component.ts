import {Component} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cart-model-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Modal title</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> Far far away, behind
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Never mind</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">DELETE</button>
        </div>
    </div>
    `
})
export class CartModalContent {

    constructor(public activeModal: NgbActiveModal) {}
}
@Component({
    selector: 'app-modal-component',
    templateUrl: './cart.component.html'
})
export class CartModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        this.modalService.open(CartModalContent);
    }
}
