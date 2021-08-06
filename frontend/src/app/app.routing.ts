import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes =[
    { path: '',             component: HomeComponent },
    { path: 'register',     component: SignupComponent },
    { path: 'login',     component: LoginComponent },
    { path: 'products/category/:category',     component: CategoryComponent },
    { path: 'products',     component: ProductListComponent },
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'cart', component: CartDetailsComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
