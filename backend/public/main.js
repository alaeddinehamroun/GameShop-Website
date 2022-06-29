(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/flf":
/*!**********************************************!*\
  !*** ./src/app/services/wishlist.service.ts ***!
  \**********************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistService = /** @class */ (function () {
    function WishlistService() {
        this.wishlist = [];
        this.wishlist$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.wishlist);
        var info;
        var data = localStorage.getItem('wishlist');
        console.log(data);
        if (data !== null) {
            info = JSON.parse(data);
            console.log(info);
            this.wishlist = info;
        }
        else {
            info = null;
            this.wishlist = [];
        }
        this.wishlist$.next(this.wishlist);
    }
    WishlistService.prototype.AddProductToWishlist = function (id, title) {
        this.wishlist.push({ id: id, title: title });
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
        this.wishlist$.next(this.wishlist);
    };
    WishlistService.prototype.RemoveProductFromWishList = function (id) {
        var index = this.wishlist.findIndex(function (p) { return p.id == id; });
        if (index > -1)
            this.wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
        this.wishlist$.next(this.wishlist);
    };
    WishlistService.prototype.userHasLiked = function (id) {
        if (this.wishlist) {
            var index = this.wishlist.findIndex(function (p) { return p.id == id; });
            if (index > -1)
                return true;
        }
        return false;
    };
    WishlistService.ctorParameters = function () { return []; };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Desktop\GameShop\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "4jjE":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error404/error404.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/404.jpg');\">\r\n      <div class=\"filter\"></div>\r\n      <div class=\"container text-center\" style=\"z-index: 4;\">\r\n              <h1 class=\"title\">\r\n                  404\r\n              </h1>\r\n              <br>\r\n              <p class=\"text-white bg-danger\">page not found</p>\r\n      </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "50ZR":
/*!*******************************************************************!*\
  !*** ./src/app/components/cart-details/cart-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function() { return CartDetailsComponent; });
/* harmony import */ var _raw_loader_cart_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cart-details.component.html */ "u//t");
/* harmony import */ var _cart_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-details.component.css */ "B1Tb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
/* harmony import */ var app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/cart.service */ "c14U");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(cartService, authService) {
        this.cartService = cartService;
        this.authService = authService;
    }
    CartDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn) {
            this.cartService.cartItems$.subscribe(function (cartItems) { return _this.cartItems = cartItems; });
        }
    };
    CartDetailsComponent.prototype.deleteItemFromCart = function (id) {
        var _this = this;
        this.cartService.DeleteItemFromCart(id).subscribe({
            next: function (response) {
                var itemIndex = _this.cartItems.findIndex(function (i) { return i._id == id; });
                //update total and number of items
                _this.cartService.numberOfItems -= 1;
                _this.cartService.total -= _this.cartItems[itemIndex].price * _this.cartItems[itemIndex].qty;
                //delete item from component and service
                _this.cartItems.splice(itemIndex, 1);
                _this.cartService.SetCartItems(_this.cartItems);
            }, error: function (err) {
                return console.log(err);
            }
        });
    };
    CartDetailsComponent.prototype.increaseQuantity = function (id) {
        var _this = this;
        console.log('increase');
        //get item index
        var itemIndex = this.cartItems.findIndex(function (i) { return i._id == id; });
        this.cartService.AddItemToCart(id, 1).subscribe({
            next: function (response) {
                console.log(response);
                _this.cartItems[itemIndex].qty++;
                _this.cartService.SetCartItems(_this.cartItems);
                _this.cartService.total += _this.cartItems[itemIndex].price;
            }
        });
    };
    CartDetailsComponent.prototype.decreaseQuantity = function (id) {
        var _this = this;
        console.log('decrease');
        //get item index
        var itemIndex = this.cartItems.findIndex(function (i) { return i._id == id; });
        if (this.cartItems[itemIndex].qty > 1)
            this.cartService.AddItemToCart(id, -1).subscribe({
                next: function (response) {
                    _this.cartItems[itemIndex].qty--;
                    _this.cartService.SetCartItems(_this.cartItems);
                    _this.cartService.total -= _this.cartItems[itemIndex].price;
                    console.log(response);
                }
            });
        else
            this.deleteItemFromCart(id);
    };
    CartDetailsComponent.ctorParameters = function () { return [
        { type: app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
        { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    CartDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cart-details',
            template: _raw_loader_cart_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_cart_details_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());



/***/ }),

/***/ "5Ey6":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "i5Y9");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss */ "Otos");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = {
            username: null,
            email: null,
            password: null
        };
        this.error = null;
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn())
            this.router.navigate(['']);
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        this.error = null;
        var _a = this.form, username = _a.username, email = _a.email, password = _a.password;
        console.log(this.form);
        if (username && email && password) {
            this.authService.register(username, email, password)
                .subscribe(function (response) {
                console.log("User is registered");
                console.log(response);
                _this.router.navigate(['']);
            }, function (error) {
                if (error.error)
                    _this.error = error.error;
                console.log(_this.error);
            });
        }
        else
            console.log('error');
    };
    SignupComponent.ctorParameters = function () { return [
        { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "6gHt":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-details/product-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" style=\"background-color: rgb(231, 103, 103);\">\r\n    <div class=\"content-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row mb-5\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col\">\r\n                    <button class=\"btn btn-primary\" (click)='onBack()'>\r\n                        <i class=\"fa fa-chevron-left\"></i>Back\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"section\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-7 col-sm-6\">\r\n                            <div class=\" card page-carousel\">\r\n                                <ngb-carousel class=\"carousel slide\" tabindex=\"0\" style=\"display: block;\">\r\n                                    <ng-template ngbSlide *ngFor=\"let image of product?.images\">\r\n                                        <div class=\"picsum-img-wrapper\">\r\n                                            <img [src]=\"image.url\" alt=\"Random first slide\">\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </ngb-carousel>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5 col-sm-6\">\r\n                            <h2>{{product?.title}}</h2>\r\n                            <app-like [id]=\"product?._id\" [title]=\"product?.title\">\r\n                            </app-like>\r\n                            <h3>{{product?.category}}</h3>\r\n                            <h4>{{product?.subtitle}}</h4>\r\n                            <h4 class=\"price\">{{product?.price}}</h4>\r\n                            <span *ngIf=\"product?.isInStock\">In Stock</span>\r\n                            <hr>\r\n                            <p>{{product?.description}}</p>\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <hr>\r\n                                    <p>Select quantity</p>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-xs-2\">\r\n                                            <span (click)=\"Decrease()\" class=\"qty-down\"> <i class=\"fa fa-minus\">\r\n                                                </i></span>\r\n                                            <input class=\"form-control\" #quantity max=\"100\" readonly type=\"number\"\r\n                                                value=\"1\">\r\n                                            <span (click)=\"Increase()\"><i class=\"fa fa-plus\"> </i></span>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col\">\r\n                                                <app-add-to-cart\r\n                                                    [disabled]=\"!product?.isInStock || this.authService.isLoggedOut()\"\r\n                                                    [productId]=\"product?._id\" [productPrice]=\"product?.price\"\r\n                                                    [isInStock]=\"product?.isInStock\" [qty]=\"qty\">\r\n                                                </app-add-to-cart>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "9LKM":
/*!*************************************************************!*\
  !*** ./src/app/shared/add-to-cart/add-to-cart.component.ts ***!
  \*************************************************************/
/*! exports provided: AddToCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function() { return AddToCartComponent; });
/* harmony import */ var _raw_loader_add_to_cart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-to-cart.component.html */ "rmb7");
/* harmony import */ var _add_to_cart_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-to-cart.component.css */ "WRC8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/cart.service */ "c14U");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartService) {
        this.cartService = cartService;
    }
    AddToCartComponent.prototype.ngOnInit = function () {
    };
    //add to cart
    AddToCartComponent.prototype.AddToCart = function () {
        var _this = this;
        this.cartService.AddItemToCart(this.productId, this.qty).subscribe({
            next: function (response) {
                _this.cartService.FetchCartItems().subscribe({
                    next: function (response) {
                        _this.cartService.SetCartItems(response);
                        _this.cartService.numberOfItems = response.length;
                        _this.cartService.total += _this.productPrice * _this.qty;
                    }, error: function (err) {
                        return console.log(err);
                    }
                });
            }
        });
    };
    AddToCartComponent.ctorParameters = function () { return [
        { type: app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
    ]; };
    AddToCartComponent.propDecorators = {
        productId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        isInStock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        qty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        productPrice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    AddToCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-to-cart',
            template: _raw_loader_add_to_cart_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_to_cart_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], AddToCartComponent);
    return AddToCartComponent;
}());



