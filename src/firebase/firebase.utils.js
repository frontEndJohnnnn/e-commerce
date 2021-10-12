import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


//  firebase config
const config = {
    apiKey: "AIzaSyDDvwQjt9ygzs7lWa4UZJPcYfUsV5nqmWE",
    authDomain: "e-comm-9663d.firebaseapp.com",
    projectId: "e-comm-9663d",
    storageBucket: "e-comm-9663d.appspot.com",
    messagingSenderId: "35792431923",
    appId: "1:35792431923:web:2bd0be848038f609d12c46",
    measurementId: "G-S0DZMDG534"
};

// initialize firebase 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign In with Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;