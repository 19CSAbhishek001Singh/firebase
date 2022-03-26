import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAx3YATijAgRwBdGgNad5ulCZaiM2_KNrc",
  authDomain: "projectfirebase-fcaaa.firebaseapp.com",
  projectId: "projectfirebase-fcaaa",
  storageBucket: "projectfirebase-fcaaa.appspot.com",
  messagingSenderId: "982444812561",
  appId: "1:982444812561:web:22d9e7b326e51255efc4b0"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);