import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
    // check if tasks is undefined or an empty array
    if (!tasks ||tasks.length === 0) {
        return (
            // display a message when there are no tasks
            <div className="space-y-2">
                <p className="text-grey-500 text-center py-4">
                    No tasks available. Please add a task.
                </p>
            </div>
        );
    }

    // map through the tasks array and render TaskItem for each task
    return (
        <div className="space-y-2">
            {/* Render each task using TaskItem component */}
            {tasks.map(task => (
                <TaskItem
                    key={task.id} // inique key for React to efficiently update the UI
                    task={task} //pass the task object to TaskItem
                    onToggle={onToggle} //pass the toggle function to TaskItem
                    onDelete={onDelete} // pass the delete function to TaskItem
                />
            ))}
        </div>
    );
}
