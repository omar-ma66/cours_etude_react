import { useState } from 'react';
import "./App.css" ;



export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    // person.firstName = e.target.value;  ce code ne marche pas

    // ici on remplie avec un spred operator
      setPerson({
         ...person,
            firstName:e.target.value,
          
          })
  }

  function handleLastNameChange(e) {
    // person.lastName = e.target.value;
     setPerson({
              ...person,
            lastName:e.target.value,
            // firstName:person.firstName,
            // email:person.email
          })

  }


  function handleEmailChange(e) {
    // person.email = e.target.value;
      setPerson({
            lastName:person.lastName,
            firstName:person.firstName,
            email:e.target.value
          })
  }

  return (
    <>
      <label>
        Prénom :
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Nom de famille:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        E-mail:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
