import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { TipoRecetasComponent } from './tipo-recetas/tipo-recetas.component';
import { RecetasXIngredientesComponent } from './recetas-xingredientes/recetas-xingredientes.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RecetaComponent } from './receta/receta.component';
import { SubirRecetaComponent } from './subir-receta/subir-receta.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'recetas', component: RecetasComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'tipo-recetas', component: TipoRecetasComponent },
  { path: 'recetas-xingredientes', component: RecetasXIngredientesComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'receta', component: RecetaComponent },
  { path: 'subir-receta', component: SubirRecetaComponent },
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
