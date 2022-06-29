import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartModalComponent, CartModalContent } from './shared/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { AboutComponent } from './components/home/about/about.component';
import { PromotionsComponent } from './components/home/promotions/promotions.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { wishlistModalComponent, WishlistModalContent } from './shared/wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';
import { LikeComponent } from './shared/like/like.component';
import { AddToCartComponent } from './shared/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CartModalContent,
    CartModalComponent,
    WishlistModalContent,
    wishlistModalComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    Error404Component,
    AboutComponent,
    PromotionsComponent,
    WelcomeComponent,
    CategoriesComponent,
    LikeComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),



  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
