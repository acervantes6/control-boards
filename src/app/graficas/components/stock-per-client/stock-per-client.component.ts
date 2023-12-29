import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-stock-per-client',
  templateUrl: './stock-per-client.component.html',
  styleUrls: ['./stock-per-client.component.css']
})
export class StockPerClientComponent {

  
  public doughnutChartLabels: string[] = [ 'A', 'B', 'C', 'D' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 64, 16, 20, 0  ],
        backgroundColor: ['#070879','#2750D6', '#251FED', '#1F85ED'],
        hoverOffset: 5,
      },
    ], 
  };

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartConfiguration['options'] = {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr: any[] = ctx.chart.data.datasets[0].data;
          dataArr.map((data: number) => {
            sum += data;
          });
          let percentage = (value * 100 / sum).toFixed(2) + "%";
          return percentage;
        },
        color: '#fff',
      }
    },
  };
  public doughnutChartPlugins = [DatalabelsPlugin];

}
