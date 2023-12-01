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
        setNewTask((inputTask) => ({...inputTask,[name]: value}))
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
    <div style={{ margin: '10px', display: 'flex', flexDirection:'column', rowGap:'24px',}}>
        <form>
            <input type="text" name="name" value={newTask.name} onChange={handleInputChange} />
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