import { useState } from 'react';

export default function App() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Salut !');
  if (isSent) {
    return <h1>Votre message est en route !</h1>
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}

function sendMessage(message) {
alert(message);
}
