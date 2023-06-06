import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from "ng2-charts";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { TableGraphComponent } from './components/table-graph/table-graph.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerPipePipe } from './timer-pipe.pipe';

@NgModule({
    declarations: [
        AppComponent,
        LineChartComponent,
        PieChartComponent,
        TableGraphComponent,
        TimerComponent,
        TimerPipePipe,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        NgChartsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
