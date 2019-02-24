import axios from "axios";

import {
  GET_ERRORS,
  SET_TODO_LIST,
  ADD_TODO_ITEM,
  COMPLETE_TODO_ITEM
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
          console.log(res);
          dispatch(addTodoItem(item));
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
export const completeTodo = (item) => dispatch => {
    axios
      .post("/api/todos/"+ item.id + "complete")
      .then(res => {
          console.log("TODO ACTION - completeTodo")
          console.log(res);
          dispatch(completeTodoItem(item));
      }) // call to add item to todo list
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };


export const completeTodoItem = item => {
    return {
      type: COMPLETE_TODO_ITEM,
      payload: item
    };
  };

// delete todoitem
