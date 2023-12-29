import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './pages/barras/barras.component';

import { DonaComponent } from './pages/dona/dona.component';
import { PieChartAdvanceComponent } from './pages/pie-chart-advance/pie-chart-advance.component';
import { DonutApexComponent } from './pages/donut-apex/donut-apex.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'barra', component: BarrasComponent },
    { path: 'barra-doble', component: BarrasDobleComponent },
    { path: 'dona', component: DonaComponent },
    // { path: 'pie', component: PieChartAdvanceComponent },
    { path: 'dona-apex', component: DonutApexComponent },
    { path: '**', redirectTo: 'dashboard' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
