import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import List from './components/List';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from local storage when component mounts
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleAddTask = (newTasks) => {
    setTasks(newTasks);
  };

  const handleDeleteTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Input onAddTask={handleAddTask} />
      <List tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
