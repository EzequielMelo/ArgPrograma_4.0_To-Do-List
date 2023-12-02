import React from 'react';
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import "../App.css";

function ListTask({ tasks, onTaskCompleted, onTaskDeleted, darkMode }) {
  return (
    <ul style={{marginTop: '10px', padding: 0, listStyle: 'none'}}>
      {tasks.map((task) => (
        <li key={task.id} style={{display: 'flex', listStyle: 'none', padding: '0'}}>
        <span style={{
          backgroundColor: '#796CE1',
          marginBottom: '10px',
          textDecoration: task.completed ? 'line-through' : 'none',
          borderRadius: '10px',
          verticalAlign: 'bottom',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', 
          fontSize: '16px', 
          padding: '6px'
        }}>
          {task.name}
          <IconContext.Provider value={{ color: darkMode ? '#ffff' : '#000' }}>
            <IoIcons.IoIosCheckmark id='completeTask'
              onClick={() => { onTaskCompleted(task.id) }}
              style={{
                marginLeft: '5px', // Ajusta el espacio entre el texto y el icono
                fontSize: '2em',
                cursor: 'pointer'
              }}
            />
            <IoIcons.IoIosClose id='deleteTask'
              onClick={() => { onTaskDeleted(task.id) }}
              style={{
                marginLeft: '5px', 
                fontSize: '2em',
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
