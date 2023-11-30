import React, { useState, useEffect } from 'react';
import FormNewList from './FormNewList';
import ListTask from './ListTask';

function Task() {
  const [lists, setLists] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    console.log('Las listas se han actualizado:', lists);
  }, [lists]);

  const handleNewList = () => {
    setLists((currentLists) => [...currentLists, []]);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleNewTask = (newTask, listIndex) => {
    setLists((currentLists) =>
      currentLists.map((list, index) =>
        index === listIndex ? [...list, newTask] : list
      )
    );
  };

  const handleTaskCompleted = (listIndex, taskId) => {
    setLists((currentLists) =>
      currentLists.map((list, index) =>
        index === listIndex
          ? list.map((task) =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          : list
      )
    );
  };

  const handleTaskDeleted = (listIndex, taskId) => {
    setLists((currentLists) =>
      currentLists.map((list, index) =>
        index === listIndex ? list.filter((task) => task.id !== taskId) : list
      )
    );
  };

  return (
    <div style={{ margin: '10px' }}>
      <button onClick={handleNewList}>Añada otra lista</button>
      {lists.map((list, index) => (
        <div key={index}>
          <h4>Lista {index + 1}</h4>
          <ListTask
            tasks={list}
            onTaskCompleted={(taskId) => handleTaskCompleted(index, taskId)}
            onTaskDeleted={(taskId) => handleTaskDeleted(index, taskId)}
          />
          {showForm && (
            <FormNewList
              addNewTask={(newTask) => handleNewTask(newTask, index)}
            />
          )}
        </div>
      ))}
      {showForm && <button onClick={handleCloseForm}>Cancelar</button>}
    </div>
  );
}

export default Task;