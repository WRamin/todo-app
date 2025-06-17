import React from 'react';
import { Plus } from 'lucide-react';

export default function TaskInput({ value, onChange, onAdd }) {
    // handle key press event for the input field
    const handleKeyPress = (e) => {
        // if the key pressed is 'Enter', call the onAdd function
        if (e.key === 'Enter') {
            onAdd();
        }
    };

    // return the input field and button
    return (
        <div className='flex gap-2 mb-6'>
            {/* input field for typing a new task */}
            <input
                type="text"
                value={value} //controlled input, value comes from prop
                //update the value of prop when the user types (event)
                onChange={(e) => onChange(e.target.value)}
                // call handleKeyPress when a key is pressed
                onKeyPress={handleKeyPress}
                placeholder="Add a new task..." //placeholder text
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {/* button to add the task */}
            <button
                // when the button is clicked, call the onAdd function
                onClick={onAdd}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
                {/* icon for the button */}
                <Plus size={20} />
            </button>
        </div>

    );
}