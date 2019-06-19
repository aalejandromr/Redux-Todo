export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function completeTodo(id) 
{
  return {
    type: COMPLETE_TODO,
    payload: id
  }
}

export function deleteTodo(id)
{
  return {
    type: DELETE_TODO,
    payload: id
  }
}
