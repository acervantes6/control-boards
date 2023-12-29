import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-sidebar-init',
  templateUrl: './sidebar-init.component.html',
  styleUrls: ['./sidebar-init.component.css']
})
export class SidebarInitComponent {

  menu: MenuItem[] = [
    { ruta: '/graficas/dashboard', texto: 'Dashboard' },
    { ruta: '/graficas/barra', texto: 'Ejemplo Barras' },
    { ruta: '/graficas/barra-doble', texto: 'Ejemplo Barras Dobles' },
    { ruta: '/graficas/dona', texto: 'Ejemplo Dona' },
    // { ruta: '/graficas/pie', texto: 'Pie Chart' }
    // { ruta: '/graficas/dona-apex', texto: 'Ejemplo Barras Apex' },
  ];

}
