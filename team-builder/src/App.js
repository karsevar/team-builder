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

  // teamArray idea:
  const [teamArray, setTeamArray] = useState([]);

  // Extra state for team member editing functionality:
  const [memberToEdit, setMemberToEdit] = useState({});

  // Extra state clickHandler for team member editing functionality:
  const handleMemberToEdit = (member) => {
    setMemberToEdit({...member})
    console.log('In memberToEdit Hook', memberToEdit);
  }

  // onChange handler functions 
  const handleChange = event => {
    setTeamMembers({...teamMembers, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    setTeamMembers({name: '', email: '', role: ''})

    // Using handleSubmit callback function to update an array with new team members.
    // console.log('new team member', teamMembers);
    // console.log('team array', teamArray);
  }

  // Turns out that I need to put the array update useState function at the end of the list
  // Placed the following callback on the button tag as a onClick.
  function saveArray() {
    if (teamMembers.name !== '') {
      setTeamArray([
        ...teamArray,
        teamMembers
      ])
    }
  }

  return (
    <div className="App">
      <h1>Add Team Members: </h1>
      <Form 
        teamArray={teamArray}
        teamMembers={teamMembers} 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        saveArray={saveArray}
      />

      {/* creating cards for individual team members. Will refactor later.*/}
      <div className='team-container'>
      {/* {
      useEffect(() => {
        teamArray.map((member, index) => (
            <div className='member-container' key={index}>
              <h3>Name: {member.name}</h3>
              <h4>Role: {member.role}</h4>
              <p>Email: {member.email}</p>
              <button onClick={handleMemberToEdit({member})}>Edit User!</button>
            </div>
        ))}, [])
    } */}
      {
        teamArray.map((member, index) => (
          <div className='member-container' key={index}>
            <h3>Name: {member.name}</h3>
            <h4>Role: {member.role}</h4>
            <p>Email: {member.email}</p>
            <button onClick={() => handleMemberToEdit(member)}>Edit User!</button>
          </div>
      ))
      }
      </div>
    </div>
  );
}

export default App;
