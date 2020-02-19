import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { ApiClient, ApiClientConfig } from '@api/helpers';
import { ClientFactoryService } from '@api/services';

@Injectable()
export class RpcApiService {

  readonly config: ApiClientConfig = {
    API_HOST: environment.api.rpc.apiHost,
    API_PATH: environment.api.rpc.apiPath,
    USE_HTTPS: environment.api.rpc.useHttps
  };

  // tslint:disable-next-line:variable-name
  private _client: ApiClient;

  constructor(private _factory: ClientFactoryService) {
    this._client = this._factory.createClient(this.config);
  }

  get client(): ApiClient {
    return this._client;
  }
}
