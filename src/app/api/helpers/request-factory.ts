import { HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { RequestWrapper } from '@api/helpers';

export class RequestFactory {

  private _wrappers = new Map<string, RequestWrapper>();

  createRequest<T = any>(
    method: RequestType,
    url: string,
    params?: { [key: string]: string },
    body?: T): Observable<HttpRequest<T>> {

    const init = {
      headers: new HttpHeaders({}),
      params: new HttpParams({ fromObject: params })
    };
    const request = new HttpRequest<T>(method, url, body, init);

    let result$ = of(request);
    Array.from(this._wrappers.values()).map(wrapper => {
      result$ = result$.pipe(mergeMap(r => wrapper.wrapRequest(r)), take(1));
    });
    return result$;
  }

  addWrapper(wrapper: RequestWrapper): this {
    if (this._wrappers.has(wrapper.getKey())) {
      throw new Error(`Wrapper ${wrapper.getKey()} already exists in the factory`);
    }
    this._wrappers.set(wrapper.getKey(), wrapper);
    return this;
  }

  removeWrapper(key: string): boolean {
    if (!this._wrappers.has(key)) {
      return false;
    }
    this._wrappers.delete(key);
    return true;
  }

  clone(): RequestFactory {
    const clone = new RequestFactory();
    this._wrappers.forEach(w => clone.addWrapper(w));
    return clone;
  }
}

export type RequestType = 'GET' | 'POST' | 'PUT' | 'DELETE';
