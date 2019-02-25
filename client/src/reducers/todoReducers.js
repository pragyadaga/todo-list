import {
    SET_TODO_LIST,
    ADD_TODO_ITEM,
    TOGGLE_TODO_ITEM,
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
      case TOGGLE_TODO_ITEM:
        console.log("TODO REDUCER - TOGGLE_TODO_ITEM")
        console.log(action.payload)
        var oldState = state;
        var idToUpdate = action.payload.id
        var updatedState = oldState.map((item) => {
          if (item.id !== idToUpdate) {
            return item;
          }
          else {
            return action.payload;
          }
        })
        return [...updatedState];
      case DELETE_TODO_ITEM:
        console.log("TODO REDUCER - DELETE_TODO_ITEM")
        console.log(action.payload)
        var oldState = state;
        var idToDelete = action.payload
        var updatedState = oldState.filter(item => item.id !== idToDelete)
        return [...updatedState];
      default:
        return state;
    }
  }
