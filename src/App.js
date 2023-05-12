import './App.css';
import { useState, useEffect } from 'react';
import {getDocs, collection, addDoc} from "firebase/firestore";
import {db} from "./firebase-config"

function App() {
  const [peoples, setPeople] = useState([]);
  const peopleCollection = collection(db, "people");

  const [formData, setFormData] = useState({
      Name: "",
      Friends: "",
      Emotion: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const addPeople = () =>{
    addDoc(peopleCollection, formData);
  }


  useEffect(()=>{
    const getPeople = async ()=>{
      const data = await getDocs(peopleCollection);
      console.log(data);

      setPeople(data.docs.map((doc)=>
        ({
          ...doc.data(),
          id: doc.id
        })
      ))
    }

    getPeople();

  }, [addPeople])


  return (
    <div className="App">
      <input onChange={handleInputChange} type="text" name="Name" placeholder='name' />
      <input onChange={handleInputChange} type="number" name="Friends" placeholder='number of friends' />
      <select onChange={handleInputChange} name="Emotion" id="">
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Just okay">Just okay</option>
      </select>
      <button onClick={addPeople}>
        Add People
      </button>
      {peoples.map((people)=>{
        return (
          <div>
            <h3>{people.Name}</h3>
            <h6>{people.Name} has a number of {people.Friends} friends</h6>
            <h6>He/she is {people.Emotion}</h6>
            <button>Increase</button>
            <button>Decrease</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
