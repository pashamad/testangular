import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RequestWrapper {
  getKey(): string;
  wrapRequest<T = any>(request: HttpRequest<T>): Observable<HttpRequest<T>>;
}
