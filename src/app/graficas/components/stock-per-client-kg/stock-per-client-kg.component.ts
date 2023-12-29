import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-stock-per-client-kg',
  templateUrl: './stock-per-client-kg.component.html',
  styleUrls: ['./stock-per-client-kg.component.css']
})
export class StockPerClientKgComponent {

   // Pie
   public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      // Nombres
      // datalabels: {
      //   formatter: (value: any, ctx: any) => {
      //     if (ctx.chart.data.labels) {
      //       return ctx.chart.data.labels[ctx.dataIndex];
      //     }
      //   },
      //   color: '#fff',
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
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        data: [64, 16, 20, 0],
        backgroundColor: ['#0E6251','#148F77', '#1ABC9C', '#76D7C4'],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

}
