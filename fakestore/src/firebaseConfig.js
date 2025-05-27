import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAstdp7bhsDJ_zMid6loiYPkytp5BExJg",
  authDomain: "fakestore-5558d.firebaseapp.com",
  projectId: "fakestore-5558d",
  storageBucket: "fakestore-5558d.firebasestorage.app",
  messagingSenderId: "134331619171",
  appId: "1:134331619171:web:434d79de1699dc7682a556"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };