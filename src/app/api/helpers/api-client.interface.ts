import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequestType } from './request-factory';

export interface ApiClientConfig {
  API_URL?: string;
  API_HOST?: string;
  API_PATH?: string;
  USE_HTTPS?: boolean;
}

export interface ApiClientInterface {

  configure(config: ApiClientConfig): void;

  request<R = any, T = any>(
    method: RequestType,
    path: string,
    params?: { [key: string]: string },
    body?: T): Observable<HttpResponse<R>>;

  get<R = any>(path: string, params?: { [key: string]: string }): Observable<HttpResponse<R>>;

  post<R = any, T = any>(path: string, params?: { [key: string]: string }, body?: T): Observable<HttpResponse<R>>;

  put<R = any, T = any>(path: string, params?: { [key: string]: string }, body?: T): Observable<HttpResponse<R>>;

  delete<R = never, T = never>(path: string, params?: { [key: string]: string }): Observable<HttpResponse<void>>;
}
