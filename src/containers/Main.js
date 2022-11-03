import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DiaryForm from "../components/DiaryForm";

export class Main extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="diary-app">
          <h1>Dear diary...</h1>
          <DiaryForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