/***/ }),

/***/ "A2iS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/wishlist/wishlist.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\" btn btn-primary btn-just-icon mr-2\" (click)=\"open()\" ngbTooltip=\"Your wishlist\"\r\nplacement=\"bottom\">\r\n    <i class=\" fa fa-heart\"> </i><span class=\" badge badge-pill badge-danger mr-1\"> {{this.numberOfWishes}} </span>\r\n</button>\r\n\r\n");

/***/ }),

/***/ "A6fv":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        console.log("Interception In Progress"); // Interception Stage
        var idToken = localStorage.getItem("id_token");
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set("authorization", idToken)
            });
            return next.handle(cloned).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
                // Catching Error Stage
                if (error && error.status === 401) {
                    console.log("ERROR 401 UNAUTHORIZED"); // in case of an error response the error message is displayed
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(function () { console.log(error); }); // any further errors are returned to frontend                    
            }));
            ;
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "A81y":
/*!********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper{\r\n    background-color: rgb(231, 103, 103);\r\n}\r\n.card-img-top {\r\n    width: 100%;\r\n    height: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDEwMywgMTAzKTtcclxufVxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    SERVER_URL: "/api"
};


/***/ }),

/***/ "B1Tb":
/*!********************************************************************!*\
  !*** ./src/app/components/cart-details/cart-details.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "BU36":
/*!***************************************************************!*\
  !*** ./src/app/components/home/welcome/welcome.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fragment = this.activatedRoute.snapshot.fragment;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, modalService, authService, router) {
        this.location = location;
        this.element = element;
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        console.log(this.authService.isLoggedIn());
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.removeLeftNav = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/login' || titlee === '/register') {
            return false;
        }
        else {
            return true;
        }
    };
    NavbarComponent.prototype.navigateTo = function (anchor) {
        this.router.navigate([''], { fragment: anchor });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.SERVER_URL = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL;
    }
    //GET 
    ProductService.prototype.getAllProducts = function () {
        return this.http.get(this.SERVER_URL + '/products');
    };
    //GET SINGLE PRODUCT
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.SERVER_URL + '/products/' + id);
    };
    //GET PRODUCTS BY CATEGORY
    ProductService.prototype.getAllProductsByCategory = function (category) {
        return this.http.get(this.SERVER_URL + '/products/category/' + category);
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "M4LM":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/cart/cart.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\" btn btn-primary btn-just-icon mr-2\" (click)=\"open()\" ngbTooltip=\"Your cart\" placement=\"left\">\r\n    <i class=\" fa fa-shopping-cart\"> </i><span class=\" badge badge-pill badge-danger mr-1\"\r\n        *ngIf=\"this.authService.isLoggedIn()\">{{this.cartService.numberOfItems}}</span>\r\n</button>");

/***/ }),

