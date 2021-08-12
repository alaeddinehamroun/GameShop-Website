import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { Error404Component } from './components/error404/error404.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes =[
    { path: '',             component: HomeComponent },

    { path: 'register',     component: SignupComponent },
    { path: 'login',     component: LoginComponent },
    { path: 'products/:category',     component: ProductListComponent },
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'cart', component: CartDetailsComponent},
    {path: '**', component: Error404Component}

  ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
