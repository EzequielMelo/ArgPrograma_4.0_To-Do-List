import React, { useState, useEffect } from 'react';
import FormNewList from './FormNewList';
import ListTask from './ListTask';

function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('La lista de tareas se ha actualizado:', tasks);
  }, [tasks]);

  const handleNewTask = (newTask) => {
    console.log('La tarea que recibí es: ', newTask);
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const handleTaskCompleted = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDeleted = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <FormNewList addNewTask={handleNewTask}/>
      <ListTask tasks={tasks} onTaskCompleted={handleTaskCompleted} onTaskDeleted={handleTaskDeleted} />
    </div>
  );
}

export default Task;