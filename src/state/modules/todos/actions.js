import types from './types';

const addTodo = (text) => ({
  type: types.TODO_ADD,
  text
});

const deleteTodo = (id) => ({
  type: types.TODO_DELETE,
  id
});

const toggleTodo = (id) => ({
  type: types.TODO_TOGGLE,
  id
});

const preloadTodos = (todos) => ({
  type: types.TODOS_PRELOAD,
  todos
});

export default {
  addTodo,
  deleteTodo,
  toggleTodo,
  preloadTodos
};
