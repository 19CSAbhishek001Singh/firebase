import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCepDlFSeV31vXe40RjKX9OehGPIoIj9zw",
  authDomain: "auth-2e5c1.firebaseapp.com",
  projectId: "auth-2e5c1",
  storageBucket: "auth-2e5c1.appspot.com",
  messagingSenderId: "1080040466047",
  appId: "1:1080040466047:web:f0bb5a33e97feb0774c14a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const email = result.user.email
    localStorage.setItem("email", email)
  }).catch((error) => {
    alert("Could not sign in")
  })
}