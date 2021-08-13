import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_DB_URL,
    databaseURL:process.env.PROJECT_ID,
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;
