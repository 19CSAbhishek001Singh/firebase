import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCqO92YHL5ExdV4nHw8dUvFGKQuaNUYx3c",
  authDomain: "authfirebase-c7a62.firebaseapp.com",
  projectId: "authfirebase-c7a62",
  storageBucket: "authfirebase-c7a62.appspot.com",
  messagingSenderId: "263239662146",
  appId: "1:263239662146:web:fe541460eb26d874634bdb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)