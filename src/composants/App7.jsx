import { useState } from "react";
import './App.css'
// #################################################

function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
// #################################################

 function AppTest() {
  return (
    <form onSubmit={() => alert('Envoi en cours !')}>
      <input />
      <button>Envoyer</button>
    </form>
  );
}

// #################################################

 function AppTest2() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Envoi en cours!');
    }}>
      <input />
      <button>Envoyer</button>
    </form>
  );
}

// #################################################

export default function App() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Basculer la lumière
    </button>
  );
}
// #################################################
