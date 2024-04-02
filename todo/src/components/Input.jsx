import React, { useState } from 'react';
import styles from './Input.module.css';

export default function Input({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      alert('Please enter something');
      return;
    }
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    console.log(tasks);
    onAddTask(tasks);
      setTask('');
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.Formstr}>
        <input 
          type="text" 
          placeholder='Enter the Task' 
          value={task}
          onChange={handleChange}
        />
        <button 
          className={styles.add} 
          onClick={handleSubmit}
        >
          Add task
        </button>
      </div>
    </div>
  );
}
