import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataApiService } from './data-api.service';
import { UserBusiness } from '@feature/shared/models';

@Injectable()
export class UserBusinessService {

  constructor(private api: DataApiService) { }

  load(): Observable<UserBusiness> {

    const params = {
      select: '*'
    };

    return this.api.client.get<UserBusiness[]>('my_user_business', params).pipe(
      map(result => result.body),
      map(body => body.length ? body[0] : undefined)
    );
  }
}
