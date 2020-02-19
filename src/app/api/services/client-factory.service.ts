import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  RequestFactory,
  ApiClient,
  ApiClientConfig,
  RequestWrapper
} from '@api/helpers';
import { ContentTypeWrapperService } from './content-type-wrapper.service';
import { PreferParamsWrapperService } from './prefer-params-wrapper.service';

@Injectable()
export class ClientFactoryService {

  private _wrappers = new Map<string, RequestWrapper>();

  private _reqFactory: RequestFactory;

  constructor(private http: HttpClient) {
    this._reqFactory = new RequestFactory();
    this._reqFactory
      .addWrapper(new ContentTypeWrapperService())
      .addWrapper(new PreferParamsWrapperService());
    Array.from(this._wrappers.values()).forEach(w => this._reqFactory.addWrapper(w));
  }

  createClient(config: ApiClientConfig, reqFactory?: RequestFactory): ApiClient {
    const client = new ApiClient(this.http, reqFactory || this._reqFactory);
    client.configure(config);
    return client;
  }

  addWrapper(wrapper: RequestWrapper): void {
    if (!this._wrappers.has(wrapper.getKey())) {
      this._wrappers.set(wrapper.getKey(), wrapper);
      this._reqFactory.addWrapper(wrapper);
    } else {
      console.warn(`Wrapper ${wrapper.getKey()} already exists in request factory`);
    }
  }

  removeWrapper(key: string): void {
    if (this._wrappers.has(key)) {
      this._wrappers.delete(key);
      this._reqFactory.removeWrapper(key);
    } else {
      console.warn(`Wrapper ${key} not found in request factory`);
    }
  }

  hasWrapper(key: string): boolean {
    return this._wrappers.has(key);
  }

  replaceWrapper(wrapper: RequestWrapper): void {
    const key = wrapper.getKey();
    if (this.hasWrapper(key)) {
      this.removeWrapper(key);
    }
    this.addWrapper(wrapper);
  }
}
