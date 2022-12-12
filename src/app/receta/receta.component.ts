import { Component } from '@angular/core';
import { Recetas } from '../api/models';
import { RecetasControllerService } from '../api/services';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent {

  receta: Recetas [] = [];
  constructor(
    private recetaService: RecetasControllerService
  ) { }
  ngOnInit(): void {
    this.recetaService.find().subscribe(
      data => this.receta = data
    )
  }
}
