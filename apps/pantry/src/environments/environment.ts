import { environment as dev } from './environment.dev';

export const environment = {
  production: false,
  firebase: {
    apiKey: dev.firebase.apiKey ? dev.firebase.apiKey : 'FIREBASE_API_KEY',
    authDomain: dev.firebase.appId ? dev.firebase.authDomain : 'AUTH_DOMAIN',
    databaseURL: dev.firebase.databaseURL ? dev.firebase.databaseURL : "https://<app>.firebaseio.com",
    projectId: dev.firebase.projectId ? dev.firebase.projectId : "projectId",
    storageBucket: dev.firebase.storageBucket ? dev.firebase.storageBucket : "<storage>.appspot.com",
    messagingSenderId: dev.firebase.messagingSenderId ? dev.firebase.messagingSenderId : "id",
    appId: dev.firebase.appId ? dev.firebase.appId : "app_id"
  }
};
