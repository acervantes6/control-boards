import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true

  };
  public barChartType: ChartType = 'bar';
  

  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#2AAFF5', hoverBackgroundColor: 'red'  },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#274FD6', hoverBackgroundColor: 'red'  },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series C', backgroundColor: '#2F00EB', hoverBackgroundColor: 'red'  }
    ]
  };
  

}
