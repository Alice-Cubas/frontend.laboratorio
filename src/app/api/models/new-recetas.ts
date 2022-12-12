/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Recetas, 'id'>, schemaOptions: { title: 'NewRecetas', exclude: [ 'id' ] })
 */
export interface NewRecetas {
  nombre: string;
  porciones: number;
  preparacion: string;
  tiempo: number;
}
