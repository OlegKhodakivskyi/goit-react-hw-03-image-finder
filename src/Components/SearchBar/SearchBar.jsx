import React, { Component } from "react";
import css from "./SearchBar.module.css";

export default class SearchBar extends Component {
  state = {
    inputQuery: "",
  };

  handleChange = (e) => {
    this.setState({ inputQuery: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.inputQuery);
    this.props.onSubmit(this.state.inputQuery);
    this.setState({ inputQuery: "" });
  };

  render() {
    return (
      <>
        <header className={css.SearchBar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css["SearchForm-button"]}>
              <span className={css["SearchForm-button-label"]}>Search</span>
            </button>

            <input
              className={css["SearchForm-input"]}
              type="text"
              autoComplete="off"
              autoFocus={true}
              placeholder="Search images and photos"
              value={this.state.inputQuery}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}
