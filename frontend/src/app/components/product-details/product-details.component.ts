import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from 'app/models/product.model';
import { AuthService } from 'app/services/auth.service';
import { ProductService } from 'app/services/product.service';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product: IProduct;
  qty: number = 1;

  @ViewChild('quantity') quantityInput: any;
  constructor(private productservice: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService, //used in template
    private _location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map((param: ParamMap) => {
        return param.get("id");
      })
    ).subscribe(prodId => {
      this.id = prodId; (
        this.productservice.getProduct(this.id).subscribe)(prod => {
          this.product = prod;
        },
          (error: HttpErrorResponse) => {
            if (error.status == 404)
              this.router.navigate(['**'])
          })
    })
  }

  onBack(): void {
    this._location.back()
  }

  Increase() {
    this.qty = Number(++this.quantityInput.nativeElement.value);
    console.log(this.qty)
  }

  Decrease() {
    if (this.quantityInput.nativeElement.value > 1)
      this.qty = Number(--this.quantityInput.nativeElement.value);
  }
}
