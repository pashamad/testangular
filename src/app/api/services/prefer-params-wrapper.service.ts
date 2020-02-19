import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { RequestWrapper } from '@api/helpers';

@Injectable()
export class PreferParamsWrapperService implements RequestWrapper {

  getKey(): string {
    return 'preferParamsHeader';
  }

  wrapRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    const update = request.headers.append('Prefer', 'params=single-object');
    return of(request.clone({ headers: update }));
  }
}
