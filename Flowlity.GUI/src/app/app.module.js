"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var product_selector_component_1 = require("./components/product-selector/product-selector.component");
var availability_table_component_1 = require("./components/availability-table/availability-table.component");
var availability_chart_component_1 = require("./components/availability-chart/availability-chart.component");
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
                material_1.MatTableModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map