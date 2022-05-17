import './App.css';
import {collection,getDocs} from 'firebase/firestore'
import {db} from './firebase-config'
import {useEffect,useState} from 'react';
function App() {
  const [users,setUsers]=useState([]);
  const [newName,setNewName]=useState("");
  const [newAge,setNewAge]=useState(0);
  const userCollectionReference=collection(db,"users")
  useEffect(()=>{
 const getuser=( async ()=>{
      const data=await getDocs(userCollectionReference)
      console.log(data.docs);

      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      })
    getuser();
  },[])
  const createUser=async ()=>{
     
  }
  return (
    <div className="App">
      <input placeholder="name" onchange={e=>{setNewName(e.target.value)}}></input>
      <input placeholder="age" onchange={e=>{setNewAge(e.target.value)}}/>
      <button onClick={createUser}>Create User</button>
    {users.map((user)=>{return<> <h1>NAME: {user.name}</h1>
    <h1>AGE :{user.age}</h1>
    <h1>ID :{user.id}</h1>
    </>})}
    </div>
  );
}

export default App;
