import React from 'react';

function ListTask({ tasks, onTaskCompleted, onTaskDeleted }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={() => onTaskCompleted(task.id)} style={{ margin: '10px' }}>
            {task.completed ? 'Desmarcar' : 'Completar'}
          </button>
          <button onClick={() => onTaskDeleted(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTask;
