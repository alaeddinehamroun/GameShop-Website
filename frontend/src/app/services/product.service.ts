import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { IProduct } from 'app/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  //GET 
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.SERVER_URL + '/products')
  }

  //GET SINGLE PRODUCT
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.SERVER_URL + '/products/' + id);
  }
  //GET PRODUCTS BY CATEGORY
  getAllProductsByCategory(category: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.SERVER_URL + '/products/category/' + category);
  }
}
