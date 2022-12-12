import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {
  id?: string;
  nombre?: string;
  calorias?: number;
  colesterol?: number;
  sodio?: number;
  fibra?: number;
  azucares?: number;
  proteinas?: number;
  grasasSaturadas?: number;
  grasasTrans?: number;
}
