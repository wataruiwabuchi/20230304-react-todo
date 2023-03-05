import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import TodoInput from './TodoInput';

function App() {
  return (
    <div className="App">
      <a href="https://codingthesmartway.com" target="_blank" rel="noreferrer noopener"><img src={'/img/CTSWLogo.png'} alt="svelte logo" className="logo" /></a>
      <h2>React Todo App</h2>
      {/* <input type="text" className="todo-input" placeholder="Insert todo item ..." bind:value={newTodoTitle} on:keydown={addTodo}> */}
      <TodoInput></TodoInput>
      <div className="inner-container">
          {/*
          <div><label><input className="inner-container-input" type="checkbox" on:change={checkAllTodos}>Check All</label></div>
          <div>{todosRemaining} items left</div>
          */}
          <TodoList />
      </div>
      <div className="inner-container">
          {/*
          <div>
              <button on:click={() => updateFilter('all')} class:active="{currentFilter === 'all'}">All</button>
              <button on:click={() => updateFilter('active')} class:active="{currentFilter === 'active'}">Active</button>
              <button on:click={() => updateFilter('completed')} class:active="{currentFilter === 'completed'}">Completed</button>
          </div>
          <div>
              <button on:click={clearCompleted}>Clear Completed</button>
          </div>
          */}
      </div>
  </div>
  );
}

export default App;
