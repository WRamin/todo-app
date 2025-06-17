import React from 'react';

// display a message showing how many tasks are completed of all the total tasks in app
export default function TaskCounter({ completed, total }) {
    // if there are no tasks, return null (message wont show)
    if (total === 0) return null;

    // if there are tasks, return the div
    return (
        <div className="text-sm text-gray-600 mb-4">
            {/*Display the progress ... 2 of 3 tasks completed. */}
            {completed} of {total} tasks completed
        </div>
    );
}