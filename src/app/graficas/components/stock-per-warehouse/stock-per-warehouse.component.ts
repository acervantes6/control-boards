import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-stock-per-warehouse',
  templateUrl: './stock-per-warehouse.component.html',
  styleUrls: ['./stock-per-warehouse.component.css']
})
export class StockPerWarehouseComponent {

  public doughnutChartLabels: string[] = [ 'SPO', 'TLEM', 'SPMEX' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 85, 9, 7  ],
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
