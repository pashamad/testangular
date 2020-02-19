import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { RequestWrapper } from '@api/helpers';

@Injectable()
export class ContentTypeWrapperService implements RequestWrapper {

  getKey(): string {
    return 'contentTypeHeader';
  }

  wrapRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    const update = request.headers.append('Content-Type', 'application/json');
    return of(request.clone({ headers: update }));
  }
}
