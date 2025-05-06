import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  empleados = [
    { nombre: 'Oscar', sueldo: 1000, fechaNacimiento: new Date(1996, 1, 1) },
    { nombre: 'Sofia', sueldo: 2000, fechaNacimiento: new Date(2000, 2, 1) },
    { nombre: 'Pedro', sueldo: 3000, fechaNacimiento: new Date(2025, 3, 1) }
  ];  
}
