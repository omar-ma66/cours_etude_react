import { useState } from "react";


function Cup({ guest })
{
  return (<h2>Tasse de cafe pour l'invité #{ guest }</h2>)
}
 
export default function App()
{

let cups = [] ;
              for(let i = 0 ; i < 12 ; i++)
              {
                cups.push(<Cup key={i} guest={i} />)
              }


  return cups;
}