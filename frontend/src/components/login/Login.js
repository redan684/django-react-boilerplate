import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import {  Row,  Form, Navbar, Nav } from "react-bootstrap";

import { login } from "./LoginActions.js"; // new import

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.login(userData, "/dashboard"); // <--- login request
  };
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand  href="/">Home</Navbar.Brand>
      </Navbar>
      <Card className={classes.login}>
        <Row>
          <h1>Login</h1>
          <Form>
            {/* <Form.Group controlId="usernameId"> */}
            <div className={classes.control}>
              {/* <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                /> */}
              <label htmlFor="email">User Name</label>
              <input
                type="text"
                id="email"
                name="username"
                placeholder="Enter user name"
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>
            {/* </Form.Group> */}

            {/* <Form.Group controlId="passwordId">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </Form.Group> */}
             <div
          className={classes.control} 
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </div>
          </Form>
          <div className={classes.actions}>
            <Button color="primary"  className={classes.btn} onClick={this.onLoginClick}>
              Login
            </Button>
          </div>
          <p className="mt-2">
            Don't have account? <Link to="/signup">Signup</Link>
          </p>
        </Row>
      </Card>
      </>
    );
  }
}

// connect action and store and component
Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  login,
})(withRouter(Login));
