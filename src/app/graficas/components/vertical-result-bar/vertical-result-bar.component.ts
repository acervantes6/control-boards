import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-vertical-result-bar',
  templateUrl: './vertical-result-bar.component.html',
  styleUrls: ['./vertical-result-bar.component.css']
})
export class VerticalResultBarComponent {
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
    labels: [ 'A', 'B', 'C' ],
    datasets: [
      { data: [ 46230, 11578, 14836, ], label: 'Stock', backgroundColor:  ['#070879','#2750D6', '#251FED', '#1F85ED'], hoverBackgroundColor: 'red'  },
    ]
  };

}
