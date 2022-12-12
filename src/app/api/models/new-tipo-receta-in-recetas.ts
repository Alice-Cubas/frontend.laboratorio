/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<TipoReceta, 'idReceta'>, 'idReceta'>, schemaOptions: { title: 'NewTipoRecetaInRecetas', exclude: [ 'idReceta' ], optional: [ 'idReceta' ] })
 */
export interface NewTipoRecetaInRecetas {
  esDiabetica: boolean;
  esFitness: boolean;
  esRapida: boolean;
  esVegana: boolean;
  esVegetariana: boolean;
  sinGluten: boolean;
  sinLactosa: boolean;
  sinSodio: boolean;
}
