import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-vertical-stock-bar',
  templateUrl: './vertical-stock-bar.component.html',
  styleUrls: ['./vertical-stock-bar.component.css']
})
export class VerticalStockBarComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
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
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: '2023', backgroundColor: ['#070879','#2750D6', '#251FED', '#1F85ED'], hoverBackgroundColor: 'red'  },
    ]
  };

}
