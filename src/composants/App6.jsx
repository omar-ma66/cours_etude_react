import { useState } from "react";
import './App.css'
// #################################################
export default function App() {

function Echo1()
{
  alert('Super Lecture en cours!')
}

function Echo2()
{
  alert('Téléversement en cours!')
}

  return (
    <Toolbar
      // onPlayMovie={() => alert('Lecture en cours!')}
      // onUploadImage={() => alert('Téléversement en cours!')}
      onPlayMovie={Echo1}
      onUploadImage={Echo2}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Voir le film
      </Button>
      <Button onClick={onUploadImage}>
        Téléverser une image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// #################################################
