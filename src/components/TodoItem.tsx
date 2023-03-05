import React from 'react';

function TodoItem({ task_title }: { task_title: string }) {
    return (
        <div>
            <label>
                <input type="checkbox" />{task_title}
            </label>
        </div>
    );
}

export default TodoItem 