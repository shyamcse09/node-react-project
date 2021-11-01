import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [active, setActive] = useState('');
  const [emp, setEmp] = useState([]);
  const [inseredId, setInsert] = useState('');
  const [rowNumber, setRow] = useState('');

  const addEmployee = async (e) => {
    e.preventDefault();
    setInsert(true);
  };

  useEffect(() => {
    if (inseredId) {
      axios
        .post('http://localhost:3001/create', {
          name: name,
          email: email,
          active: active
        })
        .then((response) => {
          setRow(response.data);
        });
      setInsert(false);
    }
  }, [inseredId]);

  useEffect(() =>{
    axios
      .get('http://localhost:3001/')
      .then((res) => {
        setEmp(res.data);
      });
  }, [inseredId]);

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
          {name}
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
        New Row addedd - {rowNumber.insertId}
      </form>
      All Data :
      {emp.map((data, index) => {
        return (
          <div className="row" key={index}>
            <div className="col">
              {data.id}
            </div>
            <div className="col">
              {data.name}
            </div>
            <div className="col">
              {data.email}
            </div>
            <div className="col">
              {data.active}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
