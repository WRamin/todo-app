import React from 'react';
import { Plus } from 'lucide-react';

export default function TaskInput({ value, onChange, onAdd }) {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onAdd();
        }
    };

    return (
        <div className='flex gap-2 mb-6'>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new task..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                onClick={onAdd}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
                <Plus size={20} />
            </button>
        </div>

    );
}