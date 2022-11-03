import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA8SVdFoFdZXaef5Ngo7WfOQ38S2ypwmPo",
  authDomain: "netflix-clone-41c29.firebaseapp.com",
  projectId: "netflix-clone-41c29",
  storageBucket: "netflix-clone-41c29.appspot.com",
  messagingSenderId: "895134032988",
  appId: "1:895134032988:web:91806001a770ec6b1cf299"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;