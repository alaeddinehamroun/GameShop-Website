import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { IItem } from 'app/models/item.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numberOfItems: number = 0;
  total: number = 0;

  private cartItems = new BehaviorSubject<IItem[]>(null);
  public cartItems$ = this.cartItems.asObservable();

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient,
              private authService: AuthService) { }
  FetchCartItems() {
    return this.http.get<IItem[]>(this.SERVER_URL + '/cart/getCartItems')
  }
  SetCartItems(cartItems: IItem[]) {
    this.cartItems.next(cartItems)
  }
  AddItemToCart(id: string, qty: number): Observable<{ productId: string, qty: number }> {
    return this.http.post<{ productId: string, qty: number }>(this.SERVER_URL + '/cart/addToCart', { productId: id, qty: qty })
  }

  DeleteItemFromCart(id: string): Observable<any> {
    return this.http.post(this.SERVER_URL + '/cart/deleteItem', { productId: id })
  }
  
}