/***/ "Nu2X":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/categories/categories.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "O5bD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"page-header\" style=\"background-image: url('./assets/img/register.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\r\n          <div class=\"card card-register\">\r\n            <h3 class=\"title\">Login</h3>\r\n            <form class=\"register-form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n              <label>Email</label>\r\n              <div class=\"input-group form-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"nc-icon nc-email-85\"></i>\r\n                  </span>\r\n                </div>\r\n\r\n                <input name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\"\r\n                  (blur)=\"focus=false\" [(ngModel)]=\"form.email\" required #email=\"ngModel\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\">\r\n              </div>\r\n              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.errors && f.submitted\">\r\n                <div *ngIf=\"email.errors.required\">\r\n                  email is required \r\n                </div>\r\n                <div *ngIf=\"email.errors.pattern\">\r\n                  Email must be a valid email address\r\n                </div>\r\n\r\n              </div>\r\n              <label>Password</label>\r\n              <div class=\"input-group form-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"nc-icon nc-key-25\"></i>\r\n                  </span>\r\n                </div>\r\n                <input name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\"\r\n                  [(ngModel)]=\"form.password\" required minlength=\"6\" #password=\"ngModel\" (blur)=\"focus1=false\"\r\n                  autocomplete=\"off\">\r\n\r\n              </div>\r\n              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.errors && f.submitted\">\r\n                <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                <div *ngIf=\"password.errors.minlength\">\r\n                  Password must be at least 6 characters\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"this.invalidCredentials\">\r\n                invalid credentials\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button class=\"btn btn-danger btn-block btn-round\">Login</button>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && isLoginFailed\">\r\n                  Login failed: {{ errorMessage }}\r\n                </div>\r\n              </div>\r\n            </form>\r\n              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\r\n              <p> Dont have an account?<a class=\"text-secondary\" [routerLink]=\"['/register']\"> Register Here</a></p> \r\n         \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer register-footer text-center\">\r\n        <h6>made with <i class=\"fa fa-heart heart\"></i> by Alaeddine</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "Otos":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "PGh4":
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./about.component.html */ "cPLN");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.css */ "Qo5B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.ctorParameters = function () { return []; };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-about',
            template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "Qftz":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/promotions/promotions.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!--promotions-->\r\n <div class=\"container bg-default\">\r\n\r\n    <h2 class=\"title text-center\">Latest Products</h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card h-100\">\r\n                <img class=\"card-img-top\" src=\"https://i.imgur.com/FoQPTHV.jpg\"/>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\" card-title\">Legion</h4>\r\n                    <p>Curabitur ornare dui quis nisl sodales posuere. Aliquam in sapien non risus sagittis dictum eu vel tellus. Morbi dignissim mi eu risus gravida egestas. Phasellus facilisis dolor nec nulla pretium gravida.</p>\r\n                    <a class=\" btn btn-primary\">\r\n                        See Now\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card h-100\">\r\n                <img class=\"card-img-top\" src=\"https://i.pinimg.com/736x/07/04/be/0704be656e5cba718a4303e01eebb182.jpg\"/>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\" card-title\">xbox</h4>\r\n                    <p>Curabitur ornare dui quis nisl sodales posuere. Aliquam in sapien non risus sagittis dictum eu vel tellus. Morbi dignissim mi eu risus gravida egestas. Phasellus facilisis dolor nec nulla pretium gravida.</p>\r\n                    <a class=\" btn btn-primary\">\r\n                        See Now\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card h-100\">\r\n                <img class=\"card-img-top\" src=\"https://wallpaperaccess.com/full/2068794.jpg\"/>\r\n                <div class=\" card-body\">\r\n                    <h4 class=\"card-title\">Headsets</h4>\r\n                    <p>Curabitur ornare dui quis nisl sodales posuere. Aliquam in sapien non risus sagittis dictum eu vel tellus. Morbi dignissim mi eu risus gravida egestas. Phasellus facilisis dolor nec nulla pretium gravida.</p>\r\n                    <a class=\" btn btn-primary\">\r\n                        See Now\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card h-100\">\r\n                <img class=\"card-img-top\" src=\"https://i.pinimg.com/originals/a6/e9/c4/a6e9c4a3846968087868f9816ac87980.jpg\"/>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Valhala</h4>\r\n                    <p>Curabitur ornare dui quis nisl sodales posuere. Aliquam in sapien non risus sagittis dictum eu vel tellus. Morbi dignissim mi eu risus gravida egestas. Phasellus facilisis dolor nec nulla pretium gravida.</p>\r\n                    <a class=\" btn btn-primary\">\r\n                        See Now\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "Qo5B":
/*!***********************************************************!*\
  !*** ./src/app/components/home/about/about.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SpLk":
/*!************************************************************!*\
  !*** ./src/app/components/error404/error404.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'register' || titlee === 'login' || titlee === 'products' || titlee === 'product' || titlee === 'cart') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VNzF":
/*!***********************************************!*\
  !*** ./src/app/shared/like/like.component.ts ***!
  \***********************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _raw_loader_like_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./like.component.html */ "mGEU");
/* harmony import */ var _like_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./like.component.css */ "k336");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/wishlist.service */ "/flf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LikeComponent = /** @class */ (function () {
    function LikeComponent(wishlistService) {
        this.wishlistService = wishlistService;
    }
    LikeComponent.prototype.ngOnInit = function () {
    };
    LikeComponent.prototype.like = function (id, title) {
        this.wishlistService.AddProductToWishlist(id, title);
    };
    LikeComponent.prototype.unlike = function (id) {
        this.wishlistService.RemoveProductFromWishList(id);
    };
    LikeComponent.prototype.onClick = function (id, title) {
        if (this.wishlistService.userHasLiked(id))
            this.unlike(id);
        else
            this.like(id, title);
    };
    LikeComponent.ctorParameters = function () { return [
        { type: app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] }
    ]; };
    LikeComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    LikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-like',
            template: _raw_loader_like_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_like_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"]])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\r\n");

/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "O5bD");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ "Yz0z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = {
            email: null,
            password: null
        };
        this.invalidCredentials = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn())
            this.router.navigate(['']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.invalidCredentials = false;
        var _a = this.form, email = _a.email, password = _a.password;
        console.log(this.form);
        if (email && password) {
            this.authService.login(email, password)
                .subscribe(function () {
                console.log("User is logged in");
                _this.router.navigate(['']);
            }, function (err) {
                if (err.status === 400)
                    _this.invalidCredentials = true;
            });
        }
        else
            console.log('error');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "WRC8":
/*!**************************************************************!*\
  !*** ./src/app/shared/add-to-cart/add-to-cart.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdG8tY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Yz0z":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _shared_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/cart/cart.component */ "cY+U");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "a6FK");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "ZQA1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/cart-details/cart-details.component */ "50ZR");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.interceptor */ "A6fv");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/error404/error404.component */ "bqWh");
