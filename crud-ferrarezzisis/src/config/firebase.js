import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyBiB0ZL-dClYdxeU5TStntE--RA_1AefoI",
  authDomain: "crudferrarezzisis.firebaseapp.com",
  projectId: "crudferrarezzisis",
  storageBucket: "crudferrarezzisis.appspot.com",
  messagingSenderId: "613062659883",
  appId: "1:613062659883:web:9de1f4d9e84779638d3f6e"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();