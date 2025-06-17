// import icons from the icon library
import { Check, Trash2 } from 'lucide-react';
// import react and useState hook
import React, { useState } from 'react';

//define item TaskItem component
export default function TaskItem({ task, onToggle, onDelete }) {
    // TaskItem component receives task, onToggle, and onDelete as props
    return (
        <div className={`flex items-center gap-3 p-3 rounded-md border transition-all ${task.completed 
        ? 'bg-green-50 border-green-200' 
        : 'bg-gray-50 border-gray-200'}`}
        >
            {/* Button to toggle task completion */}
            <button
                onClick={() => onToggle(task.id)}
                className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors 
                    ${task.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
            >
                {/* show check icon if the task is completed */}
                {task.completed && <Check size={12} />}
            </button>
            {/* Task text */}
            <span
            className={`flex-1 transition-all 
                ${task.completed
                    ? 'line-through text-gray-500'
                    : 'text-gray-800'
                }`}
            >
                {task.text} 
            </span>
            {/* Button to delete the task */}
            <button
                // call onDelete with task ID when clicked
                onClick={() => onDelete(task.id)}
                className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
            >
                {/* trash icon for deleting the task */}
                <Trash2 size={16} />
            </button>
        </div>
    );
}
