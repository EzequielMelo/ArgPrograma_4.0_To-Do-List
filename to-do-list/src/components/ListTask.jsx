import React from 'react';
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";

function ListTask({ tasks, onTaskCompleted, onTaskDeleted, darkMode }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{display: 'flex', padding: '3px'}}>
        <span style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          border: 'none',
          verticalAlign: 'bottom',
          display: 'flex',
          alignItems: 'center', // Alinea verticalmente los elementos en el contenedor
          justifyContent: 'space-between', 
          fontSize: '16px', 
        }}>
          {task.name}
          <IconContext.Provider value={{ color: darkMode ? '#ffff' : '#000' }}>
            <IoIcons.IoIosCheckmark
              onClick={() => { onTaskCompleted(task.id) }}
              style={{
                marginLeft: '5px', // Ajusta el espacio entre el texto y el icono
                fontSize: '1.5em', 
                cursor: 'pointer'
              }}
            />
            <IoIcons.IoIosClose
              onClick={() => { onTaskDeleted(task.id) }}
              style={{
                marginLeft: '5px', 
                fontSize: '1.5em',
                cursor: 'pointer'
              }}
            />
          </IconContext.Provider>
        </span>
        </li>
      ))}
    </ul>
  );
}

export default ListTask;
