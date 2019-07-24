import React, {useState, useEffect} from 'react';
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


  const [teamMembers, setTeamMembers] = useState([]);
  return (
    <div className="App">
      <h1>Add Team Members: </h1>
    </div>
  );
}

export default App;
