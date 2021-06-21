import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";

import {
 
 
  Row,
 
  Form,
  Navbar, 
  FormControl
} from "react-bootstrap";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

import { signupNewUser } from "./SignupActions"; // new import

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // update function to call the action
  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.signupNewUser(userData); // <-- signup new user request
  };

  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand  href="/">Home</Navbar.Brand>
      </Navbar>
      <Card className={classes.login}>
        <Row>
        
            <h1>Sign up</h1>
            <Form>
              {/* <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  isInvalid={this.props.createUser.usernameError}
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid">
                  {this.props.createUser.usernameError}
                </FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  isInvalid={this.props.createUser.passwordError}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
                  {this.props.createUser.passwordError}
                </Form.Control.Feedback>
              </Form.Group> */}

              <div className={classes.control}>
              {/* <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                /> */}
              <label htmlFor="user">User Name</label>
              <input
                          isInvalid={this.props.createUser.usernameError}
                type="text"
                id="user"
                name="username"
                placeholder="Enter user name"
                value={this.state.username}
                onChange={this.onChange}
              />
                  <FormControl.Feedback type="invalid">
                  {this.props.createUser.usernameError}
                </FormControl.Feedback>
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
          isInvalid={this.props.createUser.passwordError}
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.onChange}
          />
                   <Form.Control.Feedback type="invalid">
                  {this.props.createUser.passwordError}
                </Form.Control.Feedback>
        </div>
              
            </Form>
            <div className={classes.actions}>
            <Button color="primary"  className={classes.btn} onClick={this.onSignupClick}>
              Sign up
            </Button>
            </div>
            <p className="mt-2">
              Already have account? <Link to="/login">Login</Link>
            </p>
         
        </Row>
      </Card>
      </>
    );
  }
}

// connect action and reducer
// replace 
// export default Signup;
// with code below:

Signup.propTypes = {
  signupNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  createUser: state.createUser
});

export default connect(mapStateToProps, {
  signupNewUser
})(withRouter(Signup));