import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Discuter avec ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button>Envoyer à {contact.email}</button>
    </section>
  );
}
