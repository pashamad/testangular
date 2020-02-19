import { Injectable } from '@angular/core';
import { RegisterBusinessData } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RpcApiService, DataApiService } from '@feature/shared/services';
import { UserBusiness } from '@feature/shared/models';

@Injectable()
export class BusinessService {

  constructor(private api: DataApiService, private rpc: RpcApiService) { }

  registerBusiness(data: RegisterBusinessData): Observable<UserBusiness> {

    return this.rpc.client.post<UserBusiness>('business/register', {}, data).pipe(
      map(response => response.body)
    );
  }
}
