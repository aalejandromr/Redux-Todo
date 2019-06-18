import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actions";
// Create an initial State object that
// looks a lot like the one returned in the reducer function
// in index.js

const initialState = {
  todos: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if(index === action.payload)
          {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          else 
          {
            return todo
          }
        })
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload)
      }
    default:
      return state;
  }
}

export default reducer;
