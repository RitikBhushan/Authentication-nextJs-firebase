import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCaCfF2ZRaXD-XecBTlum3dC8qP3YnAfcs",
  authDomain: "fir-too-doo.firebaseapp.com",
  projectId: "fir-too-doo",
  storageBucket: "fir-too-doo.appspot.com",
  messagingSenderId: "259254081844",
  appId: "1:259254081844:web:a6f31638849b8eac32ad61"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
