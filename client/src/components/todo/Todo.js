import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { listTodos, addTodo } from "../../actions/todoActions";
import List from "./List.js";
import AddItem from "./AddItem.js";

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItemTitle: ""
    };
  }

  componentWillMount() {
    this.props.listTodos();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({items: nextProps.todo})
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onAddTodoClick = e => {
    e.preventDefault();
    this.props.addTodo({title:this.state.newItemTitle, completed: false});
    this.setState({ newItemTitle: ""});
  };

  render() {
    const { user } = this.props.auth;

    return(
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there!</b> {user.firstName}
              <p className="flow-text grey-text text-darken-1">
                Here is your {" "}
                <span style={{ fontFamily: "monospace" }}>TODO</span> list
              </p>
              <List items={this.state.items} />
              <AddItem onChange={this.onChange} onAddTodoClick={this.onAddTodoClick} value={this.state.newItemTitle}/>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  todo: PropTypes.array.isRequired,
  listTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { logoutUser,  listTodos, addTodo }
)(Todo);
