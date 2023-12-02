import React, { useState, useEffect} from 'react';
import FormNewList from './FormNewList';
import ListTask from './ListTask';
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import ListName from './ListName';


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
    setLists((currentLists) => [...currentLists, { name: "", tasks: [], showForm: true } 
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
          ? {...list, tasks: list.tasks.map((task) => 
          task.id === taskId ? { ...task, completed: !task.completed } : task
          ),
          } : list
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
    <div style={{ margin: '10px', display: 'flex', flexDirection:'column', rowGap:'24px', height: '90%'}}>
        <div className='new-list'>
          <IconContext.Provider value={{ color: darkMode ? '#ffff' : '#000' }}>
            <IoIcons.IoIosAddCircleOutline onClick={handleNewList} value /> 
          </IconContext.Provider>
          <span>Nueva Lista</span>
        </div>
        {/* <button onClick={handleNewList}>Nueva Lista</button> */}
        <div className='lists-container' >
          {lists.map((list, index) => (
            <div className='list' key={index} style={darkMode ? {backgroundColor: '#121F3D', border: '2px solid #5D38F1'} : {backgroundColor: '#D9D9D9'}}>
                <div style={{ color: darkMode ? '#ffff' : '#000' }}>
                  <ListName tittle={list.name} onTittleChange={(newName) => handleListNameChange(index, newName)} darkMode={{darkMode}}/> 
                </div>
                {/*Antiguo Input donde se ponia el nombre de la lista, lo dejo por las dudas
                <input
                  type="text"
                  placeholder="Nombre de la lista..."
                  maxLength="20"
                  value={list.name}
                  onChange={(e) => handleListNameChange(index, e.target.value)}
                /> */}
              <ListTask
                tasks={list.tasks}
                onTaskCompleted={(taskId) => handleTaskCompleted(index, taskId)}
                onTaskDeleted={(taskId) => handleTaskDeleted(index, taskId)}
                darkMode={darkMode}
              />
              {list.showForm && (
                <>                     
                  {list.name && (                
                    <FormNewList addNewTask={(newTask) => handleNewTask(newTask, index)} darkMode={darkMode} />
                  )}
                  <div className='delete-list'>
                    <IconContext.Provider value={{ color: darkMode ? '#ffff' : '#000' }}>
                      <IoIcons.IoIosCloseCircleOutline onClick={() => handleCloseForm(index)} value /> 
                    </IconContext.Provider>
                    <span>Eliminar Lista</span>
                  </div>
                </>
              )}
            </div>
          ))}
          
        </div>
      </div>
  );
}

export default Task;
