/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Recetas } from '../models/recetas';

@Injectable({
  providedIn: 'root',
})
export class TipoRecetaRecetasControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tipoRecetaRecetasControllerGetRecetas
   */
  static readonly TipoRecetaRecetasControllerGetRecetasPath = '/tipo-recetas/{id}/recetas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecetas()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecetas$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Recetas>>> {

    const rb = new RequestBuilder(this.rootUrl, TipoRecetaRecetasControllerService.TipoRecetaRecetasControllerGetRecetasPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Recetas>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRecetas$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecetas(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Recetas>> {

    return this.getRecetas$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Recetas>>) => r.body as Array<Recetas>)
    );
  }

}
