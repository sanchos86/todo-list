import types from './types';

const todos = (state = [], action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case types.TODO_DELETE:
      return state.filter((todo, index) => {
        return index !== action.id;
      });
    case types.TODO_TOGGLE:
      return state.map((todo, index) => {
        if (index === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case types.TODOS_PRELOAD:
      return action.todos;
    default:
      return state;
  }
};

export default todos;
