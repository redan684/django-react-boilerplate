
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { login } from "./login/LoginActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Home extends Component {
  onLogin = () => {
    this.props.login();
  };
  render() {
    // const { user } = this.props.auth;
    return (
    //   <Container>
    //     <h1>Home</h1>
    //     <p>
    //       <Link to="/login/">Login</Link>
    //     </p>
    //     <p>
    //       <Link to="/signup">Sign up</Link>
    //     </p>
    //     <p>
    //       <Link to="/dashboard">Dashboard</Link>
    //     </p>
    //   </Container>
<div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* <Navbar.Text>
              User: <b>{user.username}</b>
            </Navbar.Text> */}
            {/* <Nav.Link onClick={this.onLogin}>Login</Nav.Link> */}
            <Nav.Link href="/login/">Login</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        </div>
    );
  }
}

// export default Home;
Home.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  login
})(withRouter(Home));