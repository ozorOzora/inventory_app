import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSelectModule, MatTableModule, MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { AvailabilityTableComponent } from './components/availability-table/availability-table.component';
import { AvailabilityChartComponent } from './components/availability-chart/availability-chart.component';
import { AvailabilityDialogComponent } from './components/availability-dialog/availability-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ProductSelectorComponent,
        AvailabilityTableComponent,
        AvailabilityChartComponent,
        AvailabilityDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatTableModule,
        MatInputModule,
        NgApexchartsModule
    ],
    entryComponents: [
        AvailabilityDialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
