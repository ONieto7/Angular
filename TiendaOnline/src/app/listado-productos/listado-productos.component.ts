import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Zapatilla', 50.0), 
  ];
  
  descripcionInput: string = '';
  precionInput: number | null = null;

  agregarProducto() {
    //Validar que sean valores correcto
    if(this.descripcionInput === '' || this.precionInput === null || this.precionInput <= 0){
      console.log('Datos incorrectos');
    }

    const producto = new Producto(this.descripcionInput, this.precionInput!);
    this.productos.push(producto);

    // Limpiamos los campos del formulario
    this.descripcionInput = '';
    this.precionInput = null;
  }
}
