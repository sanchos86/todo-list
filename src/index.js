import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { todosActions } from './state/modules/todos';
import configureStore from './state/store';
import App from './view/components/App';
import './index.css';

const store = configureStore();

let todos = localStorage.getItem('todos');

if (todos) {
  try {
    todos = JSON.parse(todos);
    store.dispatch(todosActions.preloadTodos(todos));
  } catch (e) {
    throw new Error('Todos from local storage can`t be parsed');
  }
}

store.subscribe(() => {
  const { todos } = store.getState();
  if (todos.length) {
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    localStorage.removeItem('todos');
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
