import React from "react";
import TodoItem from "./TodoItem";

// なんとなくの考えでは TodoList が操作用のインタフェースを追加するのがいいのかなと思った
// 状態を親で持てばいいかも、これは状態を渡された時の描写にだけ責任を持つようにする
function TodoList() {
    return (
        <div>
            <TodoItem task_title="task2"></TodoItem>
        </div>
    );
}

export default TodoList;