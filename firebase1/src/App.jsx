import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from 'react';


// import { getDatabase, ref, set } from 'firebase/database';
import app from './firebase'; // Default import
import Login from "./Components/Login";


const auth = getAuth(app);

 





// const db = getDatabase(app);

// function putData() {
//   set(ref(db, 'users/huzaifa'), {
//     id: 1,
//     name: 'Hello Hajra',
//     age: 22
//   });
// }

function App() {
  const signUp = () => {
    createUserWithEmailAndPassword(auth, "mr@gmail.com", "helloworld")
      .then((value)=>console.log(value))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div>
        <Login />
      </div>
    </>
  );
}
export default App;
