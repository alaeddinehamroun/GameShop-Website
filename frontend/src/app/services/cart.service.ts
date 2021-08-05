import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { IItem } from 'app/models/item.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient,
              private authService: AuthService) { }

  AddItemToCart(id: string, qty: number): Observable<{ productId: string, qty: number }> {
    return this.http.post<{ productId: string, qty: number }>(this.SERVER_URL + '/cart/addToCart', { productId: id, qty: qty })
  }
  GetCartItems() {
    return this.http.get<IItem[]>(this.SERVER_URL + '/cart/getCartItems')
  }
  DeleteItemFromCart(id: string): Observable<any> {
    return this.http.post(this.SERVER_URL + '/cart/deleteItem', { productId: id })
  }

}
