/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { IngredientesControllerService } from './services/ingredientes-controller.service';
import { IngredientesRecetasXIngredientesControllerService } from './services/ingredientes-recetas-x-ingredientes-controller.service';
import { RecetasControllerService } from './services/recetas-controller.service';
import { RecetasRecetasXIngredientesControllerService } from './services/recetas-recetas-x-ingredientes-controller.service';
import { RecetasTipoRecetaControllerService } from './services/recetas-tipo-receta-controller.service';
import { RecetasXIngredientesControllerService } from './services/recetas-x-ingredientes-controller.service';
import { RecetasXIngredientesIngredientesControllerService } from './services/recetas-x-ingredientes-ingredientes-controller.service';
import { RecetasXIngredientesRecetasControllerService } from './services/recetas-x-ingredientes-recetas-controller.service';
import { TipoRecetaControllerService } from './services/tipo-receta-controller.service';
import { TipoRecetaRecetasControllerService } from './services/tipo-receta-recetas-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    IngredientesControllerService,
    IngredientesRecetasXIngredientesControllerService,
    RecetasControllerService,
    RecetasRecetasXIngredientesControllerService,
    RecetasTipoRecetaControllerService,
    RecetasXIngredientesControllerService,
    RecetasXIngredientesIngredientesControllerService,
    RecetasXIngredientesRecetasControllerService,
    TipoRecetaControllerService,
    TipoRecetaRecetasControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
