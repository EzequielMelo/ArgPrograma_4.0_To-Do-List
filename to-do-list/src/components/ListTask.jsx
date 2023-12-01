import React from 'react';
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";

function ListTask({ tasks, onTaskCompleted, onTaskDeleted, darkMode }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{listStyle: 'none', display: 'flex', padding: '10px'}}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none', border: 'none', verticalAlign: 'bottom', display: 'flex', justifyContent: 'flex-end'}}>
            {task.name}
            <IconContext.Provider value={{ color: darkMode ? '#ffff' : '#000' }}>
              <IoIcons.IoIosCheckmark onClick={() =>{onTaskCompleted(task.id)}} value />
              <IoIcons.IoIosClose onClick={() =>{onTaskDeleted(task.id)}} value />
            </IconContext.Provider>
          </span>
          {/* <button onClick={() => onTaskCompleted(task.id)} style={{ margin: '10px' }}>
            {task.completed ? 'Desmarcar' : 'Completar'}
          </button>
          <button onClick={() => onTaskDeleted(task.id)}>Eliminar</button> */}
        </li>
      ))}
    </ul>
  );
}

export default ListTask;
