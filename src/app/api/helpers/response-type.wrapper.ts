import { HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { RequestWrapper } from './request-wrapper.interface';

export class ResponseTypeWrapper implements RequestWrapper {

  constructor(private responseType: 'arraybuffer' | 'blob' | 'json' | 'text' = 'json') { }

  getKey(): string {
    return 'responseType';
  }

  setResponseType(responseType: 'arraybuffer' | 'blob' | 'json' | 'text'): void {
    this.responseType = responseType;
  }

  wrapRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    request.headers.append('responseType', this.responseType);
    return of(request);
  }
}
