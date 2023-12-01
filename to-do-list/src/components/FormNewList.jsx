import React, { useState } from "react";

function FormNewList({addNewTask}) {
    const[newTask, setNewTask] = useState

    ({
        listName: "",
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
    <form onSubmit={handleaddNewTask}>
        <input type="text" name="name" value={newTask.name} onChange={handleInputChange}/>
        <button type="submit" style={{ margin: '10px' }}> Añadir Tarea </button>
    </form>
    )
}

export default FormNewList;