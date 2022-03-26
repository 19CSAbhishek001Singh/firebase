import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config"
function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  const logout = async () => {
    await signOut(auth);
  }
  return (
    <>
      <h1>Register User</h1>
      <input type="Email" name="email" placeholder="Email" required onChange={(event) => { setRegisterEmail(event.target.value) }} />
      <input type="password" name="password" placeholder="Password" required onChange={(event) => { setRegisterPassword(event.target.value) }} />
      <button onClick={register}>Create User</button>
      <br></br>
      <button onClick={login}>Login</button>
      <input type="email" name="email" placeholder="Email" required onChange={(event) => { setLoginEmail(event.target.value) }} />
      <input type="password" name="password" placeholder="Password" required onChange={(event) => { setLoginPassword(event.target.value) }} />
      <h3>User logged in</h3>
      {user?.email}
      <button onClick={logout}>Sign out</button>
    </>
  );
}
export default App;
