import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'app/models/product.model';
import { ProductService } from 'app/services/product.service';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  pageNumber: number =1;
  constructor(private router: Router,
              private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({ next: response => {
      this.products = response;
      console.log(this.products)
    },
    error: err => //this.errorMessage = err
            console.log(err)});
  }
  //navigte to product details
  selectProduct(id: string) {
    console.log(id)
    this.router.navigate(['/product', id]).then();
  }

  //add to cart
  AddToCart(id: string){
    this.cartService.AddItemToCart(id,1).subscribe({next: response =>{
      console.log(response)
    }});
  }
}
