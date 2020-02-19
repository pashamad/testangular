import { _environment } from './_environment.common';

export const environment = {
  ..._environment,
  production: false,
  api: {
    data: {
      apiHost: 'api.onlifedev.net:3000',
      apiPath: '/',
      useHttps: false
    },
    rpc: {
      apiHost: 'api.onlifedev.net:80',
      apiPath: '/',
      useHttps: false
    }
  },
  locale: {
    fallbackLang: 'en',
    dateFormats: {
      en: { date: 'dd/MM/yyyy', full: 'dd/MM/yy HH:mm' },
      ru: { date: 'dd.MM.yyyy', full: 'dd.MM.yy HH:mm' },
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
