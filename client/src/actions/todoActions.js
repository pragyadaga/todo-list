import axios from "axios";

import {
  GET_ERRORS,
  SET_TODO_LIST,
  ADD_TODO_ITEM,
  TOGGLE_TODO_ITEM,
  DELETE_TODO_ITEM
} from "./types";

// Get todo List
export const listTodos = (userData) => dispatch => {
  axios
    .get("/api/todos")
    .then(res => {
        console.log("TODO ACTION - listTodos")
        console.log(res.data.todos);
        dispatch(setTodoList(res.data.todos));
    }) // call setTodoList action
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add item to todo list
export const addTodo = (item) => dispatch => {
    axios
      .post("/api/todos/new", item)
      .then(res => {
          console.log("TODO ACTION - addTodoItem")
          console.log(res.data.id);
          const newItemWithId = {...item, id: res.data.id, completed: false}
          dispatch(addTodoItem(newItemWithId));
      }) // call to add item to todo list
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

// Set list
export const setTodoList = list => {
    return {
      type: SET_TODO_LIST,
      payload: list
    };
  };

// add item to todo list
export const addTodoItem = item => {
    return {
      type: ADD_TODO_ITEM,
      payload: item
    };
  };

// complete todoitem
export const toggleTodo = (item) => dispatch => {
    const togglePath =   item.completed ? "complete" : "incomplete"
    axios
      .post("/api/todos/"+ item.id + "/" + togglePath)
      .then(res => {
          console.log("TODO ACTION - toggleTodo")
          console.log(res);
          dispatch(toggleTodoItem(item));
      }) // call to complete/uncomplete item to todo list
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };


export const toggleTodoItem = item => {
    return {
      type: TOGGLE_TODO_ITEM,
      payload: item
    };
  };

// delete todoitem
export const deleteTodo = (itemId) => dispatch => {
  axios
    .delete("/api/todos/"+ itemId)
    .then(res => {
        console.log("TODO ACTION - deleteTodo")
        console.log(res);
        dispatch(deleteTodoItem(itemId));
    }) // call to delete item from todo list
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const deleteTodoItem = item => {
  return {
    type: DELETE_TODO_ITEM,
    payload: item
  };
};
