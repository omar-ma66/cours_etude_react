import { useState } from "react";
import { sculptureList } from "./data2";
import './App.css'
// #################################################



export default function App()
{
const [index,setIndex] = useState(0) ;

function HandleClick()
{
      let data = index + 1 ;

      setIndex(data);
}

let sculpture = sculptureList[index];

  return (
    <>
        <button onClick={HandleClick}> Suivant </button>
        <h2>
            <i>{sculpture.name}</i>
            par {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} sur { sculptureList.length })
        </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>
              {sculpture.description}
        </p>
    
    </>
  );
}

// #################################################
