import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCpEW799rkQBWG55l-vbxqVfQdszZjv9w8",
    authDomain: "crwn-db-1fc39.firebaseapp.com",
    databaseURL: "https://crwn-db-1fc39.firebaseio.com",
    projectId: "crwn-db-1fc39",
    storageBucket: "crwn-db-1fc39.appspot.com",
    messagingSenderId: "332801995121",
    appId: "1:332801995121:web:0e289ba9e0a683817506d0",
    measurementId: "G-LQDGW0QFTT"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

