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
    // console.log('In memberToEdit Hook', memberToEdit);
  }

  // onChange handler functions 
  const handleChange = event => {
    setTeamMembers({...teamMembers, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    // saveArray(); 
    editMember();
    setTeamMembers({name: '', email: '', role: ''})

  }

  // Step 4 - editMember function:
  // A little work around for the step 4 section.
  function editMember() {
    setTeamArray([...teamArray.filter(member => member.name !== teamMembers.name), teamMembers])
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
        setTeamMembers={setTeamMembers} 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        saveArray={saveArray}
        memberToEdit={memberToEdit}
        saveArray={saveArray}
      />

      {/* creating cards for individual team members. Will refactor later.*/}
      <div className='team-container'>
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
