import { useState } from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: '8px' }}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Enregistrer</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          {task.text}
        </span>
        <button onClick={() => setIsEditing(true)}>Éditer</button>
      </>
    );
  }

  return (
    <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Supprimer</button>
    </label>
  );
}