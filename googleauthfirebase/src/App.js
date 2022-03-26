import { signInWithGoogle } from "./firebase-config"

function App() {

  return (
    <>
      <button onClick={signInWithGoogle}>sign in with Google</button>
      <h1>{localStorage.getItem("email")}</h1>
    </>
  );
}

export default App;
