import React, { useState } from 'react';

const PollDisplay = () => {

  const [choices, setChoices] = useState([
    { id: 1, label: "JavaScript", votes: 0 },
    { id: 2, label: "Python", votes: 0 },
    { id: 3, label: "Java", votes: 0 },
    { id: 4, label: "C#", votes: 0 }
  ]);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [voted, setvoted] = useState(false); 

  const handleVote = (event) => {

    const selectedId = parseInt(event.target.value);

    const updatedChoices = choices.map(choice => {
      if (choice.id === selectedId) {

        return { ...choice, votes: choice.votes + 1 };
      } 
      
      else {
        return choice;
      }
    });
    setChoices(updatedChoices);
    setSelectedChoice(selectedId);
  };

  return (
    <div>
      <h1>What is your favorite programming language?</h1>

      {choices.map(choice => (
        <div key={choice.id}>
          <input
            type="radio"
            id={`choice-${choice.id}`}
            name="programmingLanguage"
            value={choice.id}
            checked={selectedChoice === choice.id}
            onChange={handleVote}
            onClick={()=>setvoted(true)}
          /> 
          <label htmlFor={`choice-${choice.id}`}>{'______'}{choice.label} {choice.votes} {()=>setvoted(true)} </label>
        </div>    

      ))}

      {setvoted==true?<h1>Hi</h1>:null}

    </div>
  );
};

export default PollDisplay;
