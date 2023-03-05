import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type TodoItem = {
    title: string;
    isCompleted: boolean;
};

enum DiplayedStatus {
    ALL,
    ACTIVE,
    COMPLETED
}

const returnDisplayedFilterFunction = (displayedStatus: DiplayedStatus) => {
    switch (displayedStatus) {
        case DiplayedStatus.ALL:
            return () => true;
        case DiplayedStatus.ACTIVE:
            return (todoItem: TodoItem) => !todoItem.isCompleted;
        case DiplayedStatus.COMPLETED:
            return (todoItem: TodoItem) => todoItem.isCompleted;
    }
}

function App() {

    const [currentFilter, setCurrentFilter] = useState<DiplayedStatus>(DiplayedStatus.ALL);
    const [inputText, setInputText] = useState<string>('')
    const [todoList, setTodoList] = useState<TodoItem[]>(
        [
            { title: 'Learn React', isCompleted: false },
            { title: 'Learn React2', isCompleted: false },
        ]
    );

    const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const addItem = () => {
        if (inputText === '') {
            return;
        }

        let newTodoList = [...todoList];
        newTodoList.push({
            title: inputText,
            isCompleted: false
        });
        setTodoList(newTodoList);
        setInputText('');
    }

    const deleteItem = (index: number) => {
        let newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    const toggleItemCompletion = (index: number) => {
        let newTodoList = [...todoList];
        newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
        setTodoList(newTodoList);
    }

  return (
    <div className="App">
      <a href="https://codingthesmartway.com" target="_blank" rel="noreferrer noopener"><img src={'/img/CTSWLogo.png'} alt="svelte logo" className="logo" /></a>
      <h2>React Todo App</h2>
      <div>
        <label>
            <input type="text" className="todo-input" placeholder="Insert todo item ..." value={inputText} onChange={handleInputText}></input>
            <button onClick={addItem}>Submit</button>
        </label>
      </div>
      <div className="inner-container">
          {
            todoList.filter(returnDisplayedFilterFunction(currentFilter)).map((todoItem, index) => {
              return (
                <div>
                    <label>
                        <input type="checkbox" checked={todoItem.isCompleted} onClick={() => toggleItemCompletion(index)} />
                        <p style={todoItem.isCompleted ? { textDecoration: "line-through" } : {}}>
                            {todoItem.title}
                        </p>
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </label>
                </div>
              );
            })
          }
      </div>
      <div className="inner-container">
          {
          <div>
              <button onClick={() => setCurrentFilter(DiplayedStatus.ALL)}>ALL</button>
              <button onClick={() => setCurrentFilter(DiplayedStatus.ACTIVE)}>ACTIVE</button>
              <button onClick={() => setCurrentFilter(DiplayedStatus.COMPLETED)}>Completed</button>
          </div>
          }
      </div>
  </div>
  );
}

export default App;

export type { TodoItem };