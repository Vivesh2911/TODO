import React from 'react';
import styles from './List.module.css';

export default function List({ tasks, onDeleteTask }) {
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    onDeleteTask(updatedTasks);
  };

  return (
    <div className={styles.listcontainer}>
      <div className={styles.list}>
        {tasks.map((task, index) => (
          <div key={index} className={styles.task}>
            
            <li>{index+1+".  "}{task}<button className={styles.delt} onClick={() => handleDelete(index)}>Delete</button></li>
            
          </div>
        ))}
      </div>
    </div>
  );
}
