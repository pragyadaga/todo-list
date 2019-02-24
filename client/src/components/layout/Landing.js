import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to root page, should redirect them to todo
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/todo");
    }
  }

  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
          <h4>
            <b>Build and Rethink</b> your priorities and task with a simple{" "}
            <span style={{ fontFamily: "monospace" }}>ToDo List</span> and accomplish great things
          </h4>
            <p className="flow-text grey-text text-darken-1">
              <i>"No matter how expert you may be, well-designed checklists can improve outcomes"</i>
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>

            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { }
)(Landing);
