import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";

function FormNewList({addNewTask, darkMode}) {
    const[newTask, setNewTask] = useState
    ({
        name: "",
    });
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        if (value.length > 25 && value.includes(" ")) {
          // Realizamos el salto de línea automáticamente
          const newValue = value.replace(/(.{25})\s/g, '$1\n');
          setNewTask((inputTask) => ({ ...inputTask, [name]: newValue }));
        } else {
          // De lo contrario, actualizamos el estado normalmente
          setNewTask((inputTask) => ({ ...inputTask, [name]: value }));
        }
      };
    const handleaddNewTask = (event) => {
        // Se utiliza para que no se recargue la pagina
        event.preventDefault();

        if (newTask.name.trim() !== "") 
        {
            addNewTask({...newTask, id: Math.floor(Math.random() * 9999), completed: false});
            setNewTask({name: ""});
            alert("Tarea agregada con exito!");
        }
    }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '24px', margin: 0, padding: 0}}>
        <form >
        <textarea name="name" value={newTask.name} onChange={handleInputChange}
          style={{
            width: "100%",
            minHeight: "60px",
            resize: "none",
            color: darkMode ? '#ffff' : '#000',
            backgroundColor: darkMode ? '#121F3D' : '#D9D9D9',
            border: `2px solid ${darkMode ? '#5D38F1' : '#000'}`,
            wordWrap: 'break-word',
          }}
        />
        </form> 
        <div className='new-task'>
            <IconContext.Provider value={{ color: darkMode ? '#ffff' : '#000' }}>
                <IoIcons.IoIosAddCircleOutline onClick={handleaddNewTask} value />
            </IconContext.Provider>
            <span>Añadir Tarea</span>
        </div>
    </div>
    )
}

export default FormNewList;