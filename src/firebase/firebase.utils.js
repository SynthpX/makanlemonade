import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBpc1e5DV1DNWVArDMqnozruPOqrTuxb2Y",
        authDomain: "watermelon-fc210.firebaseapp.com",
        projectId: "watermelon-fc210",
        storageBucket: "watermelon-fc210.appspot.com",
        messagingSenderId: "290562590000",
        appId: "1:290562590000:web:017724f4d848a87447f4f5",
        measurementId: "G-9CY4WQVRFC"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;