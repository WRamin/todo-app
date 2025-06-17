import React from 'react';


export default function ClearCompletedButton({completedCount, onClearCompleted}) {
    // if there are no complete tasks, return null (button wont show)
    if (completedCount === 0) return null;

    // if there are completed tasks, return the button
    return (
        <button
            // event for when button is clicked, call the onClearCompleted function
            onClick={onClearCompleted}
            className="w-full mt-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
            {/* Display the number of completed tasks */}
            Clear Completed ({completedCount})
        </button>
    );
}