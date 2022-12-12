/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<RecetasXIngredientes, 'idIngrediente'>, 'idIngrediente'>, schemaOptions: { title: 'NewRecetasXIngredientesInIngredientes', exclude: [ 'idIngrediente' ], optional: [ 'idIngrediente' ] })
 */
export interface NewRecetasXIngredientesInIngredientes {
  cantidad: number;
  idIngredientes?: string;
  idReceta?: string;
}
