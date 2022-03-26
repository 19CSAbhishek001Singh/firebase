import React, { useState } from 'react'
const Reactcontact = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    text: ""
  });
  let uname, value;
  const getUserData = (event) => {
    uname = event.target.name;
    value = event.target.value;
    setUser({ ...user, [uname]: value })
  };
  const { name, password, text } = user;
  const postData = async (event) => {
    event.preventDefault();
    const res = await fetch("https://fir-demo-96ad8-default-rtdb.firebaseio.com/demofirebase.json", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        password,
        text
      })
    });
    if (res) {
      setUser({
        name: "",
        password: "",
        text: ""
      })
    }
  }
  return (
    <>
      <form method="POST">
        <label>
          User Name:
          <input type="text" name="name" required value={user.name} onChange={getUserData} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required value={user.password} onChange={getUserData} />
        </label>
        <br></br>
        <label>
          Type message:
          <br></br>
          <textarea type="text" name="text" rows="5" cols="50" required value={user.text} onChange={getUserData} />
        </label>
        <br></br>
        <button value="Submit" onClick={postData}> click me</button>
      </form>
    </>
  )
}

export default Reactcontact