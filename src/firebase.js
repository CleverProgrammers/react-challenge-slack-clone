import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDboBmyN7Ynetz73ch2m5Z0v46qZ38F8Uc",
  authDomain: "slack-clone-challenge-82f41.firebaseapp.com",
  projectId: "slack-clone-challenge-82f41",
  storageBucket: "slack-clone-challenge-82f41.appspot.com",
  messagingSenderId: "860560822513",
  appId: "1:860560822513:web:f31ce50812132859b25950",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

export default db
