import React, { Component } from "./node_modules/react";

export default class SearchBar extends Component {
  render() {
    return (
      <>
        <header className="SearchBar">
          <form className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