/* harmony import */ var _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/about/about.component */ "PGh4");
/* harmony import */ var _components_home_promotions_promotions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/promotions/promotions.component */ "rYED");
/* harmony import */ var _components_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/welcome/welcome.component */ "pQ1R");
/* harmony import */ var _components_home_categories_categories_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/categories/categories.component */ "zv8f");
/* harmony import */ var _shared_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/wishlist/wishlist.component */ "jh0M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_like_like_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/like/like.component */ "VNzF");
/* harmony import */ var _shared_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/add-to-cart/add-to-cart.component */ "9LKM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _shared_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartModalContent"],
                _shared_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartModalComponent"],
                _shared_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__["WishlistModalContent"],
                _shared_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__["wishlistModalComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"],
                _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailsComponent"],
                _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_17__["CartDetailsComponent"],
                _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_20__["Error404Component"],
                _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _components_home_promotions_promotions_component__WEBPACK_IMPORTED_MODULE_22__["PromotionsComponent"],
                _components_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_23__["WelcomeComponent"],
                _components_home_categories_categories_component__WEBPACK_IMPORTED_MODULE_24__["CategoriesComponent"],
                _shared_like_like_component__WEBPACK_IMPORTED_MODULE_27__["LikeComponent"],
                _shared_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_28__["AddToCartComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrModule"].forRoot(),
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZQA1":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _raw_loader_product_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./product-details.component.html */ "6gHt");
/* harmony import */ var _product_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.component.css */ "bpnJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
/* harmony import */ var app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/product.service */ "Gdn9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productservice, activatedRoute, router, authService, //used in template
    _location) {
        this.productservice = productservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authService = authService;
        this._location = _location;
        this.qty = 1;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (param) {
            return param.get("id");
        })).subscribe(function (prodId) {
            _this.id = prodId;
            (_this.productservice.getProduct(_this.id).subscribe)(function (prod) {
                _this.product = prod;
            }, function (error) {
                if (error.status == 404)
                    _this.router.navigate(['**']);
            });
        });
    };
    ProductDetailsComponent.prototype.onBack = function () {
        this._location.back();
    };
    ProductDetailsComponent.prototype.Increase = function () {
        this.qty = Number(++this.quantityInput.nativeElement.value);
        console.log(this.qty);
    };
    ProductDetailsComponent.prototype.Decrease = function () {
        if (this.quantityInput.nativeElement.value > 1)
            this.qty = Number(--this.quantityInput.nativeElement.value);
    };
    ProductDetailsComponent.ctorParameters = function () { return [
        { type: app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
    ]; };
    ProductDetailsComponent.propDecorators = {
        quantityInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['quantity',] }]
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product-details',
            template: _raw_loader_product_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_product_details_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "a6FK":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "d5ul");
/* harmony import */ var _product_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list.component.css */ "A81y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/product.service */ "Gdn9");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(router, productService, activatedRoute, authService, //it is actually used in template
    toast) {
        this.router = router;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.toast = toast;
        this.products = [];
        this.pageNumber = 1;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (param) {
            return param.get("category");
        })).subscribe(function (category) {
            _this.category = category;
            if (["all", "games", "consoles", "accessories", "cards"].indexOf(_this.category) < 0) {
                _this.router.navigate(['**']);
            }
            if (_this.category !== "all") {
                _this.productService.getAllProductsByCategory(_this.category).subscribe({
                    next: function (response) {
                        _this.products = response;
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }
            if (_this.category === "all") {
                _this.productService.getAllProducts().subscribe({
                    next: function (response) {
                        _this.products = response;
                    },
                    error: function (err) {
                        return console.log(err);
                    }
                });
            }
        });
    };
    //navigte to product details
    ProductListComponent.prototype.selectProduct = function (id) {
        this.router.navigate(['/product', id]).then();
    };
    ProductListComponent.prototype.navigateTo = function (anchor) {
        this.router.navigate([''], { fragment: anchor });
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
    ]; };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product-list',
            template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_product_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "a6FK");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "ZQA1");
/* harmony import */ var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart-details/cart-details.component */ "50ZR");
/* harmony import */ var _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/error404/error404.component */ "bqWh");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};
var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'register', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'products/:category', component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"] },
    { path: 'product/:id', component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"] },
    { path: 'cart', component: _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_9__["CartDetailsComponent"] },
    { path: '**', component: _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_10__["Error404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, routerOptions)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bpnJ":
/*!**************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "bqWh":
/*!***********************************************************!*\
  !*** ./src/app/components/error404/error404.component.ts ***!
  \***********************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./error404.component.html */ "4jjE");
/* harmony import */ var _error404_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error404.component.css */ "SpLk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component.ctorParameters = function () { return []; };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-error404',
            template: _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_error404_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = /** @class */ (function () {
    function CartService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.numberOfItems = 0;
        this.total = 0;
        this.cartItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.cartItems$ = this.cartItems.asObservable();
        this.SERVER_URL = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL;
    }
    CartService.prototype.FetchCartItems = function () {
        return this.http.get(this.SERVER_URL + '/cart/getCartItems');
    };
    CartService.prototype.SetCartItems = function (cartItems) {
        this.cartItems.next(cartItems);
    };
    CartService.prototype.AddItemToCart = function (id, qty) {
        return this.http.post(this.SERVER_URL + '/cart/addToCart', { productId: id, qty: qty });
    };
    CartService.prototype.DeleteItemFromCart = function (id) {
        return this.http.post(this.SERVER_URL + '/cart/deleteItem', { productId: id });
    };
    CartService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "cPLN":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/about/about.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--about-->\r\n<div class=\"container bg-default mt-5 mb-5\" id=\"about\" style=\"height: 400px;\">\r\n\r\n    <h2 class=\"title\">- About Us</h2>\r\n    <h5 class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at placerat ante.\r\n        Praesent\r\n        nulla nunc, pretium dapibus efficitur in, auctor eget elit. Lorem ipsum dolor sit amet</h5>\r\n</div>");

/***/ }),

/***/ "cY+U":
/*!***********************************************!*\
  !*** ./src/app/shared/cart/cart.component.ts ***!
  \***********************************************/
