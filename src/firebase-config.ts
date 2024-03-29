import { initializeApp } from 'firebase/app';
import once from 'lodash/once';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const FirebaseApp = once(() => initializeApp(firebaseConfig))();

export default FirebaseApp;
