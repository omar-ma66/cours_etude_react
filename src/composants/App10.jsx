import { useState } from "react";

// import './App.css'
// #################################################


export default function App() {
  // let firstName = '';
  // let lastName = '';


  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');

  function handleFirstNameChange(e) {
  setFirstName (e.target.value);
  }

  function handleLastNameChange(e) {
   setLastName(e.target.value);
  }

  function handleReset() {
  
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="Prénom"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Nom"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Salut {firstName} {lastName}</h1>
      <button type="button" onClick={handleReset}>Réinitialiser</button>
    </form>
  );
}
