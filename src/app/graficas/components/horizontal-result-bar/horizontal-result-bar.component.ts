import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-horizontal-result-bar',
  templateUrl: './horizontal-result-bar.component.html',
  styleUrls: ['./horizontal-result-bar.component.css']
})
export class HorizontalResultBarComponent {
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
    labels: [ 'A', 'B', 'C' ],
    datasets: [
      { data: [ 54, 55, 88 ], label: 'Results1', backgroundColor: ['#76D7C4', '#1ABC9C', '#148F77', '#0E6251' ], hoverBackgroundColor: 'red'},
    ]
  };
  

}
