import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-D9Pib4RzYAkCQK-TfMp20hGHWA4guTk",
  authDomain: "insta-e6a3c.firebaseapp.com",
  databaseURL: "https://insta-e6a3c.firebaseio.com",
  projectId: "insta-e6a3c",
  storageBucket: "insta-e6a3c.appspot.com",
  messagingSenderId: "99667606782",
  appId: "1:99667606782:web:f6e595c0341b285311b9af",
  measurementId: "G-QVTDNKE30X"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;