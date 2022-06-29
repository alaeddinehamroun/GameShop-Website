import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from 'app/models/product.model';
import { ProductService } from 'app/services/product.service';
import { AuthService } from 'app/services/auth.service';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
    private activatedRoute: ActivatedRoute,
    private authService: AuthService, //it is actually used in template
    private toast: ToastrService) { }

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
  navigateTo(anchor: string) {
    this.router.navigate([''], { fragment: anchor });
  }
}
