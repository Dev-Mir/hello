import React, { useState } from 'react'
import UserParticipation from './UserParticipation';

export default function AnotherUserParticipation() {

  const [input, setInput] = useState("");
  const [adduser, setaddData] = useState([]);
  
  
  const clickHandler = () => {
    const tempadduser = adduser;
    tempadduser.push(input);
    setaddData(adduser);
    setInput("");
    console.log(adduser);
  };


  return (
    <div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />{" "}
        
        <button onClick={clickHandler}>Add</button>
        
      <UserParticipation users={adduser}/>
      
    </div>
  )
}
