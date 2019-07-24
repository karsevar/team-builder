import React, {useState, useEffect} from 'react';

import Form from './components/Form';

import './App.css';

function App() {

  // The following state will be passed to the Form.js component.
  // Data mock ideas: Might want to start with an array with objects within it.
  /* 
  teamMembers = [
    {
      name: 
      email: 
      role:
    },
    {
      ....
    }
  ]
  */


  const [teamMembers, setTeamMembers] = useState({name: '', email: '', role: ''});

  // onChange handler functions 
  const handleChange = event => {
    setTeamMembers({...teamMembers, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(teamMembers);
  }

  return (
    <div className="App">
      <h1>Add Team Members: </h1>
      <Form 
        teamMembers={teamMembers} 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
      />
    </div>
  );
}

export default App;
