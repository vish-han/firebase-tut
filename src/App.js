import './App.css';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore'
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

      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      console.log(users);
      })
    getuser();
  },[])
  const createUser=async ()=>{
     await addDoc(userCollectionReference,{name:newName,age:Number(newAge)})
  }
  const updateAge=async (id ,age)=>{
const newFeild={age:age+1};
const userdoc=doc(db,"users",id);
await updateDoc(userdoc,newFeild);
  }
  const deleteUser=async (id)=>{
   const user=doc(db,"users",id);
   await deleteDoc(user);
  }
  return (
    <div className="App">
      <input placeholder="name" onChange={(event)=>{setNewName(event.target.value)}}/>
      <input placeholder="age" type="number" onChange={(event)=>{setNewAge(event.target.value)}}/>
      <button onClick={createUser}>Create User</button>
    {users.map((user)=>{return<> <h1>NAME: {user.name}</h1>
    <h1>AGE :{user.age}</h1>
   <button onClick={()=>updateAge(user.id,user.age)}>Increment Age</button>
   <button onClick={()=>deleteUser(user.id)}>Delete User</button>
    </>})}
    </div>
  );
}

export default App;
