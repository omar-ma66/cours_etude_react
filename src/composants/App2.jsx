import { useState } from 'react'
import { people } from './data';
import { getImageUrl } from './utils';
import './App.css'


export default function  App()
{
        const [count,setCount]=useState(0);    


 const chemists = people.filter (person => person.profession === "chimiste");
 const autre    = people.filter((person )=>
  {
    return person.profession !== "chimiste" ;
  })
  const listAutre = autre.map((person)=>{ 
   return ( <li className='tst' key={person.id}>
    <img  className='rond'src={getImageUrl(person)}
    alt={person.name} />
    <p>
        <b>{person.name}:</b>
        {'' + person.profession +''}
        celebre pour {person.accomplishement}
      </p> 
 </li>)
  })
 const listItems = chemists.map(person => 
 <li className='tst' key={person.id}>
    <img className='rond' src={getImageUrl(person)}
    alt={person.name} />
    <p>
        <b>{person.name}:</b>
        {'' + person.profession +''}
        celebre pour {person.accomplishement}
      </p> 
 </li>)

function HandleClick()
{
  const data = count + 1 ;

              setCount(data);
}

  return (
  <section>
      <ul>{listItems}</ul> 
  
      <ul>{listAutre}</ul>
  </section>
        
  );
}