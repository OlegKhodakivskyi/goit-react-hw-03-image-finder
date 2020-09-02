import React, { Component } from "react";
import Loading from "./Loader/Loader";
import Notification from "./Notification/Notification";
import axios from "axios";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
    largeImageUrl: null,
  };
  // q=что_искать&page=номер_страницы

  componentDidMount() {
    // const apiKey = "17617972-3da791f5653deb15d8df96d4c";
    this.setState({ loading: true });
    axios
      .get(
        "https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=17617972-3da791f5653deb15d8df96d4c"
      )
      .then((response) => {
        this.setState({
          images: response.data.hits,
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { images, loading, error } = this.state;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Loading />}
        {images.length > 0 && (
          <ul>
            {this.state.images.map((image) => (
              <li key={image.id}>
                <img src={image.largeImageURL} alt={image.tags}></img>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
