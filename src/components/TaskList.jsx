import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
    if (!tasks ||tasks.length === 0) {
        return (
            <div className="space-y-2">
                <p className="text-grey-500 text-center py-4">
                    No tasks available. Please add a task.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
