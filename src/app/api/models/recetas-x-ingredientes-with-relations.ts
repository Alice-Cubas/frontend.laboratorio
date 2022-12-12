/* tslint:disable */
/* eslint-disable */
import { IngredientesWithRelations } from './ingredientes-with-relations';
import { RecetasWithRelations } from './recetas-with-relations';

/**
 * (tsType: RecetasXIngredientesWithRelations, schemaOptions: { includeRelations: true })
 */
export interface RecetasXIngredientesWithRelations {
  Ingrediente?: IngredientesWithRelations;
  Recetas?: RecetasWithRelations;
  cantidad: number;
  idIngrediente: string;
  idIngredientes?: string;
  idReceta?: string;
}
