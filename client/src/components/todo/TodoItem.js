import React, { Component } from 'react';

class TodoItem extends Component {
    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };

    onClickToggle = e => {
      e.preventDefault();
      const oldItem = this.props.item
      const updatedItem = {
          ...oldItem,
          completed: !oldItem.completed
      }
      console.log(updatedItem)
      this.props.onToggleTodoClick(updatedItem);
    };

    onClickRemove = e => {
      e.preventDefault();
      const itemData = {
        id: this.props.item.id,
      };

      console.log(itemData)
      this.props.onRemoveTodoClick(itemData)
    };

    handleCompleted = e => {
        this.setState({
         checked: e.target.checked
        });
    };

    render() {
      const item = this.props.item
      var checked = "check_box_outline_blank"
      var title_style = {fontSize:25,verticalAlign:"sub"}

      if(item.completed) {
        checked = "check_box"
        title_style = {fontSize:25,verticalAlign:"sub",textDecoration:"line-through"}
      }


      return(
        <div>
          <button className="white accent-3 no-border"
            style={{left:15, position:"absolute", border: 0}}
            onClick={this.onClickToggle}>
              <i className="material-icons">{checked}</i>
          </button>
          <span className="title" style={title_style}>{item.title}</span>
          <p className="secondary-content"
            onClick={this.onClickRemove}
            style={{cursor:"pointer", color:"#F44336"}}
            >
            <i className="material-icons">close</i>
          </p>
        </div>
      );
    }
  }

export default TodoItem;
