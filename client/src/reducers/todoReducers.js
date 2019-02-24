import {
    SET_TODO_LIST,
    ADD_TODO_ITEM,
    COMPLETE_TODO_ITEM,
    DELETE_TODO_ITEM
  } from "../actions/types";

  const initialState = [];

  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_TODO_LIST:
        console.log("TODO REDUCER - SET_TODO_LIST")
        console.log(action.payload)
        return [...action.payload];
      case ADD_TODO_ITEM:
        console.log("TODO REDUCER - ADD_TODO_ITEM")
        console.log(action.payload)
        return [...state, action.payload];
      case COMPLETE_TODO_ITEM:
        console.log("TODO REDUCER - COMPLETE_TODO_ITEM")
        console.log(action.payload)
        return [...state, action.payload];
      case DELETE_TODO_ITEM:
        console.log("TODO REDUCER - DELETE_TODO_ITEM")
        console.log(action.payload)
        return [...state, action.payload];
      default:
        return state;
    }
  }
