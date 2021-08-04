import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { IItem } from 'app/models/item.model';

const httpOptions = {
  headers: new HttpHeaders({
    //token hardcoded for now
    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEwOTcyNTA2YWU4MDk2OWVjZjFkMTNlIn0sImlhdCI6MTYyODA4MzA1NiwiZXhwIjoxNjI4NDQzMDU2fQ.X_PtRykPKzQGCPOfMOC0mEEX1u0MY4aLOA3gQhZTY6Y'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  AddItemToCart(id: string, qty: number): Observable<{ productId: string, qty: number }> {
    return this.http.post<{ productId: string, qty: number }>(this.SERVER_URL + '/cart/addToCart', { productId: id, qty: qty }, httpOptions)
  }
  GetCartItems() {
    return this.http.get<IItem[]>(this.SERVER_URL + '/cart/getCartItems', httpOptions)
  }
  DeleteItemFromCart(id: string): Observable<any> {
    return this.http.post(this.SERVER_URL + '/cart/deleteItem', { productId: id }, httpOptions)
  }

}
