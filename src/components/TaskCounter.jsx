import React from 'react';

export default function TaskCounter({ completed, total }) {
    if (total === 0) return null;

    return (
        <div className="text-sm text-gray-600 mb-4">
            {completed} of {total} tasks completed
        </div>
    );
}