/*! exports provided: CartModalContent, CartModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalContent", function() { return CartModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalComponent", function() { return CartModalComponent; });
/* harmony import */ var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cart.component.html */ "M4LM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartModalContent = /** @class */ (function () {
    function CartModalContent(activeModal, cartService, location, authService) {
        this.activeModal = activeModal;
        this.cartService = cartService;
        this.location = location;
        this.authService = authService;
        this.cartItems = [];
    }
    CartModalContent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn())
            this.cartService.cartItems$.subscribe(function (cartItems) { return _this.cartItems = cartItems; });
    };
    CartModalContent.prototype.deleteItemFromCart = function (id) {
        var _this = this;
        this.cartService.DeleteItemFromCart(id).subscribe({
            next: function (response) {
                var itemIndex = _this.cartItems.findIndex(function (i) { return i._id == id; });
                //update total and number of items
                _this.cartService.numberOfItems -= 1;
                _this.cartService.total -= _this.cartItems[itemIndex].price * _this.cartItems[itemIndex].qty;
                //delete item from component and service
                _this.cartItems.splice(itemIndex, 1);
                _this.cartService.SetCartItems(_this.cartItems);
            }, error: function (err) {
                return console.log(err);
            }
        });
    };
    CartModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    CartModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cart-model-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Your Cart</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\" *ngIf=\"this.cartService.numberOfItems==0\">\n        Your cart is empty\n    </div>\n    <div *ngIf=\"this.cartService.numberOfItems>0\">\n    <div class=\"modal-body\">\n        <div class=\"table-responsive\" style=\" overflow:scroll-vertical;\n        height:300px;\">\n            <table class=\" table table-shopping\" >\n                <tbody>\n                    <tr *ngFor=\"let item of this.cartItems\">\n                        <a class=\"btn-danger\" (click)=\"deleteItemFromCart(item._id)\"><i class=\"fa fa-close\"></i></a>\n                        <td>\n                            <div class=\" img-container\">\n                            <img\n                                alt=\"{{item.title}}\"\n                                src=\"{{item.image}}\"\n                                style=\"width: 100px;\n                                height: 80px;\"\n                            />\n                            </div>\n                        </td>\n                        <td class=\"td-name\">\n                            <tr>\n                                <h5> {{item.title}} </h5> \n                            </tr>\n                            <tr>\n                                <small>{{item.qty}} x {{item.price | currency: \"USD\"}} </small>\n                            </tr>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>    \n        <div class=\"cart-summary mt-4\">\n                <small>{{this.cartService.numberOfItems}} Item(s) selected</small>\n                <h5>TOTAL : {{this.cartService.total | currency:'USD'}}</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <a type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.dismiss('Cross click')\" routerLink=\"/checkout\">Checkout</a>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <a type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.dismiss('Cross click')\" routerLink=\"/cart\">View Cart</a>\n        </div>\n    </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CartModalContent);
    return CartModalContent;
}());

var CartModalComponent = /** @class */ (function () {
    function CartModalComponent(modalService, cartService, authService) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.authService = authService;
    }
    CartModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            this.cartService.FetchCartItems().subscribe({
                next: function (response) {
                    _this.cartService.SetCartItems(response);
                    _this.cartService.numberOfItems = response.length;
                    response.forEach(function (item) {
                        _this.cartService.total += item.price * item.qty;
                    });
                }, error: function (err) {
                    return console.log(err);
                }
            });
        }
    };
    CartModalComponent.prototype.open = function () {
        this.modalService.open(CartModalContent);
    };
    CartModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    CartModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-component',
            template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CartModalComponent);
    return CartModalComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "d5ul":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-list/product-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"content-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5 mb-5\">\r\n                <div class=\"col\">\r\n                    <nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n                        <ol class=\" breadcrumb\">\r\n                            <li class=\" breadcrumb-item\"><a [routerLink]=\"['']\"> Home </a></li>\r\n                            <li class=\" breadcrumb-item\"><a (click)=\"navigateTo('categories')\" style=\"cursor: pointer;\">\r\n                                    Categories </a></li>\r\n                            <li aria-current=\"page\" class=\" breadcrumb-item active\">{{category}}</li>\r\n                        </ol>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"row row-cols-1 row-cols-md-4\" *ngIf=\"this.products.length > 0\">\r\n                        <div class=\"col mb-4\"\r\n                            *ngFor=\"let product of products | paginate: { itemsPerPage: 12, currentPage: pageNumber }\">\r\n                            <div class=\"card h-100\">\r\n                                <img [src]=\"product.images[0].url\" alt=\"{{product.title}}\" class=\"card-img-top\"\r\n                                    (click)=\"selectProduct(product._id)\" />\r\n                                <div class=\" card-body\">\r\n                                    <h4 class=\" card-title\">{{product.title | titlecase}}\r\n                                        <app-like [id]=\"product._id\"\r\n                                            [title]=\"product.title\"></app-like>\r\n                                    </h4>\r\n                                    <h6>{{product.subtitle}}</h6>\r\n                                    <h5>{{product.price | currency: 'USD'}}</h5>\r\n                                    <app-add-to-cart [disabled]=\"!product.isInStock || this.authService.isLoggedOut()\"\r\n                                        [productId]=\"product._id\" [productPrice]=\"product.price\"\r\n                                        [isInStock]=\"product.isInStock\" [qty]=\"1\"></app-add-to-cart>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"this.products.length == 0\">\r\n                        <h5>No Product Found</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row justify-content-center \">\r\n                <pagination-controls (pageChange)=\"pageNumber = $event\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "i5Y9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/register.jpg');\">\r\n      <div class=\"filter\"></div>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\r\n            <div class=\"card card-register\">\r\n              <h3 class=\"title\">Welcome</h3>\r\n              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && this.error\">\r\n                  {{this.error}}\r\n              </div>\r\n              <form class=\"register-form\" name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n                <label>Username</label>\r\n                <div class=\"input-group form-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                      <i class=\"nc-icon nc-single-02\"></i>\r\n                    </span>\r\n                  </div>\r\n  \r\n                  <input name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"username\" (focus)=\"focus=true\"\r\n                    (blur)=\"focus=false\" [(ngModel)]=\"form.username\" required #username=\"ngModel\">\r\n                </div>\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"username.errors && f.submitted\">\r\n                  <div *ngIf=\"username.errors.required\">\r\n                    username is required \r\n                  </div>\r\n                </div>\r\n                <label>Email</label>\r\n                <div class=\"input-group form-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                      <i class=\"nc-icon nc-email-85\"></i>\r\n                    </span>\r\n                  </div>\r\n  \r\n                  <input name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\"\r\n                    (blur)=\"focus=false\" [(ngModel)]=\"form.email\" required #email=\"ngModel\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\">\r\n                </div>\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.errors && f.submitted\">\r\n                  <div *ngIf=\"email.errors.required\">\r\n                    email is required \r\n                  </div>\r\n                  <div *ngIf=\"email.errors.pattern\">\r\n                    Email must be a valid email address\r\n                  </div>\r\n  \r\n                </div>\r\n                <label>Password</label>\r\n                <div class=\"input-group form-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                      <i class=\"nc-icon nc-key-25\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <input name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\"\r\n                    [(ngModel)]=\"form.password\" required minlength=\"6\" #password=\"ngModel\" (blur)=\"focus1=false\"\r\n                    autocomplete=\"off\">\r\n  \r\n                </div>\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.errors && f.submitted\">\r\n                  <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"password.errors.minlength\">\r\n                    Password must be at least 6 characters\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"this.error\">\r\n                  error\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <button class=\"btn btn-danger btn-block btn-round\">Register</button>\r\n                </div>\r\n              </form>\r\n                <p> Already have an account?<a class=\"text-secondary\" [routerLink]=\"['/login']\"> Login Here</a></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer register-footer text-center\">\r\n          <h6>made with <i class=\"fa fa-heart heart\"></i> by Alaeddine</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <nav class=\"footer-nav\">\r\n                <ul>\r\n                    <li><a href=\"#\">Home</a></li>\r\n                    <li><a href=\"#\">About</a></li>\r\n                    <li><a href=\"#\">Licenses</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"credits ml-auto\">\r\n                <span class=\"copyright\">\r\n                    © {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Alaeddine\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "jh0M":
