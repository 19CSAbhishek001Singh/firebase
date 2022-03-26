import { useState, useEffect } from 'react';
import { db } from './firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const userCollectionRef = collection(db, "users")
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers()
  });
  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  }
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields)
  }
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc, id)
  }
  return (
    <div>
      <input placeholder="Enter your name" type="text" onChange={(event) => { setNewName(event.target.value); }} />
      <input placeholder="Enter your age" type="number" onChange={(event) => { setNewAge(event.target.value); }} />
      <button onClick={createUser}>submit</button>
      {users.map((user) => {
        return (<div>
          {" "}
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <button onClick={() => { updateUser(user.id, user.age) }}>Increase age</button>
          <button onClick={() => { deleteUser(user.id) }}>delete</button>
        </div>
        )
      })}
    </div>
  );
}

export default App;
