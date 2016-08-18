import Raven from 'raven-js';

const sentry_key = 'my-num';
const sentry_app = 'my-num';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

//Configure firebase
export const Firebase_Config = {
  apiKey: 'my-num',
  authDomain: 'learn-redux.firebaseapp.com',
  databaseURL: 'https://learn-redux.firebaseio.com',
  storageBucket: 'learn-redux.appspot.com'
};

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
