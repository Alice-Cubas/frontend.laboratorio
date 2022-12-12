import { Component } from '@angular/core';

@Component({
  selector: 'app-recetas-xingredientes',
  templateUrl: './recetas-xingredientes.component.html',
  styleUrls: ['./recetas-xingredientes.component.css']
})
export class RecetasXIngredientesComponent {
  idReceta?: string;
  idIngrediente?: string;
  cantidad?: number;
}
