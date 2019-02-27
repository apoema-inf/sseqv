(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");





var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'sobre',
        component: _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_4__["SobreComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sseqv';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_9__["SobreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<footer class=\"page-footer uk-padding\">\r\n  <div class=\"uk-child-width-1-2@m uk-child-width-1-1@s\" uk-grid>\r\n    <div class=\"uk-flex uk-flex-around logos-parceiros\">\r\n      <div>\r\n        <img class=\"apoema\" src=\"assets/img/logo.png\">\r\n      </div>\r\n      <div>\r\n        <img class=\"ms\" src=\"assets/img/logo-ms.png\">\r\n      </div>\r\n      <div>\r\n        <img class=\"fns\" src=\"assets/img/logo-fns.png\">\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"uk-child-width-1-2@m uk-child-width-1-1@s\" uk-grid>\r\n      <div class=\" uk-flex uk-flex-center\">\r\n        <div>\r\n          <h3 class=\"white-text\">Menu</h3>\r\n          <ul class=\"uk-list\">\r\n            <li><a>Início</a></li>\r\n            <li><a>Atualidades</a>\r\n              <div uk-dropdown=\"pos: right-center\">\r\n                <ul class=\"uk-nav uk-dropdown-nav\">\r\n                  <li><a href=\"#\">Notícias</a></li>\r\n                  <li><a href=\"#\">Publicações</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li><a>Ferramentas</a>\r\n              <div uk-dropdown=\"pos: right-center\">\r\n                <ul class=\"uk-nav uk-dropdown-nav\">\r\n                  <li><a href=\"http://pmo.institutoapoema.org\">ProjeQtor</a></li>\r\n                  <li><a href=\"https://github.com/kyriosdata/sseqv\">GitHub</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li><a routerLink='/sobre'>Sobre</a></li>\r\n          </ul>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\" uk-flex uk-flex-center\">\r\n        <div>\r\n            \r\n          <h3 align=\"center\" class=\"white-text\">Contato</h3>\r\n          <ul align=\"center\" class=\"uk-list\">\r\n            <li>qualivida@sseqv.ufg.br</li>\r\n            <li>(62) 3521-1724</li>\r\n            <li>(62) 3521-1505</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-list a {\n  color: #666; }\n\n.apoema {\n  max-width: 18rem; }\n\n@media (max-width: 767px) {\n    .apoema {\n      max-width: 6rem; } }\n\n.ms, .fns {\n  max-width: 6em; }\n\n@media (max-width: 767px) {\n    .ms, .fns {\n      max-width: 3em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcaHlhZ29cXERlc2t0b3BcXFNpdGVzXFxzc2Vxdi9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxXQUFXLEVBQUE7O0FBSW5CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBQ2hCO0lBRko7TUFHUSxlQUFlLEVBQUEsRUFFdEI7O0FBRUQ7RUFDSSxjQUFjLEVBQUE7O0FBQ2Q7SUFGSjtNQUdRLGNBQWMsRUFBQSxFQUVyQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuLnVrLWxpc3Qge1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcG9lbWEge1xyXG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcclxuICAgIEBtZWRpYSAjeyRtb2JpbGV9IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDZyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tcywgLmZucyB7XHJcbiAgICBtYXgtd2lkdGg6IDZlbTtcclxuICAgIEBtZWRpYSAjeyRtb2JpbGV9IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDNlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin uk-position-relative uk-visible-toggle uk-light\" tabindex=\"-1\"\r\n  uk-slideshow=\"autoplay: true; animation: fade; max-height: 400; min-height: 400\">\r\n\r\n  <ul class=\"uk-slideshow-items uk-margin-top\">\r\n    <li>\r\n      <img src=\"https://getuikit.com/docs/images/light.jpg\" alt=\"\" uk-cover>\r\n      <div class=\"uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom\">\r\n        <h3 class=\"uk-margin-remove\">1</h3>\r\n        <p class=\"uk-margin-remove\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <img src=\"https://getuikit.com/docs/images/dark.jpg\" alt=\"\" uk-cover>\r\n      <div class=\"uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom\">\r\n        <h3 class=\"uk-margin-remove\">2</h3>\r\n        <p class=\"uk-margin-remove\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <img src=\"https://getuikit.com/docs/images/photo.jpg\" alt=\"\" uk-cover>\r\n      <div class=\"uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom\">\r\n        <h3 class=\"uk-margin-remove\">3</h3>\r\n        <p class=\"uk-margin-remove\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous\r\n    uk-slideshow-item=\"previous\"></a>\r\n  <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next\r\n    uk-slideshow-item=\"next\"></a>\r\n\r\n  <div class=\"uk-position-bottom-center uk-position-small\">\r\n    <ul class=\"uk-dotnav\">\r\n      <li uk-slideshow-item=\"0\"><a href=\"#\">Item 1</a></li>\r\n      <li uk-slideshow-item=\"1\"><a href=\"#\">Item 2</a></li>\r\n      <li uk-slideshow-item=\"2\"><a href=\"#\">Item 3</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div id=\"noticias\" class=\"uk-section\">\r\n  <div class=\"uk-container\">\r\n\r\n    <h2>Notícias</h2>\r\n    <hr>\r\n\r\n    <div uk-slider=\"autoplay: true; center: true; index: 1\">\r\n\r\n      <div class=\"uk-position-relative uk-visible-toggle\" tabindex=\"-1\">\r\n\r\n        <ul class=\"uk-slider-items uk-child-width-1-3@s uk-grid\">\r\n          <li>\r\n            <div class=\"uk-card uk-card-default\">\r\n              <div class=\"uk-card-media-top\">\r\n\r\n              </div>\r\n              <div class=\"uk-card-body\">\r\n                <h3 class=\"uk-card-title\">Health-Related Quality of Life and Well-Being</h3>\r\n                <p>Health-related quality of life (HRQoL) is a multi-dimensional concept that includes domains related\r\n                  to physical, mental, emotional, and social functioning. </p>\r\n                <a target=\"_blank\" class=\"uk-button uk-button-primary\"\r\n                  href=\"https://www.healthypeople.gov/2020/about/foundation-health-measures/Health-Related-Quality-of-Life-and-Well-Being\">Ler</a>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"uk-card uk-card-default\">\r\n              <div class=\"uk-card-media-top\">\r\n                <img src=\"https://getuikit.com/docs/images/photo2.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"uk-card-body\">\r\n                <h3 class=\"uk-card-title\">Headline</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"uk-card uk-card-default\">\r\n              <div class=\"uk-card-media-top\">\r\n                <img src=\"https://getuikit.com/docs/images/light.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"uk-card-body\">\r\n                <h3 class=\"uk-card-title\">Headline</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n\r\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous\r\n          uk-slider-item=\"previous\"></a>\r\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next\r\n          uk-slider-item=\"next\"></a>\r\n\r\n      </div>\r\n\r\n      <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"publicacoes\" class=\"uk-section\">\r\n  <div class=\"uk-container\">\r\n\r\n    <h2>Publicações</h2>\r\n    <hr>\r\n\r\n    <div uk-slider=\"autoplay: true; center: true; index: 1\">\r\n\r\n      <div class=\"uk-position-relative uk-visible-toggle\" tabindex=\"-1\">\r\n\r\n        <ul class=\"uk-slider-items uk-child-width-1-3@s uk-grid\">\r\n          <li>\r\n            <div class=\"uk-card uk-card-default\">\r\n              <div class=\"uk-card-media-top\">\r\n              </div>\r\n              <div class=\"uk-card-body\">\r\n                <h3 class=\"uk-card-title\">Documentação SSEQV</h3>\r\n                <p align=\"center\"><span class=\"uk-label uk-label-danger uk-margin-small-right\">PDF</span><a\r\n                    class=\"uk-button uk-button-text\" href=\"assets/anexos/Sinopse_ProjetoSSEQV.pdf\" download>\r\n                    Sinopse do Projeto SSEQV</a></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"uk-card uk-card-default\">\r\n              <div class=\"uk-card-media-top\">\r\n                <img src=\"https://getuikit.com/docs/images/photo2.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"uk-card-body\">\r\n                <h3 class=\"uk-card-title\">Headline</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"uk-card uk-card-default\">\r\n              <div class=\"uk-card-media-top\">\r\n                <img src=\"https://getuikit.com/docs/images/light.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"uk-card-body\">\r\n                <h3 class=\"uk-card-title\">Headline</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n\r\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous\r\n          uk-slider-item=\"previous\"></a>\r\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next\r\n          uk-slider-item=\"next\"></a>\r\n\r\n      </div>\r\n\r\n      <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\n  .margin {\n    margin-right: 0%;\n    margin-left: 0%; } }\n\n@media (min-width: 1024px) {\n  .margin {\n    margin-right: 15%;\n    margin-left: 15%; } }\n\n@media (min-width: 768px) and (max-width: 1023px) {\n  .margin {\n    margin-right: 0%;\n    margin-left: 0%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGh5YWdvXFxEZXNrdG9wXFxTaXRlc1xcc3NlcXYvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFGSjtJQUdRLGdCQUFnQjtJQUNoQixlQUFlLEVBQUEsRUFZdEI7O0FBVEc7RUFQSjtJQVFRLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQSxFQU92Qjs7QUFKRztFQVpKO0lBYVEsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQSxFQUV0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5tYXJnaW4ge1xyXG5cclxuICAgIEBtZWRpYSAjeyRtb2JpbGV9IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgI3skZGVza3RvcH0ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhICN7JHRhYmxldH0ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar uk-navbar-container uk-margin uk-hidden@m\" uk-sticky=\"bottom: #offset\">\r\n  <div class=\"uk-navbar-left\">\r\n    <a class=\"uk-navbar-toggle\" uk-navbar-toggle-icon href=\"\" uk-toggle=\"target: #offcanvas-nav\"></a>\r\n  </div>\r\n  <div class=\"uk-navbar-center\">\r\n    <a class=\"uk-navbar-item uk-logo\" href=\"#\">SSEQV</a>\r\n  </div>\r\n</nav>\r\n\r\n<nav class=\"uk-navbar-container uk-visible@m\" uk-navbar uk-sticky=\"bottom: #offset\">\r\n\r\n  <div class=\"uk-navbar-left\">\r\n\r\n    <div class=\"uk-margin-large-left\">\r\n      <a style=\"max-height: 50px;\" class=\"uk-navbar-item uk-logo\" href=\"#\">SSEQV</a>\r\n      <span class=\"uk-text-meta\">Sistema de Socialização em Qualidade de Vida do Ministério da Saúde</span>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"uk-navbar-center\">\r\n    <div>\r\n      <ul class=\"uk-navbar-nav\">\r\n        <li><a href=\"#\">Início</a></li>\r\n        <li>\r\n          <a href=\"#\">Atualidades</a>\r\n          <div class=\"uk-navbar-dropdown\">\r\n            <ul class=\"uk-nav uk-navbar-dropdown-nav\">\r\n              <li><a href=\"#noticias\" uk-scroll>Notícias</a></li>\r\n              <li><a href=\"#publicacoes\" uk-scroll>Publicações</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <li><a href=\"#\">Ferramentas</a>\r\n          <div class=\"uk-navbar-dropdown\">\r\n            <ul class=\"uk-nav uk-navbar-dropdown-nav\">\r\n              <li><a href=\"http://pmo.institutoapoema.org\">ProjeQtor</a></li>\r\n              <li><a href=\"https://github.com/kyriosdata/sseqv\">GitHub</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <li><a href=\"#\">Contato</a></li>\r\n        <li><a routerLink=\"/sobre\">Sobre</a></li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div id=\"offcanvas-nav\" uk-offcanvas=\"overlay: true\">\r\n  <div class=\"uk-offcanvas-bar\">\r\n\r\n    <ul class=\"uk-nav uk-nav-default\">\r\n      <li><a href=\"#\">Início</a></li>\r\n      <li class=\"uk-parent\">\r\n        <a href=\"#\">Atualidades</a>\r\n        <ul class=\"uk-nav-sub\">\r\n          <li><a href=\"#noticias\" uk-scroll>Notícias</a></li>\r\n          <li><a href=\"#publicacoes\" uk-scroll>Publicações</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"uk-parent\">\r\n        <a href=\"#\">Ferramentas</a>\r\n        <ul class=\"uk-nav-sub\">\r\n          <li><a target=\"_blank\" href=\"http://pmo.institutoapoema.org\">ProjeQtor</a></li>\r\n          <li><a target=\"_blank\" href=\"https://github.com/kyriosdata/sseqv\">GitHub</a></li>\r\n        </ul>\r\n      </li>\r\n      <li><a href=\"#\">Contato</a></li>\r\n      <li><a routerLink=\"/sobre\">Sobre</a></li>\r\n    </ul>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo {\n  max-width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcaHlhZ29cXERlc2t0b3BcXFNpdGVzXFxzc2Vxdi9zcmNcXGFwcFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2xvZ28ge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.component.html":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"description\" class=\"uk-section description\">\r\n    <div class=\"bg-financiadores uk-text-center uk-padding-small uk-margin-medium-bottom\">\r\n      <div class=\"financiado\"><h2>Projeto financiado e mantido pelo Ministério da Saúde/Fundo Nacional de Saúde</h2></div>\r\n    </div>\r\n  <div class=\"uk-container uk-flex uk-flex-center\">\r\n    <div>\r\n      <h1 align=\"center\" id=\"sobre\">\r\n        Sobre\r\n      </h1>\r\n      <p class=\"uk-dropcap\" style=\"text-align:justify\">\r\n        O presente projeto de pesquisa e desenvolvimento (P&D) tem por objetivo conceber um protótipo de um sistema para\r\n        captação, avaliação, armazenamento e disponibilização de estudos sobre qualidade de vida, devidamente indexados,\r\n        com o propósito de facilitar a localização dos mesmos pelas partes interessadas na incorporação de tecnologias\r\n        no âmbito do SUS.\r\n      </p>\r\n      <p>Para contemplar o objetivo retrocitado, uma série de esforços de pesquisa e desenvolvimento estão sendo\r\n        empreendidos no âmbito da\r\n        Universidade, de modo a guiar a implementação de ações e desenvolvimento de artefatos e entregáveis\r\n        intermediários e final, a partir dos seguintes objetivos:\r\n      </p>\r\n      <ul class=\"uk-list uk-list-bullet uk-margin-large-left\">\r\n        <li>Pesquisar, planejar e transferir a “prova de conceito” de um Sistema para Socialização do Conhecimento\r\n          sobre Qualidade de Vida (SSCQV).</li>\r\n        <li>\r\n          Pesquisar, planejar e transferir a documentação sobre o domínio do SSCQV (inclui as regras de negócio).\r\n        </li>\r\n        <li>\r\n          Pesquisar, planejar e transferir a documentação sobre os requisitos funcionais e de qualidade do SSCQV.\r\n        </li>\r\n        <li>\r\n          Pesquisar e modelar aplicação para auxiliar nesse domínio.\r\n        </li>\r\n        <li>\r\n          Pesquisar, planejar e transferir a documentação, contendo a validação da concepção do SSCQV.\r\n        </li>\r\n        <li>\r\n          Pesquisar, planejar e transferir a documentação, contendo a verificação da viabilidade do SSCQV.\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"uk-section duration\">\r\n  <div class=\"uk-container uk-text-center\">\r\n    <h2>Duração estimada: 16 meses</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"uk-section staff\">\r\n\r\n  <div class=\"uk-container\">\r\n    <h1 align=\"center\">Equipe</h1>\r\n    <hr class=\"uk-divider-icon\">\r\n\r\n    <div class=\"uk-margin\">\r\n      <div class=\"uk-flex uk-flex-center\">\r\n        <h2>Coordenação</h2>\r\n      </div>\r\n      <div class=\"uk-child-width-1-3@m uk-child-width-1-1@s uk-flex uk-flex-center\" uk-grid>\r\n        <div *ngFor=\"let coordenador of coordenadores\">\r\n          <div class=\"uk-card uk-card-default\">\r\n            <div class=\"uk-card-header\">\r\n              <img class=\"uk-align-center uk-border-circle\" width=\"65\" height=\"65\" src=\"{{coordenador.avatar}}\">\r\n\r\n              <div class=\"uk-width-expand\">\r\n                <h3 align=\"center\" class=\"uk-card-title uk-margin-remove-bottom uk-margin-top\">{{coordenador.nome}}\r\n                </h3>\r\n                <p align=\"center\" class=\"uk-text-meta uk-margin-remove-top\">{{coordenador.cargo}}</p>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"uk-card-footer \">\r\n              <a target=\"_blank\" href=\"{{coordenador.lattes}}\" class=\"uk-align-center uk-button uk-button-text\">Ver\r\n                mais</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"uk-margin\">\r\n      <div class=\"uk-flex uk-flex-center\">\r\n        <h2>Bolsistas</h2>\r\n      </div>\r\n\r\n      <div class=\"uk-child-width-1-3@m uk-child-width-1-1@s uk-flex uk-flex-center\" uk-grid>\r\n        <div *ngFor=\"let bolsista of bolsistas\">\r\n          <div class=\"uk-card uk-card-default\">\r\n            <div class=\"uk-card-header\">\r\n              <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\r\n                <div class=\"uk-width-auto\">\r\n                  <img class=\"uk-align-center uk-border-circle\" width=\"65\" height=\"65\" src=\"{{bolsista.avatar}}\">\r\n                  <div class=\"uk-width-expand\">\r\n                    <h3 align=\"center\" class=\"uk-card-title uk-margin-remove-bottom uk-margin-top\">{{bolsista.nome}}\r\n                    </h3>\r\n                    <p align=\"center\" class=\"uk-text-meta uk-margin-remove-top\">{{bolsista.cargo}}</p>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"uk-card-footer \">\r\n              <a target=\"_blank\" href=\"{{bolsista.lattes}}\" class=\"uk-align-center uk-button uk-button-text\">Ver\r\n                mais</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--\r\n#fca000\r\n#e3651c\r\n-->"

/***/ }),

