import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA7xq3dmJqRSXjIx8tEprPHlFsQgOOYnO8',
  authDomain: 'ec-project-ad01d.firebaseapp.com',
  databaseURL: 'https://ec-project-ad01d.firebaseio.com',
  projectId: 'ec-project-ad01d',
  storageBucket: '',
  messagingSenderId: '1048707955062',
  appId: '1:1048707955062:web:836331ecaa58f57e',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfile = async (userAuth, additionalData) => {
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdTime = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdTime,
          ...additionalData,
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    return userRef;
  }
};
