import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import { ApiClient, ApiClientConfig, RequestFactory } from '@api/helpers';
import { ContentTypeWrapperService } from './content-type-wrapper.service';
import { PreferParamsWrapperService } from './prefer-params-wrapper.service';

@Injectable()
export class ClientApiService {

  readonly config: ApiClientConfig = {
    API_PATH: environment.api.rpc.apiPath
  };

  // tslint:disable-next-line:variable-name
  private _client: ApiClient;

  constructor(http: HttpClient) {

    const reqFactory = new RequestFactory()
      .addWrapper(new ContentTypeWrapperService())
      .addWrapper(new PreferParamsWrapperService());

    this._client = new ApiClient(http, reqFactory);
  }

  get client(): ApiClient {
    return this._client;
  }
}
