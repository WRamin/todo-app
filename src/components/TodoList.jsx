import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskCounter from './TaskCounter';
import TaskList from './TaskList';
import ClearCompletedButton from './ClearCompletedButton';

export default function TodoList() {
    // State to manage tasks and input value. initialized as an empty array
    const [tasks, setTasks] = useState([]);
    // State to manage the input value for adding new tasks
    const [taskInput, setTaskInput] = useState('');

    // Functions to handle adding, toggling, deleting tasks and clearing completed tasks
    const addTask = () => {
        // Check if the input is not empty before adding a task
        if (taskInput.trim() !== '') {
            // Add a new task with a unique id, text from input, and completed status
            setTasks([...tasks, {
                // Generate a unique id using Date.now()
                id: Date.now(),
                // Use the trimmed input text
                text: taskInput.trim(),
                // Set completed status to false initially
                completed: false
            }]);
            // Clear the input field after adding the task
            setTaskInput('');
        }
    };

    // Function to toggle the completed status of a task
    const toggleTask = (id) => {
        // Update the tasks state by mapping through the current tasks
        setTasks(tasks.map(task =>
            // If the task id matches the provided id, toggle its completed status
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Function to delete a task by its id
    const deleteTask = (id) => {
        // Filter out the task with the provided id from the tasks array
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Function to clear all completed tasks
    const clearCompleted = () => {
        // Filter out tasks that are not completed and update the tasks state
        setTasks(tasks.filter(task => !task.completed));
    };

    // Calculate the number of completed tasks and total tasks
    const completedCount = tasks.filter(task => task.completed).length;
    // Total number of tasks is the length of the tasks array
    const totalCount = tasks.length;

    // Render the main TodoList component
    return (
        <div className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
                To-Do List
            </h1>

            {/* input field and button for adding tasks */}
            <TaskInput
                value={taskInput}     // current input text
                onChange={setTaskInput}    // update input text state
                onAdd={addTask}     // add task when button clicked or enter pressed
            />

            {/* Display the task counter with completed and total tasks */}
            <TaskCounter 
                completed={completedCount} // number of completed tasks
                total={totalCount}      // total number of tasks
            />

            {/* List of tasks with toggle and delete functionality */}
            <TaskList 
                tasks={tasks}  // array of tasks
                onToggle={toggleTask} // function to toggle task completion 
                onDelete={deleteTask}   // function to delete
            />

            {/* Button to clear completed tasks, only shown if there are completed tasks */}
            <ClearCompletedButton 
                completedCount={completedCount}     // number if completed tasks
                onClearCompleted={clearCompleted}  // function to clear completed tasks
            />
        </div>
    );
}