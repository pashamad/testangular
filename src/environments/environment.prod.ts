import { _environment } from './_environment.common';

export const environment = {
  ..._environment,
  production: true,
  api: {
    data: {
      apiHost: 'api.onlife.network:3000',
      apiPath: '/',
      useHttps: false
    },
    rpc: {
      apiHost: 'api.onlife.network:80',
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
