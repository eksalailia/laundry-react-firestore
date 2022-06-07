import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyADoOi3GK2hjYQsB0MDxaas_t9s13A6Bss",
  authDomain: "project-pbf-93e62.firebaseapp.com",
  projectId: "project-pbf-93e62",
  storageBucket: "project-pbf-93e62.appspot.com",
  messagingSenderId: "337506047964",
  appId: "1:337506047964:web:506d09ebffd0389a52e119",
  measurementId: "G-9931TCVEEC"
};
firebase.initializeApp(config);
firebase.auth();
firebase.firestore().settings(settings);


// const init = firebase.initializeApp(config);
// export const firebaseAuthentication = init.auth();

export default firebase;