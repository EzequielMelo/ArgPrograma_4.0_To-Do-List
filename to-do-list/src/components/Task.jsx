import React, { useState, useEffect} from 'react';
import FormNewList from './FormNewList';
import ListTask from './ListTask';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";


function Task({darkMode}) {
  const [lists, setLists] = useState(() => {
    let savedLists = localStorage.getItem('lista');
    return savedLists ? JSON.parse(savedLists) : [];
  });

  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(lists));
    /* console.log('Las listas se han actualizado:', lists); */
  }, [lists]);

  const handleNewList = () => {
    setLists((currentLists) => [
      ...currentLists,
      { name: "", tasks: [], showForm: true } // Mostrar el formulario para la nueva lista
    ]);
  };

  const handleCloseForm = (index) => {
    setLists((currentLists) => {
      let updatedLists = [...currentLists];
      updatedLists.splice(index, 1);
      return updatedLists;
    });
  };
  const handleNewTask = (task, i) => {
    lists[i].tasks.push(task);
    setLists((currentLists) => [...currentLists]);
  };


  const handleTaskCompleted = (listIndex, taskId) => {
    setLists((currentLists) =>
      currentLists.map((list, index) =>
        index === listIndex
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              ),
            }
          : list
      )
    );
  };

  const handleTaskDeleted = (listIndex, taskId) => {
    setLists((currentLists) =>
      currentLists.map((list, index) =>
        index === listIndex
          ? { ...list, tasks: list.tasks.filter((task) => task.id !== taskId) }
          : list
      )
    );
  };
  
  const handleListNameChange = (index, newName) => {
    setLists((currentLists) =>
      currentLists.map((list, i) =>
        i === index ? { ...list, name: newName } : list
      )
    );
  };

  return (
    <div style={{ margin: '10px', display: 'flex', flexDirection:'column', rowGap:'24px',}}>
        <div className='new-list'>
          <IconContext.Provider value={{ color: darkMode ? '#ffff' : '#000' }}>
            <IoIosAddCircleOutline onClick={handleNewList} value /> 
          </IconContext.Provider>
          <span>Nueva Lista</span>
        </div>
        {/* <button onClick={handleNewList}>Nueva Lista</button> */}
        <div className='lists-container' >
          {lists.map((list, index) => (
            <div className='list' key={index} style={darkMode ? {backgroundColor: '#121F3D', border: '2px solid #5D38F1'} : {backgroundColor: '#D9D9D9'}}>
                {list.name
                  ? <h3 style={darkMode ? {color: '#ffff', textAlign: 'center'} : {color: '#000', textAlign: 'center'}}>{list.name}</h3>
                  : null
                }
                <input
                  type="text"
                  placeholder="Nombre de la lista..."
                  maxLength="20"
                  value={list.name}
                  onChange={(e) => handleListNameChange(index, e.target.value)}
                />
              <ListTask
                tasks={list.tasks}
                onTaskCompleted={(taskId) => handleTaskCompleted(index, taskId)}
                onTaskDeleted={(taskId) => handleTaskDeleted(index, taskId)}
                darkMode={darkMode}
              />
              {list.showForm && (
                <>                     {console.log(index)}   

                  {list.name && (                
                    <FormNewList addNewTask={(newTask) => handleNewTask(newTask, index)} darkMode={darkMode} />
                  )}
                  <button onClick={() => handleCloseForm(index)}>Eliminar Lista</button>
                </>
              )}
            </div>
          ))}
          
        </div>
      </div>
  );
}

export default Task;
