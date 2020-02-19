import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { LoginState, LoginStateModel } from '@auth/states';

import { PoiPlace } from '@feature/shared/models';
import { DataApiService, RpcApiService } from '@feature/shared/services';
import { AddPlaceModel } from '@feature/places/models';

@Injectable()
export class PlacesService {

  @Select(LoginState) readonly state$: Observable<LoginStateModel>;
  readonly user$ = this.state$.pipe(
    map(state => state.user)
  );

  constructor(private api: DataApiService, private rpc: RpcApiService) { }

  loadPlaces(): Observable<PoiPlace[]> {

    const params = {
      select: '*,creator:users(*),images:place_images(*)'
    };

    return this.user$.pipe(
      switchMap(user => {
        // tslint:disable-next-line:no-string-literal
        return this.api.client.get<PoiPlace[]>('my_business_places', params).pipe(
          map(result => result.body)
        );
      })
    );
  }

  addPlace(data: AddPlaceModel): Observable<string> {

    const request = {
      ...data,
      category: 'places',
      subcategory: null
    } as AddPlaceModel;

    return this.rpc.client.post<{ id: string }>('business/add-place', {}, request).pipe(
      map(response => response.body),
      map(body => body.id)
    );
  }

  getPlace(id: string): Observable<PoiPlace> {
    return this.rpc.client.get<PoiPlace>(`places`, {
      uuid: `eq.${id}`,
      select: '*,creator:users(*),images:place_images(*)'
    }).pipe(
      map(response => response.body)
    );
  }
}
