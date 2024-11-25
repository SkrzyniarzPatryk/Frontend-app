import React, { useState } from 'react';
import AddNewOne from './AddNewOne';
import List from './List';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName, taskCount) => {
    if (taskName.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), name: taskName , count: taskCount}]);
  };

  const removeTask = (taskId) => {
    console.log(tasks);
    setTasks(tasks.filter(task => task.id !== taskId));
    console.log(tasks);
  };

  const refreshTask = (id) => {
    const tmpname = tasks.find(x => x.id === id).name;
    const tmpcount = tasks.find(x => x.id === id).count;
    const tmptasks = tasks.filter(task => task.id !== id);;
    setTasks([...tmptasks, { id: Date.now(), name: tmpname, count: tmpcount }]);
  };
 
  return (
    <div>
      <h1 className="text-center mb-4">To-Do List</h1>
      <AddNewOne onAdd={addTask} />
      <List tasks={tasks} onRemove={removeTask} onRefresh={refreshTask} />
    </div>
  );
};

export default TodoApp;
