import React from 'react';

export default function ClearCompletedButton({completedCount, onClearCompleted}) {
    if (completedCount === 0) return null;

    return (
        <button
            onClick={onClearCompleted}
            className="w-full mt-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
            Clear Completed ({completedCount})
        </button>
    );
}