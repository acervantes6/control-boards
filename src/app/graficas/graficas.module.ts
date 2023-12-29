import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { GraficasRoutingModule } from './graficas-routing.module';

import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { PieChartAdvanceComponent } from './pages/pie-chart-advance/pie-chart-advance.component';
import { DonutApexComponent } from './pages/donut-apex/donut-apex.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StockPerWarehouseComponent } from './components/stock-per-warehouse/stock-per-warehouse.component';
import { StockPerClientComponent } from './components/stock-per-client/stock-per-client.component';
import { StockPerWarehouseKgComponent } from './components/stock-per-warehouse-kg/stock-per-warehouse-kg.component';
import { StockPerClientKgComponent } from './components/stock-per-client-kg/stock-per-client-kg.component';
import { VerticalStockBarComponent } from './components/vertical-stock-bar/vertical-stock-bar.component';
import { HorizontalStockBarComponent } from './components/horizontal-stock-bar/horizontal-stock-bar.component';
import { VerticalResultBarComponent } from './components/vertical-result-bar/vertical-result-bar.component';
import { HorizontalResultBarComponent } from './components/horizontal-result-bar/horizontal-result-bar.component';
import { TotalResultsLineComponent } from './components/total-results-line/total-results-line.component';
import { WeekCardComponent } from './components/week-card/week-card.component';



@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    GraficaBarraComponent,
    PieChartAdvanceComponent,
    DonutApexComponent,
    DashboardComponent,
    StockPerWarehouseComponent,
    StockPerClientComponent,
    StockPerWarehouseKgComponent,
    StockPerClientKgComponent,
    VerticalStockBarComponent,
    HorizontalStockBarComponent,
    VerticalResultBarComponent,
    HorizontalResultBarComponent,
    TotalResultsLineComponent,
    WeekCardComponent,
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule,
    NgApexchartsModule,
  ],
  exports: [
    WeekCardComponent
  ]
})
export class GraficasModule { }
