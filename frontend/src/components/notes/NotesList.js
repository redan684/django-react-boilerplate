import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNotes } from "./NotesActions";

import Note from "./Note";

import Card from "../UI/Card/Card";
import classes from "./NotesList.module.css";

class NotesList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const { notes } = this.props.notes;

    if (notes.length === 0) {
      return (
        <h3 className="noteslist__fallback">
          Found no notes.Please add your first note
        </h3>
      );
    }

    let items = notes.map((note) => {
      return <Note key={note.id} note={note} />;
    });

    return (
      <Card className={classes.noteslist}>
        <ul>
          <h2>Notes</h2>
          {items}
          <hr />
        </ul>
      </Card>
    );
  }
}

NotesList.propTypes = {
  getNotes: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps, {
  getNotes,
})(withRouter(NotesList));
