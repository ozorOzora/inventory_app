import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material';


import { AppComponent } from './app.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { AvailabilityTableComponent } from './components/availability-table/availability-table.component';
import { AvailabilityChartComponent } from './components/availability-chart/availability-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSelectorComponent,
    AvailabilityTableComponent,
    AvailabilityChartComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