/*!*******************************************************!*\
  !*** ./src/app/shared/wishlist/wishlist.component.ts ***!
  \*******************************************************/
/*! exports provided: WishlistModalContent, wishlistModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistModalContent", function() { return WishlistModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistModalComponent", function() { return wishlistModalComponent; });
/* harmony import */ var _raw_loader_wishlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./wishlist.component.html */ "A2iS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/wishlist.service */ "/flf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WishlistModalContent = /** @class */ (function () {
    function WishlistModalContent(activeModal, location, wishlistService) {
        this.activeModal = activeModal;
        this.location = location;
        this.wishlistService = wishlistService;
        this.wishlist = [];
    }
    WishlistModalContent.prototype.ngOnInit = function () {
        var _this = this;
        this.wishlistService.wishlist$.subscribe(function (data) { return _this.wishlist = data; });
    };
    WishlistModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"] }
    ]; };
    WishlistModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wishlist-model-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Your Wishlist</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div>\n    <div class=\"modal-body\">\n        <div class=\"table-responsive\" style=\" overflow:scroll-vertical;\n        height:300px;\">\n            <h5 *ngIf = \"wishlist.length === 0\">Your Wishlist is empty</h5>\n            <table class=\" table table-shopping\" *ngIf = \"wishlist.length !== 0\">\n                <tbody>\n                    <tr *ngFor=\"let wish of this.wishlist\">                        \n                        <td class=\"td-name\">\n                            <tr>\n                                <a [routerLink] = \"['/product', wish.id]\" (click)=\"activeModal.dismiss('Cross click')\"><h5> {{wish.title}} </h5></a> \n                            </tr>\n                        </td>\n                        <td>\n                            <tr>\n                                <app-like [id] = \"wish.id\" [title] = \"wish.title\"></app-like>\n                            </tr>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>    \n    </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]])
    ], WishlistModalContent);
    return WishlistModalContent;
}());

var wishlistModalComponent = /** @class */ (function () {
    function wishlistModalComponent(modalService, wishlistService) {
        var _this = this;
        this.modalService = modalService;
        this.wishlistService = wishlistService;
        this.numberOfWishes = 0;
        this.wishlistService.wishlist$.subscribe(function (data) { return _this.numberOfWishes = data.length; });
    }
    wishlistModalComponent.prototype.ngOnInit = function () {
    };
    wishlistModalComponent.prototype.open = function () {
        this.modalService.open(WishlistModalContent);
    };
    wishlistModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"] }
    ]; };
    wishlistModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wishlist-modal-component',
            template: _raw_loader_wishlist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]])
    ], wishlistModalComponent);
    return wishlistModalComponent;
}());



/***/ }),

/***/ "k336":
/*!************************************************!*\
  !*** ./src/app/shared/like/like.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWtlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.SERVER_URL = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL;
    }
    AuthService.prototype.login = function (email, passsword) {
        var _this = this;
        return this.http.post(this.SERVER_URL + '/user/login', { email: email, password: passsword }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.setSession(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    AuthService.prototype.register = function (username, email, passsword) {
        var _this = this;
        return this.http.post(this.SERVER_URL + '/user/register', { username: username, email: email, password: passsword }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.setSession(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
    };
    AuthService.prototype.setSession = function (authResult) {
        var expiresAt = moment__WEBPACK_IMPORTED_MODULE_5__().add(authResult.expiresIn, 'second');
        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    };
    AuthService.prototype.isLoggedIn = function () {
        return moment__WEBPACK_IMPORTED_MODULE_5__().isBefore(this.getExpiration());
    };
    AuthService.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    AuthService.prototype.getExpiration = function () {
        var expiration = localStorage.getItem("expires_at");
        var expiresAt = JSON.parse(expiration);
        return moment__WEBPACK_IMPORTED_MODULE_5__(expiresAt);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "mGEU":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/like/like.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<i class=\"fa fa-heart\" \r\n   style=\"cursor: pointer;\" \r\n   [style.color]=\"this.wishlistService.userHasLiked(this.id) ? 'red' : '#E0E0E0'\" \r\n   [ngbTooltip]=\"this.wishlistService.userHasLiked(this.id) ? 'remove from wishlist' : 'add to wishlist'\"\r\n   placement=\"bottom\" \r\n   (click) = \"onClick(this.id,this.title)\"></i>\r\n");

/***/ }),

/***/ "pQ1R":
/*!**************************************************************!*\
  !*** ./src/app/components/home/welcome/welcome.component.ts ***!
  \**************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./welcome.component.html */ "tXp3");
/* harmony import */ var _welcome_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component.css */ "BU36");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.ctorParameters = function () { return []; };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-welcome',
            template: _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_welcome_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "rYED":
/*!********************************************************************!*\
  !*** ./src/app/components/home/promotions/promotions.component.ts ***!
  \********************************************************************/
