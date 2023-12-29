import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-stock-per-warehouse-kg',
  templateUrl: './stock-per-warehouse-kg.component.html',
  styleUrls: ['./stock-per-warehouse-kg.component.css']
})
export class StockPerWarehouseKgComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

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
    labels: [['SPO', ''], ['TLEM', '', ''], 'SPMX'],
    datasets: [
      {
        data: [83, 10, 7],
        backgroundColor: ['#0E6251','#148F77', '#1ABC9C', '#76D7C4'],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];
}
