import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { ApiClient } from '@api/helpers';
import { ClientFactoryService } from '@api/services';

@Injectable()
export class AuthApiService {

  private _client: ApiClient;

  constructor(private factory: ClientFactoryService) { }

  getClient(): ApiClient {
    const config = {
      API_HOST: environment.api.data.apiHost,
      API_PATH: environment.api.data.apiPath,
      USE_HTTPS: environment.api.data.useHttps
    };
    this._client = this.factory.createClient(config);
    return this._client;
  }
}
