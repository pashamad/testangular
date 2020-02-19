import { HttpClient, HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';

import { ErrorResponse } from '@api/models';
import { RequestWrapper } from './request-wrapper.interface';
import { RequestFactory, RequestType } from './request-factory';
import { ApiClientConfig, ApiClientInterface } from './api-client.interface';

export class ApiClient implements ApiClientInterface {

  // tslint:disable-next-line:variable-name
  private _config: ApiClientConfig = {};

  constructor(private http: HttpClient, private reqFactory: RequestFactory) { }

  configure(config: ApiClientConfig): void {
    this._config = { ...this._config, ...config };
    if (!config.API_URL) {
      const scheme = this._config.USE_HTTPS ? 'https' : 'http';
      this._config.API_URL = `${scheme}://${this._config.API_HOST}${this._config.API_PATH}`;
    }
  }

  clone(wrappers: RequestWrapper[] = []): ApiClient {
    const factory = this.reqFactory.clone();
    const clone = new ApiClient(this.http, factory);
    clone.configure(this._config);
    wrappers.forEach(w => factory.addWrapper(w));
    return clone;
  }

  request<R = any, T = any>(
    method: RequestType,
    path: string,
    params?: { [key: string]: string },
    body?: T): Observable<HttpResponse<R>> {

    const url = `${this._config.API_URL}${path}`;

    return this.reqFactory.createRequest(method, url, params, body).pipe(
      mergeMap(request => this.http.request<R>(request).pipe(
        filter(event => event.type === HttpEventType.Response),
        map(event => event as HttpResponse<R>),
        catchError((err: HttpErrorResponse) => {
          return throwError({ ...err.error, httpStatusCode: err.status } as ErrorResponse);
        })))
    );
  }

  get<R = any>(path: string, params?: { [key: string]: string }): Observable<HttpResponse<R>> {
    return this.request<R, never>('GET', path, params);
  }

  post<R = any, T = any>(path: string, params?: { [key: string]: string }, body?: T): Observable<HttpResponse<R>> {
    return this.request<R, T>('POST', path, params, body || {} as T);
  }

  put<R = any, T = any>(path: string, params?: { [key: string]: string }, body?: T): Observable<HttpResponse<R>> {
    return this.request<R, T>('PUT', path, params, body || {} as T);
  }

  delete<R = never, T = never>(path: string, params?: { [key: string]: string }): Observable<HttpResponse<void>> {
    return this.request<void, never>('DELETE', path, params);
  }
}
