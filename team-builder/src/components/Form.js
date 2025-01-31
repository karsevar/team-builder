import React, {useEffect} from 'react';

function Form({teamMembers, handleChange, handleSubmit, memberToEdit, setTeamMembers, saveArray}) {
    // console.log(memberToEdit);
    useEffect(() => { 
        console.log('in useEffect', memberToEdit);
        setTeamMembers({...memberToEdit})
    }, [memberToEdit]);
    

    return (
        <div className='form-container'>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name: 
                    <input 
                        type="text"
                        name="name"
                        value={teamMembers.name}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={teamMembers.email} 
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Role:
                    <input
                        type="text"
                        name="role"
                        value={teamMembers.role} 
                        onChange={event => handleChange(event)}
                    />
                </label>
                <button onClick={() => saveArray()}>Submit New Member!</button>
            </form>
        </div>
    );
}

export default Form;