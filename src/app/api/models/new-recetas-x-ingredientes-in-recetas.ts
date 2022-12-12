/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<RecetasXIngredientes, 'idReceta'>, 'idReceta'>, schemaOptions: { title: 'NewRecetasXIngredientesInRecetas', exclude: [ 'idReceta' ], optional: [ 'idReceta' ] })
 */
export interface NewRecetasXIngredientesInRecetas {
  cantidad: number;
  idIngrediente: string;
  idIngredientes?: string;
}
