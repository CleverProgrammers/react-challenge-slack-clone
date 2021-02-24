import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDVFHFiNtBVHBlDVU2PjXxkP9DIf2q_kW8",
    authDomain: "slack-clone-challenge.firebaseapp.com",
    projectId: "slack-clone-challenge",
    storageBucket: "slack-clone-challenge.appspot.com",
    messagingSenderId: "591670883254",
    appId: "1:591670883254:web:5b3ba8b8267938b9c38717"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;

