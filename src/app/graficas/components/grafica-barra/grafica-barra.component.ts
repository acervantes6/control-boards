import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent {

  @Input() pie: boolean = false;


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true

  };
  public barChartType: ChartType = 'bar';
  

  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
    // labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    // datasets: [
    //   { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#2AAFF5', hoverBackgroundColor: 'red'  },
    //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#274FD6', hoverBackgroundColor: 'red'  },
    //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series C', backgroundColor: '#2F00EB', hoverBackgroundColor: 'red'  }
    // ]
  };
  
  constructor() {}

  ngOnInit(): void {
    if ( this.pie ) {
      this.barChartType = 'pie';
    }
  }
}
