import { ApiClientInterface } from './api-client.interface';

export abstract class ApiClientContainer {

  protected _apiClient: ApiClientInterface;

  get client(): ApiClientInterface {
    return this._apiClient;
  }
}
