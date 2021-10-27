import './App.css';
import {React, useState} from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [active, setActive] = useState('');

  const addEmployee = () => {
    axios
      .post('http://localhost:3001/create', {
        name: name,
        email: email,
        active: active
      })
      .then((response) => {
        console.log(response);
      });
  };
  const getEmployee = () => {
    axios
      .get('http://localhost:3001/')
      .then((res) => {
        console.log('All data');
      });

  };

  return (
    <div className="App">
      <form className="container">
        <div>
          <label> Name: </label>
          <input type="text"
            placeholder="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label> Email: </label>
          <input type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}/>
        </div>
        <div>
          <label> Active: </label>
          <input type="number"
            onChange={(event) => {
              setActive(event.target.value);
            }}/>
        </div>
        <button onClick={addEmployee}>Add Employee</button>
        <button onClick={getEmployee}>Get Employee</button>
      </form>
    </div>
  );
}

export default App;
