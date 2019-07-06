(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!***************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/app.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n        Flowlity\r\n    </h1>\r\n</div>\r\n\r\n<app-product-selector></app-product-selector>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/components/availability-chart/availability-chart.component.html":
/*!************************************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/components/availability-chart/availability-chart.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>availability-chart works!</p>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/components/availability-table/availability-table.component.html":
/*!************************************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/components/availability-table/availability-table.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>availability-table works!</p>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/components/product-selector/product-selector.component.html":
/*!********************************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/components/product-selector/product-selector.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>product-selector ks!</p>\r\n<mat-form-field>\r\n    <mat-label>Select a product</mat-label>\r\n    <mat-select>\r\n        <mat-option *ngFor=\"let product of products\" [value]=\"product.id\">\r\n            {{product.name}}\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var product_selector_component_1 = __webpack_require__(/*! ./components/product-selector/product-selector.component */ "./src/app/components/product-selector/product-selector.component.ts");
var availability_table_component_1 = __webpack_require__(/*! ./components/availability-table/availability-table.component */ "./src/app/components/availability-table/availability-table.component.ts");
var availability_chart_component_1 = __webpack_require__(/*! ./components/availability-chart/availability-chart.component */ "./src/app/components/availability-chart/availability-chart.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_selector_component_1.ProductSelectorComponent,
                availability_table_component_1.AvailabilityTableComponent,
                availability_chart_component_1.AvailabilityChartComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                material_1.MatSelectModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/availability-chart/availability-chart.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/availability-chart/availability-chart.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhaWxhYmlsaXR5LWNoYXJ0L2F2YWlsYWJpbGl0eS1jaGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/availability-chart/availability-chart.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/availability-chart/availability-chart.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var AvailabilityChartComponent = /** @class */ (function () {
    function AvailabilityChartComponent() {
    }
    AvailabilityChartComponent.prototype.ngOnInit = function () {
    };
    AvailabilityChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-availability-chart',
            template: __webpack_require__(/*! raw-loader!./availability-chart.component.html */ "../node_modules/raw-loader/index.js!./src/app/components/availability-chart/availability-chart.component.html"),
            styles: [__webpack_require__(/*! ./availability-chart.component.css */ "./src/app/components/availability-chart/availability-chart.component.css")]
        })
    ], AvailabilityChartComponent);
    return AvailabilityChartComponent;
}());
exports.AvailabilityChartComponent = AvailabilityChartComponent;


/***/ }),

/***/ "./src/app/components/availability-table/availability-table.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/availability-table/availability-table.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhaWxhYmlsaXR5LXRhYmxlL2F2YWlsYWJpbGl0eS10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/availability-table/availability-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/availability-table/availability-table.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var AvailabilityTableComponent = /** @class */ (function () {
    function AvailabilityTableComponent() {
    }
    AvailabilityTableComponent.prototype.ngOnInit = function () {
    };
    AvailabilityTableComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-availability-table',
            template: __webpack_require__(/*! raw-loader!./availability-table.component.html */ "../node_modules/raw-loader/index.js!./src/app/components/availability-table/availability-table.component.html"),
            styles: [__webpack_require__(/*! ./availability-table.component.css */ "./src/app/components/availability-table/availability-table.component.css")]
        })
    ], AvailabilityTableComponent);
    return AvailabilityTableComponent;
}());
exports.AvailabilityTableComponent = AvailabilityTableComponent;


/***/ }),

/***/ "./src/app/components/product-selector/product-selector.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/product-selector/product-selector.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1zZWxlY3Rvci9wcm9kdWN0LXNlbGVjdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/product-selector/product-selector.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-selector/product-selector.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var product_service_1 = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
var ProductSelectorComponent = /** @class */ (function () {
    function ProductSelectorComponent(_productService) {
        this._productService = _productService;
    }
    ProductSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("hello itsme");
        this._productService.findAll().subscribe(function (products) { _this.products = products; });
    };
    ProductSelectorComponent.ctorParameters = function () { return [
        { type: product_service_1.ProductService }
    ]; };
    ProductSelectorComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-product-selector',
            template: __webpack_require__(/*! raw-loader!./product-selector.component.html */ "../node_modules/raw-loader/index.js!./src/app/components/product-selector/product-selector.component.html"),
            styles: [__webpack_require__(/*! ./product-selector.component.css */ "./src/app/components/product-selector/product-selector.component.css")]
        })
    ], ProductSelectorComponent);
    return ProductSelectorComponent;
}());
exports.ProductSelectorComponent = ProductSelectorComponent;


/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.findAll = function () {
        return this._http.get('/products');
    };
    ProductService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    ProductService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Elias\source\repos\ExpressApp1\Flowlity.Core\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map