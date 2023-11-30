import React, { useState, useEffect } from 'react';
import FormNewList from './FormNewList';
import ListTask from './ListTask';

function Task() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    console.log('Las listas se han actualizado:', lists);
  }, [lists]);

  const handleNewList = () => {
    setLists((currentLists) => [
      ...currentLists,
      { name: "", tasks: [], showForm: true } // Mostrar el formulario para la nueva lista
    ]);
  };

  const handleCloseForm = (index) => {
    setLists((currentLists) => {
      const updatedLists = [...currentLists];
      updatedLists.splice(index, 1);
      return updatedLists;
    });
  };
  const handleNewTask = () => {
    setLists((currentLists) => [
      ...currentLists,
      { name: `Lista ${currentLists.length + 1}`, tasks: [], showForm: true } // Mostrar el formulario para la nueva lista
    ]);
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
    <div style={{ margin: '10px' }}>
      <button onClick={handleNewList}>Nueva Lista</button>
      {lists.map((list, index) => (
        <div key={index}>
          <h4>
            <input
              type="text"
              value={list.name}
              onChange={(e) => handleListNameChange(index, e.target.value)}
            />
          </h4>
          <ListTask
            tasks={list.tasks}
            onTaskCompleted={(taskId) => handleTaskCompleted(index, taskId)}
            onTaskDeleted={(taskId) => handleTaskDeleted(index, taskId)}
          />
          {list.showForm && (
            <>
              <FormNewList addNewTask={(newTask) => handleNewTask(newTask, index)} />
              <button onClick={() => handleCloseForm(index)}>Eliminar Lista</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Task;