/*! exports provided: PromotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsComponent", function() { return PromotionsComponent; });
/* harmony import */ var _raw_loader_promotions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./promotions.component.html */ "Qftz");
/* harmony import */ var _promotions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotions.component.css */ "suxc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent() {
    }
    PromotionsComponent.prototype.ngOnInit = function () {
    };
    PromotionsComponent.ctorParameters = function () { return []; };
    PromotionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-promotions',
            template: _raw_loader_promotions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_promotions_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], PromotionsComponent);
    return PromotionsComponent;
}());



/***/ }),

/***/ "rmb7":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/add-to-cart/add-to-cart.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\" btn btn-primary\" [class.disabled]=\"disabled\" (click)=\"AddToCart(productId)\">\r\n    {{ isInStock ? \"Add To Cart\" : \"No Stock\"}}\r\n</a>");

/***/ }),

/***/ "suxc":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/promotions/promotions.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tb3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header\" style=\"background-image: url('assets/img/1.jpg')\">\r\n        <div class=\"filter\"></div>\r\n        <div class=\"fog-low right\">\r\n            <img src=\"assets/img/fog-low.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"content-center\">\r\n            <div class=\"title-brand\">\r\n                <div class=\"angular-logo\">\r\n                </div>\r\n                <img src=\"assets/img/logo.png\" alt=\"\">\r\n                <h3 style=\"font-size: 5em;\r\n                                color: #ff1100;\r\n                                margin: 0;\r\n                                text-align: center;\r\n                                line-height: 1.1;\r\n                                font-weight: 100;\r\n                                line-height: 1.1;\r\n                                text-transform: uppercase;\">\r\n                    Online Gaming Shop\r\n                </h3>\r\n            </div>\r\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators\" style=\"bottom: -50px;\">\r\n                    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n                    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\" style=\"height: 300px; z-index: 4;\">\r\n                    <div class=\"carousel-item active\">\r\n                        <div class=\"content-center\">\r\n                            <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mx-auto text-center\">\r\n                                        <h1 class=\"title\">\r\n                                            Find all the latest games in one place <br>\r\n                                            <button class=\"btn btn-danger btn-round mt-3\" type=\"button\"\r\n                                                [routerLink]=\"['products/all']\">\r\n                                                Shop Now<i class=\" fa fa-arrow-right\"> </i>\r\n                                            </button>\r\n                                        </h1>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-item\">\r\n                        <div class=\"content-center\">\r\n                            <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mx-auto\">\r\n                                        <h1 class=\"title text-center\">\r\n                                            Find all the latest games in one place <br>\r\n                                            <button class=\"btn btn-danger btn-round mt-3\" type=\"button\"\r\n                                                [routerLink]=\"['products/all']\">\r\n                                                Shop Now<i class=\" fa fa-arrow-right\"> </i>\r\n                                            </button>\r\n                                        </h1>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-item\">\r\n                        <div class=\"content-center\">\r\n                            <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mx-auto\">\r\n                                        <h1 class=\"title text-center\">\r\n                                            Find all the latest games in one place  <br>\r\n                                            <button class=\"btn btn-danger btn-round mt-3\" type=\"button\"\r\n                                                [routerLink]=\"['products/all']\">\r\n                                                Shop Now<i class=\" fa fa-arrow-right\"> </i>\r\n                                            </button>\r\n                                        </h1>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\r\n    </div>\r\n    <app-welcome></app-welcome>\r\n    <app-promotions id=\"promotions\"></app-promotions>\r\n    <app-categories id=\"categories\"></app-categories>\r\n    <app-about id=\"about\"></app-about>");

/***/ }),

/***/ "tXp3":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/welcome/welcome.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Welcome-->\r\n<div class=\"container\">\r\n    <h2 class=\"title\">\r\n        Welcome\r\n    </h2>\r\n    <h5 class=\"description\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at placerat ante. Praesent\r\n        nulla nunc, pretium dapibus efficitur in, auctor eget elit. Lorem ipsum dolor sit amet\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at placerat ante. Praesent\r\n        nulla nunc, pretium dapibus efficitur in, auctor eget elit. Lorem ipsum dolor sit amet\r\n    </h5>\r\n</div>");

/***/ }),

