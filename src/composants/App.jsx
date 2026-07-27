import { useState } from "react";

// #################################################
function Clock({ time }) {
  let hours = time.getHours();
  let className;

  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
 return     (<h1 className={className}>Jour
      {time.toLocaleTimeString()}
    </h1>);
  ;
}
export default function App()
{
const time = new Date();
  return <Clock time={time} />
}
// #################################################
