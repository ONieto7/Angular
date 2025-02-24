import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(evento: Event) {
    evento.preventDefault();
    
    //Validar que sean valores correcto
    if(this.descripcionInput.nativeElement.value.trim() === '' 
        || this.precioInput === null 
        || this.precioInput.nativeElement.value <= 0){
      console.log('Datos incorrectos');
      return;
    }

    const producto = new Producto(this.descripcionInput.nativeElement.value, 
      this.precioInput.nativeElement.value);

    //Emitimos el evento del nuevo producto
    this.nuevoProducto.emit(producto);

    // Limpiamos los campos del formulario
    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
  }
}
