import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskCounter from './TaskCounter';
import TaskList from './TaskList';
import ClearCompletedButton from './ClearCompletedButton';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, {
                id: Date.now(),
                text: taskInput.trim(),
                completed: false
            }]);
            setTaskInput('');
        }
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    const completedCount = tasks.filter(task => task.completed).length;
    const totalCount = tasks.length;

    return (
        <div className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
                To-Do List
            </h1>

            <TaskInput
                value={taskInput}
                onChange={setTaskInput}
                onAdd={addTask}
            />

            <TaskCounter 
                completed={completedCount}
                total={totalCount} 
            />

            <TaskList 
                tasks={tasks}  // Fixed prop name from "task" to "tasks"
                onToggle={toggleTask}
                onDelete={deleteTask}
            />

            <ClearCompletedButton 
                completedCount={completedCount}
                onClearCompleted={clearCompleted}  // Fixed casing to match
            />
        </div>
    );
}