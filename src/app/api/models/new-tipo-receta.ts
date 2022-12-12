/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<TipoReceta, 'idReceta'>, schemaOptions: { title: 'NewTipoReceta', exclude: [ 'idReceta' ] })
 */
export interface NewTipoReceta {
  esDiabetica: boolean;
  esFitness: boolean;
  esRapida: boolean;
  esVegana: boolean;
  esVegetariana: boolean;
  sinGluten: boolean;
  sinLactosa: boolean;
  sinSodio: boolean;
}
