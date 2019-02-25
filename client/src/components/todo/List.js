import React from 'react';
import TodoItem from "./TodoItem.js";

const List = props => (
  props.items && props.items.length > 0
  ?
  <ul className="collection">
    {
      props.items.map((item, index) => {
        return <li className="collection-item avatar" key={index} style={{margin:2}}>
          <TodoItem
          item={item}
          onRemoveTodoClick={props.onRemoveTodoClick}
          onToggleTodoClick={props.onToggleTodoClick}
          />
        </li>
      })
    }
  </ul>
  :
  <p className="flow-text grey-text text-darken-1">
  There are no items in your <span style={{ fontFamily: "monospace" }}>TODO</span> list. Add one Now!
  </p>
);

export default List;
