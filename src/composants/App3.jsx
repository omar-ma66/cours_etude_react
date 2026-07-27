import { useState } from "react";

import "./App.css";



function Cup({ guest }) {
  // fonction pure

  return <h2>Tasse de thé pour l'invité #{guest}</h2>;
  console.log(guest);
}

export default function App() {
  return ( 
  <section> 
    <Cup guest={1} />
    <Cup guest={2} />
    <Cup guest={3} />
    <Cup guest={4} />
    </section>)
  
}
