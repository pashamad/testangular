const fs = require('fs');

const appVersion = require('./package.json').version;

const _vars = {
  APP_VERSION: appVersion,
  BUILD_TIME: (new Date()).getTime()
};

const data = `export const _vars = ${JSON.stringify(_vars, null, 2)};`;
fs.writeFile('./_vars.ts', data, { encoding: 'utf-8' }, (err) => {
  if (err) {
    console.error(err);
  }
});
fs.writeFile('./src/version', _vars.APP_VERSION, { encoding: 'utf-8' }, (err) => {
  if (err) {
    console.log(err);
  }
});