/***/ "tZHH":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/categories/categories.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!--categories-->\r\n <div class=\"container  bg-default mt-5 mb-5\">\r\n\r\n    <h2 class=\"title text-center\">Categories</h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card\" data-backgroun=\"image\" style=\"background-image:url('assets/img/categories.jpg') ;\">\r\n                <div class=\"card-body text-center text-white\">\r\n                    <h6 class=\"card-category\">\r\n                        Games\r\n                    </h6>\r\n                    <div class=\"card-icon\">\r\n                        <i class=\"fa fa-gamepad\"></i>\r\n                    </div>\r\n                    <p class=\"card-description text-white\">\r\n                        Aliquam in sapien non risus sagittis dictum eu vel tellus. Morbi dignissim mi eu risus gravida egestas. Phasellus facilisis dolor nec nulla pretium gravida.\r\n                    </p>\r\n                    <div class=\"card-footer\">\r\n                        <a  [routerLink]=\"['/products/games']\"><h6>show more</h6><i class=\"fa fa-arrow-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card\" data-backgroun=\"image\" style=\"background-image:url('assets/img/categories.jpg') ;\">\r\n                <div class=\"card-body text-center text-white\">\r\n                    <h6 class=\"card-category\">\r\n                        Cards\r\n                    </h6>\r\n                    <div class=\"card-icon\">\r\n                        <i class=\"fa fa-gift\"></i>\r\n                    </div>\r\n                    <p class=\"card-description text-white\">\r\n                        Aliquam in sapien non risus sagittis dictum eu vel tellus. Morbi dignissim mi eu risus gravida egestas. Phasellus facilisis dolor nec nulla pretium gravida.\r\n                    </p>\r\n                    <div class=\"card-footer\">\r\n                        <a [routerLink]=\"['/products/cards']\"><h6>show more</h6><i class=\"fa fa-arrow-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card\" data-backgroun=\"image\" style=\"background-image:url('assets/img/categories.jpg') ;\">\r\n                <div class=\"card-body text-center text-white\">\r\n                    <h6 class=\"card-category\">\r\n                        Consoles\r\n                    </h6>\r\n                    <div class=\"card-icon\">\r\n                        <i class=\"fa fa-play\"></i>\r\n                    </div>\r\n                    <p class=\"card-description text-white\">\r\n                        Aliquam in sapien non risus sagittis dictum eu vel tellus. Morbi dignissim mi eu risus gravida egestas. Phasellus facilisis dolor nec nulla pretium gravida.\r\n                    </p>\r\n                    <div class=\"card-footer\">\r\n                        <a [routerLink]=\"['/products/consoles']\"><h6>show more</h6><i class=\"fa fa-arrow-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card\" data-backgroun=\"image\" style=\"background-image:url('assets/img/categories.jpg') ;\">\r\n                <div class=\"card-body text-center text-white\">\r\n                    <h6 class=\"card-category\">\r\n                        Accessories\r\n                    </h6>\r\n                    <div class=\"card-icon\">\r\n                        <i class=\"fa fa-headphones\"></i>\r\n                    </div>\r\n                    <p class=\"card-description\">\r\n                        Aliquam in sapien non risus sagittis dictum eu vel tellus. Morbi dignissim mi eu risus gravida egestas. Phasellus facilisis dolor nec nulla pretium gravida.\r\n                    </p>\r\n                    <div class=\"card-footer\">\r\n                        <a [routerLink]=\"['/products/accessories']\"><h6>show more</h6><i class=\"fa fa-arrow-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "u//t":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-details/cart-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" style=\"background-color: rgb(231, 103, 103);\">\r\n    <div class=\"content-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row mb-5\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col\">\r\n                </div>\r\n            </div>\r\n            <div class=\"section\">\r\n                <div class=\"container\">\r\n                    <div class=\"modal-body\">\r\n                        <div *ngIf=\"cartItems?.length==0\">\r\n                            <h4>Your cart is empty</h4>\r\n                            <a href=\"\">Go Shopping</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive\" *ngIf=\"cartItems?.length>0\">\r\n                        <table class=\"table table-shopping\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\" text-center\"></th>\r\n                                    <th>Title</th>\r\n                                    <th class=\" text-left\">Price</th>\r\n                                    <th class=\" text-left\">Quantity</th>\r\n                                    <th class=\"text-left\">Subtotal</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of cartItems\">\r\n                                    <td>\r\n                                        <div class=\"align-middle img-container\">\r\n                                            <img alt=\"...\"\r\n                                                [src]=\"item.image\"\r\n                                                style=\"height: 100px;width: 100px;\" />\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"align-middle td-name\">\r\n                                        <a>\r\n                                            <h5>{{ item.title }}</h5>\r\n                                        </a>\r\n                                    </td>\r\n                                    <td class=\"align-middle td-number\"> {{item.price | currency:\"USD\"}} </td>\r\n                                    <td class=\"align-middle td-number\">\r\n                                        {{item.qty}}\r\n                                        <div class=\" btn-group\">\r\n                                            <button class=\" btn btn-info btn-sm\" (click)=\"decreaseQuantity(item._id)\">\r\n                                                <i class=\" nc-icon nc-simple-delete\"> </i>\r\n                                            </button>\r\n                                            \r\n                                            <button class=\" btn btn-info btn-sm\" (click)=\"increaseQuantity(item._id)\">\r\n                                                <i class=\" nc-icon nc-simple-add\"> </i>\r\n                                            </button>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"align-middle td-number\">{{item.price*item.qty}}</td>\r\n                                    <td class=\"align-middle td-actions\">\r\n                                        <button class=\" btn btn-round btn-icon btn-neutral\" ngbTooltip=\"Remove item\"\r\n                                            placement=\"left\" type=\"button\" (click)=\"deleteItemFromCart(item._id)\">\r\n                                            <i class=\" nc-icon nc-simple-remove\"> </i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr class=\"border-0\">\r\n                                    <td style=\"border: none;\"></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td><h5>TOTAL</h5></td>\r\n                                    <td><h5>{{this.cartService.total | currency:'USD'}}</h5></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" href=\"#\">Game Shop</a>\r\n            <button aria-expanded=\"false\"aria-label=\"Toggle navigation\" class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#navbarToggler\"  \r\n                (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-collapse pb-5 pb-lg-0\" id=\"navbarToggler\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\" [routerLink]=\"['']\">Home</button>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\" (click)=\"navigateTo('about')\">About</button>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\" (click)=\"navigateTo('promotions')\">Promotions</button>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                        <button class=\"btn btn-outline-success btn-round\" id=\"dropdownBasic1\"\r\n                            ngbDropdownToggle>Categories</button>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n                            <a class=\"dropdown-item\" [routerLink]=\"['/products/consoles']\">Consoles</a>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"['/products/games']\">Games</a>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"['/products/cards']\">Cards</a>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"['/products/accessories']\">Accessories</a>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\"\r\n                        ngbTooltip=\"click here to see all products\" placement=\"bottom\" type=\"button\" [routerLink]=\"['products/all']\">\r\n                        <i class=\"fa fa-search\"></i></button>\r\n                </li>\r\n\r\n\r\n            </ul>\r\n            <ul class=\"navbar-nav ml-auto mr-0\" *ngIf=\"removeLeftNav()\">\r\n                <li class=\"nav-item \">\r\n                    <app-modal-component></app-modal-component>\r\n                    <wishlist-modal-component></wishlist-modal-component>\r\n\r\n\r\n                    <a [routerLink]=\"['login']\" *ngIf=\"this.authService.isLoggedOut()\">\r\n                        <button class=\" btn btn-info btn-just-icon\" ngbTooltip=\"login\" placement=\"right\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                            \r\n\r\n                        </button>\r\n                    </a>\r\n                    <a [routerLink]=\"['']\" *ngIf=\"this.authService.isLoggedIn()\">\r\n                        <button class=\" btn btn-info btn-just-icon\" (click)=\"this.authService.logout()\">\r\n                            <i class=\"fa fa-sign-out\"> </i>\r\n                        </button>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zv8f":
/*!********************************************************************!*\
  !*** ./src/app/components/home/categories/categories.component.ts ***!
  \********************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./categories.component.html */ "tZHH");
/* harmony import */ var _categories_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.component.css */ "Nu2X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.ctorParameters = function () { return []; };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-categories',
            template: _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_categories_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map