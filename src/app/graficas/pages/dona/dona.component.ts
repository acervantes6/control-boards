import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'SPO', 'TLEM', 'SPMEX', 'Otros' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 85, 9, 7, 2  ],
        hoverOffset: 5,
      },
    ], 
  };

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: { display: true },
      subtitle: { display: true },
    },
  };
  

}
