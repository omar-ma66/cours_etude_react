import { useState } from "react";
import { sculptureList } from "./data2";
import './App.css'
// #################################################



function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Suivant
      </button>
      <h2>
        <i>{sculpture.name} </i>
        par {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} sur {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Masquer' : 'Afficher'} les détails
      </button>
      {/* {showMore && <p>{sculpture.description}</p>} */}
      { showMore ? <p>{sculpture.description}</p>:<p></p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}



export default function Page() {
  return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );
}