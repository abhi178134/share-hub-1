import firebase from 'firebase';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCIbpn8e-w6qtnV3blrEjbaP_46_eUocLc",
  authDomain: "share-hub-backend.firebaseapp.com",
  projectId: "share-hub-backend",
  storageBucket: "share-hub-backend.appspot.com",
  messagingSenderId: "297816508917",
  appId: "1:297816508917:web:29ed2ad98cceb71c9af8bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, storage, db, timestamp };
