import { Component } from '@angular/core';

@Component({
  selector: 'app-tipo-recetas',
  templateUrl: './tipo-recetas.component.html',
  styleUrls: ['./tipo-recetas.component.css']
})
export class TipoRecetasComponent {
  idReceta?: String;
  esVegana?: Boolean;
  esVegetariana?: Boolean;
  esDiabetica?: Boolean;
  esRapida?: Boolean;
  esFitness?: Boolean;
  sinLactosa?: Boolean;
  sinGluten?: Boolean;
  sinSodio?: Boolean;
}
