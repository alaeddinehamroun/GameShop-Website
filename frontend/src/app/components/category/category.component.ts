import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from 'app/models/product.model';
import { AuthService } from 'app/services/auth.service';
import { CartService } from 'app/services/cart.service';
import { ProductService } from 'app/services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: IProduct[] = [];
  pageNumber: number = 1;
  category: string;
  constructor(private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.category;
      })
    ).subscribe(category => {
      this.category = category;
      console.log(this.category);
      (this.productService.getAllProductsByCategory(this.category).subscribe)({
        next: response => {
          this.products = response;
          console.log(this.products)
        },
        error: err => //this.errorMessage = err
          console.log(err)
      })
    })
  }
  //navigte to product details
  selectProduct(id: string) {
    console.log(id)
    this.router.navigate(['/product', id]).then();
  }

  //add to cart
  AddToCart(id: string) {
    this.cartService.AddItemToCart(id, 1).subscribe({
      next: response => {
        console.log(response)
      }
    });
  }
}
