import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from 'app/models/product.model';
import { ProductService } from 'app/services/product.service';
import { CartService } from 'app/services/cart.service';
import { AuthService } from 'app/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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
        return param.get("category");
      })
    ).subscribe(category => {
      this.category = category;
      if (["all", "games", "consoles", "accessories", "cards"].indexOf(this.category) < 0) {
        this.router.navigate(['**'])
      }
      if (this.category !== "all") {
        this.productService.getAllProductsByCategory(this.category).subscribe({
          next: response => {
            this.products = response;
          },
          error: err => {
            console.log(err)
          }
        })
      }
      if (this.category === "all") {
        console.log('all b')
        this.productService.getAllProducts().subscribe({
          next: response => {
            this.products = response;
          },
          error: err =>
            console.log(err)
        });
      }
    })

  }
  //navigte to product details
  selectProduct(id: string) {
    this.router.navigate(['/product', id]).then();
  }

  //add to cart
  AddToCart(id: string) {
    let productIndex = this.products.findIndex(product => product._id == id)
    this.cartService.AddItemToCart(id, 1).subscribe({
      next: response => {
        this.cartService.FetchCartItems().subscribe({
          next: response => {
            this.cartService.SetCartItems(response)
            this.cartService.numberOfItems = response.length
            this.cartService.total += this.products[productIndex].price
          }, error: err =>
            console.log(err)
        });
      }
    });
  }

  navigateTo(anchor: string) {
    this.router.navigate([''], { fragment: anchor });
  }
}
