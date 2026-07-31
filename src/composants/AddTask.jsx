
import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === '') return; // Évite d'ajouter des tâches vides
    onAddTask(text);
    setText(''); // Réinitialise le champ texte
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}