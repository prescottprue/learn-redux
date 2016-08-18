import Raven from 'raven-js';

const sentry_key = '9b2afad44f81440689e37ab28613bdee'; //'cb55d4f05cd443ce82303222f77ef5e0';
const sentry_app = '90141'; //'61499';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

//Configure firebase
export const Firebase_Config = {
  apiKey: 'AIzaSyBj0Qoyjlvs1o4-kGGFS4OiLit8JWPwGj0',
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
