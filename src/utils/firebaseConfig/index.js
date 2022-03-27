import enviConfig from '../../../.envi/enviConfig';
const firebaseConfig = {
    apiKey: enviConfig.API_KEY,
    authDomain: enviConfig.AUTH_DOMAIN,
    projectId: enviConfig.PROJECT_ID,
    storageBucket: enviConfig.STOREGE_BUCKET,
    messagingSenderId: enviConfig.MESSENGER_SENDER_ID,
    appId: enviConfig.API_ID,
    measurementId: enviConfig.MEASUREMENT_ID
  };

  export default firebaseConfig;