/***/ "./src/app/sobre/sobre.component.scss":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staff {\n  background-color: #e3651c; }\n\n.description {\n  background-color: #ffffff; }\n\n.duration {\n  background-color: #fca000cb; }\n\nh1 {\n  color: white; }\n\nh2 {\n  color: white !important; }\n\n.financiado {\n  display: inline-block !important;\n  vertical-align: middle !important; }\n\nh3 {\n  font-size: 1em; }\n\n#sobre {\n  color: darkgray; }\n\n#description {\n  padding-top: 0; }\n\np {\n  margin-left: 5%;\n  margin-top: 5%;\n  align-self: center;\n  font-size: 1.1em; }\n\n.bg-financiadores {\n  background-color: #39f;\n  padding-top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29icmUvQzpcXFVzZXJzXFxoeWFnb1xcRGVza3RvcFxcU2l0ZXNcXHNzZXF2L3NyY1xcYXBwXFxzb2JyZVxcc29icmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxnQ0FBK0I7RUFDL0IsaUNBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc29icmUvc29icmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhZmYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMzY1MWM7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmR1cmF0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhMDAwY2I7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbmFuY2lhZG8ge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuI3NvYnJlIHtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuLmJnLWZpbmFuY2lhZG9yZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/*!******************************************!*\
  !*** ./src/app/sobre/sobre.component.ts ***!
  \******************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
        this.coordenadores = new Array();
        this.bolsistas = new Array();
        this.coordenadores.push({
            nome: "Prof. Dr. Eliomar Araújo de Lima",
            cargo: "Coordenador Técnico",
            lattes: "http://lattes.cnpq.br/1362170231777201",
            avatar: "assets/img/eliomar.png"
        }, {
            nome: "Prof. Dr. Fábio Nogueira de Lucena",
            cargo: "Subcoordenador Técnico",
            lattes: "http://lattes.cnpq.br/6428011745982173",
            avatar: "assets/img/fabio.png"
        });
        this.bolsistas.push({
            nome: "Carlos Hernane Oliveira",
            cargo: "Graduado em Sistemas de Informação",
            lattes: "http://lattes.cnpq.br/4808316415791351",
            avatar: "assets/img/hernane.png"
        }, {
            nome: "Douglas Tonetto Pfeifer",
            cargo: "Graduando em Ciência da Computação",
            lattes: "",
            avatar: "assets/img/douglas.jpeg"
        }, {
            nome: "Hyago Vieira de Souza",
            cargo: "Graduando em Engenharia de Software",
            lattes: "http://lattes.cnpq.br/1023258037593936",
            avatar: "assets/img/hyago.jpg"
        }, {
            nome: "Karine Pires de Araújo",
            cargo: "Graduanda em Ciência da Computação",
            lattes: "http://lattes.cnpq.br/8660012741877683",
            avatar: "assets/img/karine.jpeg"
        }, {
            nome: "Luísa Nunes C. de Oliveira",
            cargo: "Graduanda em Gestão da Informação",
            lattes: "",
            avatar: "assets/img/luisa.png"
        }, {
            nome: "Max Stival Rocha",
            cargo: "Graduando em Sistemas de Informação",
            lattes: "http://lattes.cnpq.br/9729379560275328",
            avatar: "assets/img/max.jpeg"
        }, {
            nome: "Nicolas de Sousa E. Da Cruz",
            cargo: "Graduando em Gestão da Informação",
            lattes: "http://lattes.cnpq.br/0781723700217537",
            avatar: "assets/img/nicolas.jpg"
        }, {
            nome: "Raquel de Andrade Corrêa",
            cargo: "Graduanda em Sistemas de Informação",
            lattes: "http://lattes.cnpq.br/4535240596782679",
            avatar: "assets/img/raquel.jpeg"
        }, {
            nome: "Thaynara Mabille Marques Ribeiro",
            cargo: "Graduanda em Ciência da Computação",
            lattes: "http://lattes.cnpq.br/4546159648766726",
            avatar: "assets/img/thaynara.jpeg"
        }, {
            nome: "Túlio Alcântara Magalhães",
            cargo: "Graduando em Ciência da Computação",
            lattes: "",
            avatar: "assets/img/tulio.png"
        }, {
            nome: "Vinícius Borges Alencar",
            cargo: "Graduando em Ciência da Computação",
            lattes: "http://lattes.cnpq.br/8713357903992486",
            avatar: "assets/img/vinicius.jpg"
        }, {
            nome: "Ygor Galvão Lourenço",
            cargo: "Graduado em Gestão da Informação",
            lattes: "http://lattes.cnpq.br/4675488468292421",
            avatar: "assets/img/ygor.png"
        });
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sobre',
            template: __webpack_require__(/*! ./sobre.component.html */ "./src/app/sobre/sobre.component.html"),
            styles: [__webpack_require__(/*! ./sobre.component.scss */ "./src/app/sobre/sobre.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hyago\Desktop\Sites\sseqv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map