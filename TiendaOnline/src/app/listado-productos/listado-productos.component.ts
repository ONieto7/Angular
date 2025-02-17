import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Zapatilla', 50.0), 
  ];
  
}
