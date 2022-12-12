/* tslint:disable */
/* eslint-disable */
import { RecetasWithRelations } from './recetas-with-relations';

/**
 * (tsType: TipoRecetaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TipoRecetaWithRelations {
  Receta?: RecetasWithRelations;
  esDiabetica: boolean;
  esFitness: boolean;
  esRapida: boolean;
  esVegana: boolean;
  esVegetariana: boolean;
  idReceta?: string;
  sinGluten: boolean;
  sinLactosa: boolean;
  sinSodio: boolean;
}
