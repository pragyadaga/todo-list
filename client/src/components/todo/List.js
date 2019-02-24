import React, { Component } from 'react';
import { completeTodo } from "../../actions/todoActions";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      completed: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onClickComplete = e => {
    e.preventDefault();
    const item = this.props.item

    // this.props.completeTodo(item);

    console.log(item);
  };

  onClickRemove = e => {
    e.preventDefault();
    const itemData = {
      id: this.props.item.id,
    };

    console.log(itemData)
  };

  render() {
    const item = this.props.item
    var checked = "check_box_outline_blank"

    if(item.completed) {
      checked = "check_box"
    }

    return(
      <div>
        <button className="col s12 m4 l2 circle waves-effect waves-light hoverable white accent-3 no-border"
          onClick={this.onClickComplete}>
            <i className="material-icons">{checked}</i>
        </button>
        <span className="title">{item.title}</span>
        <button className="secondary-content"
          onClick={this.onClickRemove}>
          <i className="material-icons">close</i></button>
      </div>
    );
  }
}

const List = props => (
  <ul className="collection">
    {
      props.items.map((item, index) => <li className="collection-item avatar" key={index}><TodoItem item={item} /></li>)
    }
  </ul>
);

export default List;
