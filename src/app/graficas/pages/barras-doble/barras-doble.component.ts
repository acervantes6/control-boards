import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent {

  proveedoresData: ChartData<'bar'> = {
    datasets: [
      { data: [ 150,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' }
    ],
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025' ],
  };

  productoData: ChartData<'bar'> = {
    datasets: [
      { data: [ 200, 300,400,300, 150 ], label: 'Carros', backgroundColor: '#2AAFF5' }
    ],
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025' ]
  };

}
