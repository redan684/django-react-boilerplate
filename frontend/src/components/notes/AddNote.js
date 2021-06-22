import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { addNote } from "./NotesActions";
import Card from "../UI/Card/Card";
// import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const note = {
      content: this.state.content
    };
    this.props.addNote(note);
  };

  render() {
    return (
      <div>
        <h3>Add new note</h3>
        <Card>
          {/* <Form.Group controlId="contentId">
            <Form.Label>Note</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              placeholder="Enter note"
              value={this.content}
              onChange={this.onChange}
            />
          </Form.Group> */}
          <div className={classes.control}>
          {/* <label htmlFor="content">Note</label> */}
              <input
                
                type="textarea"
                id="content"
                name="content"
                placeholder="Enter New note"
                value={this.content}
                onChange={this.onChange}
              />
          </div>
        </Card> 
        <div className={classes.actions}>
        <Button variant="success" onClick={this.onAddClick}>
          Add note
        </Button>
            
            {/* <Button color="success"  className={classes.btn} onClick={this.onAddClick}>
            Add note
            </Button> */}
            </div>
      </div>
    );
  }
}

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addNote })(withRouter(AddNote));