/* tslint:disable */
/* eslint-disable */
import { RecetasXIngredientesWithRelations } from './recetas-x-ingredientes-with-relations';
import { TipoRecetaWithRelations } from './tipo-receta-with-relations';

/**
 * (tsType: RecetasWithRelations, schemaOptions: { includeRelations: true })
 */
export interface RecetasWithRelations {
  id?: string;
  nombre: string;
  porciones: number;
  preparacion: string;
  recetasXIngredientes?: Array<RecetasXIngredientesWithRelations>;
  tiempo: number;
  tipoRecetas?: Array<TipoRecetaWithRelations>;
}
