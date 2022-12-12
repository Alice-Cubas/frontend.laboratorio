/* tslint:disable */
/* eslint-disable */
import { RecetasXIngredientesWithRelations } from './recetas-x-ingredientes-with-relations';

/**
 * (tsType: IngredientesWithRelations, schemaOptions: { includeRelations: true })
 */
export interface IngredientesWithRelations {
  azucares: number;
  calorias: number;
  colesterol: number;
  fibra: number;
  grasasSaturadas: number;
  grasasTrans: number;
  id?: string;
  nombre: string;
  proteinas: number;
  recetasXIngredientes?: Array<RecetasXIngredientesWithRelations>;
  sodio: number;
}
