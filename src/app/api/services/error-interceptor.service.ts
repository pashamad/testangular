import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ErrorResponse } from '@api/models';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<ErrorResponse>> {
    return next.handle(request).pipe(
      tap(() => { }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {

            // TODO: move to auth module

          } else if (err.status === 404) {
            Object.assign(err, { error: { errorUserMessage: 'Not found' } });
          }
        }
      }),
      tap(() => { }, (err: HttpErrorResponse) => {
        console.log(err);
      })
    );
  }
}
