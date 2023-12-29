import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-horizontal-stock-bar',
  templateUrl: './horizontal-stock-bar.component.html',
  styleUrls: ['./horizontal-stock-bar.component.css']
})
export class HorizontalStockBarComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    }
  };
  public barChartType: ChartType = 'bar';
  

  public barChartData: ChartData<'bar'> = {
    labels: [ 'SPO', 'TLEM', 'SPMX' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: '2023', backgroundColor:  ['#0E6251','#148F77', '#1ABC9C', '#76D7C4'], hoverBackgroundColor: 'red'  },
    ]
  };

}
